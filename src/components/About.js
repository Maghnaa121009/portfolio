import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaChevronRight, FaBookOpen, FaChevronDown } from "react-icons/fa";

const highlights = [
  { year: "2019–2023", label: "B.Tech IT → Cyber foundation" },
  { year: "DigiALERT", label: "Trainee → Trainer (iOS + Cloud Security)" },
  { year: "Cognizant", label: "Security Platform Engineer (Enterprise)" },
  { year: "UM–Dearborn", label: "MS Cybersecurity & IA" },
  { year: "Research", label: "Automotive Ethernet IDS testbench" },
  { year: "CSA – UMD", label: "Founder & President" },
  { year: "CyberForce|Q", label: "SOC Analyst — IR, Detections" },
  { year: "Now", label: "Security Engineering + Agentic AI Automation" },
];

const About = () => {
  const [open, setOpen] = useState(false);

  // Short preview (always visible)
  const preview = useMemo(
    () => [
      `I live by the belief that one life is all we have — and I am determined to explore its endless possibilities by embracing every opportunity to grow, build, and lead.`,
      `I’m currently an Event Response Analyst (SOC Analyst) at CyberForce|Q, where I triage and investigate alerts, validate detections, support incident response, and document operational workflows across platforms like Splunk, Microsoft Defender, Microsoft Sentinel, AWS GuardDuty, and CrowdStrike.`,
      `My focus is evolving toward Security Engineering — strengthening detection pipelines and building AI-driven, agentic security automation to improve response speed, intelligence, and SOC resilience.`,
    ],
    []
  );

  // Full story (collapsible)
  const fullStory = useMemo(
    () => [
      `My journey into cybersecurity began in high school, where I chose to pursue a B.Tech in Information Technology to build a strong technical foundation. What started as curiosity evolved into passion through webinars, workshops, and hands-on learning.`,
      `I began my professional journey at DigiALERT as a trainee, later advancing to a trainer role where I mentored professionals in iOS security and cloud security. During this time, I contributed to vulnerability assessments, CIS Controls policy development and implementation, SOC operations projects, and SOX change management initiatives.`,
      `I later joined Cognizant as a Security Platform Engineer, gaining exposure to enterprise-scale security environments. Driven by a desire to specialize further and deepen my expertise, I pursued a Master’s in Cybersecurity and Information Assurance at the University of Michigan–Dearborn.`,
      `During my master’s program, I worked as a Research Assistant on an Automotive Ethernet cybersecurity project, where I helped design and build a testbench for Intrusion Detection Systems (IDS) in vehicle networks.`,
      `Beyond academics, I founded and currently serve as President of the Cybersecurity Association – UMD, leading guest webinars, organizing a VAPT series covering networking, Linux security, web security, Windows security, and hardware hacking, and conducting Capture The Flag (CTF) competitions to foster practical learning.`,
      `I hold CompTIA Security+, eJPT, and SC-900 certifications, and bring hands-on experience with tools such as Burp Suite, Nessus, Nmap, Kali Linux, and Sophos MDR. My expertise spans SIEM implementation, IAM frameworks, CIS Controls alignment, vulnerability assessment, and detection engineering.`,
      `I am committed to building practical, measurable, and forward-thinking security solutions that not only defend systems — but continuously improve them.`,
    ],
    []
  );

  return (
    <section id="about" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        {/* Left card */}
        <motion.div
          className="glass glow-hover rounded-xl p-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-5 items-center">
            <img
              src="/PNG image.jpeg"
              alt="Maghnaa Sathish Kumar"
              className="w-24 h-24 rounded-xl object-cover border border-blue-500/20"
            />
            <div className="min-w-0">
              <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Maghnaa Sathish Kumar
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Event Response Analyst • SOC • VAPT • Security Engineering
              </div>

              <div className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-200">
                “Security-first mindset — measurable, practical outcomes.”
              </div>
            </div>
          </div>

          {/* Animated highlight chips */}
          <div className="mt-6">
            <div className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
              Journey Highlights
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {highlights.slice(0, 5).map((h, i) => (
                <motion.div
                  key={h.year}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="text-[11px] px-3 py-1 rounded-full border border-blue-500/15
                             bg-white/40 dark:bg-black/30 text-slate-700 dark:text-slate-200"
                >
                  <span className="text-slate-500 dark:text-slate-400">{h.year}</span>
                  <span className="mx-2 text-slate-400 dark:text-slate-500">•</span>
                  <span>{h.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Micro timeline */}
            <div className="mt-5 rounded-lg border border-blue-500/15 bg-black/5 dark:bg-black/30 p-4">
              <div className="text-xs text-slate-600 dark:text-slate-300">Current focus</div>
              <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Detection Engineering • SOC Optimization • Agentic AI Security Automation
              </div>

              <div className="mt-3 grid gap-2">
                {highlights.slice(5).map((h, i) => (
                  <motion.div
                    key={h.year}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <FaChevronRight className="mt-[3px] text-blue-600/70 dark:text-blue-300/70" />
                    <span className="min-w-[92px] text-slate-500 dark:text-slate-400">
                      {h.year}
                    </span>
                    <span>{h.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right card: Preview + Read Full Story */}
        <motion.div
          className="glass glow-hover rounded-xl p-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {/* Preview */}
          {/* Personal Philosophy Highlight */}
<motion.div
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mb-6 rounded-xl border border-blue-500/20 
             bg-blue-500/5 dark:bg-blue-500/10 
             p-6 relative overflow-hidden"
>
  <div className="absolute top-0 left-0 h-full w-1 bg-blue-500/40" />

  <div className="text-lg md:text-xl font-medium text-slate-900 dark:text-blue-100 leading-relaxed">
    “One life is all we have — and I am determined to explore its endless
    possibilities by embracing every opportunity.”
  </div>

  <div className="mt-3 text-xs tracking-wide text-blue-700 dark:text-blue-300 uppercase">
    — My Personal Philosophy
  </div>
</motion.div>

{/* Preview Text */}
<div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
  <p>{preview[1]}</p>
  <p>{preview[2]}</p>
</div>

          {/* Read Full Story toggle card */}
          <div className="mt-6 rounded-xl border border-blue-500/15 bg-white/35 dark:bg-black/35 overflow-hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <FaBookOpen className="text-blue-700 dark:text-blue-200" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {open ? "Hide Full Story" : "Read Full Story"}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Expanded journey, leadership, research, and certifications
                  </div>
                </div>
              </div>

              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-600 dark:text-slate-300"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="px-5 pb-5"
                >
                  <div className="h-px w-full bg-blue-500/10 mb-4" />

                  <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {fullStory.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-medium text-slate-900 dark:text-slate-100">
                    I’m building practical, measurable security solutions that continuously improve.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/maghnaa-s"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              <FaLinkedin />
              Get in Touch
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-400/60 dark:border-blue-500/40
                         hover:bg-slate-900/5 dark:hover:bg-blue-500/10 transition font-semibold
                         text-slate-900 dark:text-slate-100"
            >
              Contact Section
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;