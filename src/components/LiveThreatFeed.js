import React, { useEffect, useMemo, useRef, useState } from "react";
import { geoNaturalEarth1 } from "d3-geo";

/**
 * LIVE THREAT MAP — Check Point inspired (Portfolio Demo)
 * - API-free, works on GitHub Pages
 * - "Dark command-center map" look even in Light mode
 * - Dense dotted world silhouette + grid overlay + arcs + pulsing nodes
 */

const CITIES = [
  { name: "San Francisco, US", lon: -122.4194, lat: 37.7749 },
  { name: "New York, US", lon: -74.006, lat: 40.7128 },
  { name: "Mexico City, MX", lon: -99.1332, lat: 19.4326 },
  { name: "São Paulo, BR", lon: -46.6333, lat: -23.5505 },
  { name: "London, UK", lon: -0.1276, lat: 51.5072 },
  { name: "Paris, FR", lon: 2.3522, lat: 48.8566 },
  { name: "Berlin, DE", lon: 13.405, lat: 52.52 },
  { name: "Warsaw, PL", lon: 21.0122, lat: 52.2297 },
  { name: "Istanbul, TR", lon: 28.9784, lat: 41.0082 },
  { name: "Cairo, EG", lon: 31.2357, lat: 30.0444 },
  { name: "Lagos, NG", lon: 3.3792, lat: 6.5244 },
  { name: "Nairobi, KE", lon: 36.8219, lat: -1.2921 },
  { name: "Dubai, AE", lon: 55.2708, lat: 25.2048 },
  { name: "Karachi, PK", lon: 67.0099, lat: 24.8615 },
  { name: "Mumbai, IN", lon: 72.8777, lat: 19.076 },
  { name: "Singapore, SG", lon: 103.8198, lat: 1.3521 },
  { name: "Tokyo, JP", lon: 139.6503, lat: 35.6762 },
  { name: "Seoul, KR", lon: 126.978, lat: 37.5665 },
  { name: "Beijing, CN", lon: 116.4074, lat: 39.9042 },
  { name: "Sydney, AU", lon: 151.2093, lat: -33.8688 },
];

const ATTACK_TYPES = [
  { type: "Malware", color: "#ef4444", label: "MALWARE" },
  { type: "Phishing", color: "#a855f7", label: "PHISHING" },
  { type: "Exploit", color: "#f59e0b", label: "EXPLOIT" },
];

const TACTICS = [
  "Credential Access",
  "Initial Access",
  "Discovery",
  "Execution",
  "Persistence",
  "Privilege Escalation",
  "Command & Control",
];

function pickDifferentCity(a) {
  let b = a;
  while (b === a) b = CITIES[Math.floor(Math.random() * CITIES.length)];
  return b;
}

function nowTime() {
  const d = new Date();
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function arcPath(a, b) {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dist = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(110, Math.max(34, dist * 0.22));
  const cx = mx;
  const cy = my - lift;
  return `M ${a[0]} ${a[1]} Q ${cx} ${cy} ${b[0]} ${b[1]}`;
}

/** Deterministic RNG */
function seeded(seed = 1337) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/**
 * Generate dense dotted world silhouette (recognizable)
 */
function generateLandDots(count = 2400, seed = 2026) {
  const rand = seeded(seed);

  const regions = [
    { lonMin: -168, lonMax: -52, latMin: 10, latMax: 73 },   // NA
    { lonMin: -100, lonMax: -60, latMin: 8, latMax: 22 },    // CA band
    { lonMin: -82, lonMax: -34, latMin: -56, latMax: 12 },   // SA
    { lonMin: -12, lonMax: 45, latMin: 35, latMax: 71 },     // EU
    { lonMin: -18, lonMax: 55, latMin: -35, latMax: 37 },    // AF
    { lonMin: 35, lonMax: 65, latMin: 12, latMax: 42 },      // ME
    { lonMin: 60, lonMax: 155, latMin: 5, latMax: 72 },      // AS
    { lonMin: 95, lonMax: 145, latMin: -12, latMax: 14 },    // SEA
    { lonMin: 112, lonMax: 154, latMin: -44, latMax: -10 },  // AU
    { lonMin: -74, lonMax: -12, latMin: 58, latMax: 84 },    // Greenland
    { lonMin: 124, lonMax: 146, latMin: 30, latMax: 46 },    // JP/KR
  ];

  const pts = [];
  let attempts = 0;

  while (pts.length < count && attempts < count * 60) {
    attempts++;
    const r = regions[Math.floor(rand() * regions.length)];
    const lon = r.lonMin + rand() * (r.lonMax - r.lonMin);
    const lat = r.latMin + rand() * (r.latMax - r.latMin);

    // carve oceans/gaps (heuristics)
    if (lon > -60 && lon < -18 && lat > 35 && lat < 63 && rand() < 0.85) continue;
    if (lon > -5 && lon < 35 && lat > 12 && lat < 30 && rand() < 0.45) continue;
    if (lon > -75 && lon < -48 && lat > -10 && lat < 5 && rand() < 0.30) continue;
    if (lon > 75 && lon < 140 && lat > 55 && rand() < 0.35) continue;
    if (lat < -60) continue;

    pts.push([lon, lat]);
  }

  return pts;
}

export default function LiveThreatFeed() {
  const [filter, setFilter] = useState("All");
  const [events, setEvents] = useState([]);
  const [arcs, setArcs] = useState([]);
  const [nodes, setNodes] = useState([]);
  const idRef = useRef(0);

  /**
   * ✅ IMPORTANT:
   * Your container is 260px tall. So the SVG viewBox should also be ~260px tall,
   * otherwise everything gets compressed and overlays collide visually.
   */
  const width = 560;
  const height = 260;

  const projection = useMemo(() => {
    return geoNaturalEarth1()
      .scale(165)
      .translate([width / 2, height / 2 + 6]);
  }, [width, height]);

  const landDots = useMemo(() => {
    const pts = generateLandDots(2600, 20260302);
    return pts.map(([lon, lat]) => projection([lon, lat])).filter(Boolean);
  }, [projection]);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const src = CITIES[Math.floor(Math.random() * CITIES.length)];
      const dst = pickDifferentCity(src);

      const atk = ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)];
      const tactic = TACTICS[Math.floor(Math.random() * TACTICS.length)];

      if (filter !== "All" && atk.type !== filter) return;

      const srcP = projection([src.lon, src.lat]);
      const dstP = projection([dst.lon, dst.lat]);
      if (!srcP || !dstP) return;

      const id = ++idRef.current;

      const arc = { id, d: arcPath(srcP, dstP), color: atk.color, createdAt: Date.now() };
      const evt = { id, time: nowTime(), type: atk.label, tactic, from: src.name, to: dst.name };
      const node = { id, src: srcP, dst: dstP, color: atk.color, createdAt: Date.now() };

      setArcs((prev) => [arc, ...prev].slice(0, 10));
      setNodes((prev) => [node, ...prev].slice(0, 6));
      setEvents((prev) => [evt, ...prev].slice(0, 6));
    }, 980);

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setArcs((prev) => prev.filter((a) => now - a.createdAt < 2100));
      setNodes((prev) => prev.filter((n) => now - n.createdAt < 1600));
    }, 300);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(cleanupInterval);
    };
  }, [filter, projection]);

  return (
    <div className="glass glow-hover rounded-xl p-5 border border-blue-500/20 w-full">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-300">
          LIVE THREAT MAP
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400">
          Simulation • Live Attacks
        </div>
      </div>

      {/* Filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        {["All", "Malware", "Phishing", "Exploit"].map((t) => {
          const active = filter === t;
          return (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={[
                "text-xs px-3 py-1 rounded-full border transition font-medium",
                active
                  ? "bg-blue-500/15 border-blue-500/40 text-blue-800 dark:text-blue-200"
                  : "bg-white/40 dark:bg-black/30 border-blue-500/15 text-slate-700 dark:text-slate-300 hover:bg-blue-500/10",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-stretch">
        {/* ✅ Map Panel */}
        <div className="rounded-lg border border-blue-500/15 overflow-hidden">
          <div
            className="w-full relative"
            style={{
              height: 260,
              background:
                "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 55%)," +
                "radial-gradient(circle at 80% 70%, rgba(168,85,247,0.16), transparent 55%)," +
                "linear-gradient(180deg, rgba(2,6,23,0.96), rgba(2,6,23,0.98))",
            }}
          >
            {/* grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.10) 1px, transparent 1px)," +
                  "linear-gradient(90deg, rgba(59,130,246,0.10) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
            {/* vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.0), rgba(0,0,0,0.55) 75%)",
              }}
            />

            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${width} ${height}`}
              className="block relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="3.2" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.75 0"
                    result="glow"
                  />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* dotted world */}
              {landDots.map((p, i) => (
                <circle
                  key={i}
                  cx={p[0]}
                  cy={p[1]}
                  r="1.05"
                  fill="rgba(226,232,240,0.34)"
                  opacity="0.95"
                />
              ))}

              {/* arcs */}
              {arcs.map((a) => (
                <g key={a.id} filter="url(#arcGlow)">
                  <path
                    d={a.d}
                    fill="none"
                    stroke={a.color}
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    opacity="0.95"
                  />
                  <circle r="3.2" fill={a.color}>
                    <animateMotion dur="1.5s" repeatCount="1" path={a.d} />
                  </circle>
                </g>
              ))}

              {/* pulsing endpoints */}
              {nodes.map((n) => (
                <g key={n.id} filter="url(#softGlow)">
                  <circle cx={n.src[0]} cy={n.src[1]} r="2.6" fill={n.color} opacity="0.95" />
                  <circle cx={n.src[0]} cy={n.src[1]} r="2.6" fill={n.color} opacity="0.55">
                    <animate attributeName="r" values="2.6;10;2.6" dur="1.4s" repeatCount="1" />
                    <animate attributeName="opacity" values="0.55;0;0.55" dur="1.4s" repeatCount="1" />
                  </circle>

                  <circle cx={n.dst[0]} cy={n.dst[1]} r="2.6" fill={n.color} opacity="0.95" />
                  <circle cx={n.dst[0]} cy={n.dst[1]} r="2.6" fill={n.color} opacity="0.55">
                    <animate attributeName="r" values="2.6;10;2.6" dur="1.4s" repeatCount="1" />
                    <animate attributeName="opacity" values="0.55;0;0.55" dur="1.4s" repeatCount="1" />
                  </circle>
                </g>
              ))}
            </svg>
          </div>

          {/* ✅ Footer + legend OUTSIDE the map (no overlap ever) */}
          <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-700 dark:text-slate-300">
            <span>Simulated geoIP → geoIP arcs</span>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                Malware
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#a855f7" }} />
                Phishing
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
                Exploit
              </span>

              <span className="font-mono ml-2">~1/sec</span>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="rounded-lg border border-blue-500/15 bg-white/40 dark:bg-black/40 p-3 h-[300px] flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-wide text-slate-800 dark:text-slate-200">
              RECENT EVENTS
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400">last 6</div>
          </div>

          <div className="mt-3 space-y-2 font-mono text-[12px] overflow-auto pr-1 flex-1">
            {events.length === 0 ? (
              <div className="text-slate-600 dark:text-slate-400">Waiting for events…</div>
            ) : (
              events.map((e) => (
                <div
                  key={e.id}
                  className="rounded-md border border-blue-500/10 bg-white/35 dark:bg-black/55 px-2 py-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">{e.time}</span>
                    <span
                      className={[
                        "text-[10px] px-2 py-[2px] rounded-full border",
                        e.type === "MALWARE"
                          ? "text-red-700 dark:text-red-300 border-red-500/30 bg-red-500/10"
                          : e.type === "PHISHING"
                          ? "text-purple-700 dark:text-purple-300 border-purple-500/30 bg-purple-500/10"
                          : "text-amber-800 dark:text-amber-300 border-amber-500/30 bg-amber-500/10",
                      ].join(" ")}
                    >
                      {e.type}
                    </span>
                  </div>

                  <div className="mt-1 text-slate-900 dark:text-slate-100">
                    {e.from} → {e.to}
                  </div>

                  <div className="mt-1 text-slate-700 dark:text-slate-300">
                    tactic:{" "}
                    <span className="text-slate-900 dark:text-slate-200">{e.tactic}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
            Detect → Enrich → Respond
          </div>
        </div>
      </div>
    </div>
  );
}