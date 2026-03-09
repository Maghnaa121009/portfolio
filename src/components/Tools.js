import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toolsData = [
  {
    category: "SOC Operations & SIEM",
    tools: [
      { name: "Splunk", image: "https://img.icons8.com/ios/100/combo-chart--v1.png" },
      { name: "Microsoft Sentinel", image: "https://img.icons8.com/ios/100/security-shield-green.png" },
      { name: "Elastic", image: "https://img.icons8.com/ios/100/speed.png" },
      { name: "CrowdStrike", image: "https://img.icons8.com/ios/100/shield.png" },
      { name: "Microsoft Defender", image: "https://img.icons8.com/ios/100/security-checked.png" },
      { name: "SOAR Playbooks", image: "https://img.icons8.com/ios/100/workflow.png" },
    ],
  },
  {
    category: "Threat Detection & Incident Response",
    tools: [
      { name: "Log Analysis", image: "https://img.icons8.com/ios/100/search--v1.png" },
      { name: "Event Correlation", image: "https://img.icons8.com/ios/100/flow-chart.png" },
      { name: "Threat Enrichment", image: "https://img.icons8.com/ios/100/radar.png" },
      { name: "Case Management", image: "https://img.icons8.com/ios/100/task.png" },
      { name: "Alert Triage", image: "https://img.icons8.com/ios/100/alarm.png" },
      { name: "Investigation Workflow", image: "https://img.icons8.com/ios/100/todo-list.png" },
    ],
  },
  {
    category: "VAPT & Application Security",
    tools: [
      { name: "Burp Suite", image: "https://img.icons8.com/ios/100/bug.png" },
      { name: "Nmap", image: "https://img.icons8.com/ios/100/network.png" },
      { name: "Metasploit", image: "https://img.icons8.com/ios/100/console.png" },
      { name: "Nessus", image: "https://img.icons8.com/ios/100/inspection.png" },
      { name: "SAST / DAST", image: "https://img.icons8.com/ios/100/source-code.png" },
      { name: "Dependency Scanning", image: "https://img.icons8.com/ios/100/checked.png" },
    ],
  },
  {
    category: "Cloud Security & Identity",
    tools: [
      { name: "Azure", image: "https://img.icons8.com/ios/100/cloud.png" },
      { name: "Microsoft Entra ID", image: "https://img.icons8.com/ios/100/key-security.png" },
      { name: "RBAC / IAM", image: "https://img.icons8.com/ios/100/user-shield.png" },
      { name: "Defender for Cloud", image: "https://img.icons8.com/ios/100/shield.png" },
      { name: "Cloud Monitoring", image: "https://img.icons8.com/ios/100/cloud-checked.png" },
      { name: "Security Posture", image: "https://img.icons8.com/ios/100/privacy.png" },
    ],
  },
  {
    category: "Research, Network Analysis & Testbeds",
    tools: [
      { name: "Wireshark", image: "https://img.icons8.com/ios/100/wifi.png" },
      { name: "Scapy", image: "https://img.icons8.com/ios/100/console.png" },
      { name: "Docker", image: "https://img.icons8.com/ios/100/docker.png" },
      { name: "OMNeT++", image: "https://img.icons8.com/ios/100/share.png" },
      { name: "TensorFlow", image: "https://img.icons8.com/ios/100/artificial-intelligence.png" },
      { name: "Automotive IDS", image: "https://img.icons8.com/ios/100/car--v1.png" },
    ],
  },
  {
    category: "Agentic AI SOC Automation Stack",
    tools: [
      { name: "OpenSearch", image: "https://img.icons8.com/ios/100/search-database.png" },
      { name: "n8n", image: "https://img.icons8.com/ios/100/workflow.png" },
      { name: "MISP", image: "https://img.icons8.com/ios/100/globe--v1.png" },
      { name: "TheHive", image: "https://img.icons8.com/ios/100/honey.png" },
      { name: "Cortex", image: "https://img.icons8.com/ios/100/brain.png" },
      { name: "LangChain", image: "https://img.icons8.com/ios/100/artificial-intelligence.png" },
    ],
  },
];

const Tools = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="tools" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-100"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools & Platforms
      </motion.h2>

      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
        Tools and platforms I use across SOC operations, detection engineering,
        cloud security, VAPT, research-driven security analysis, and agentic AI
        SOC automation.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {toolsData.map((cat, idx) => (
          <motion.div
            key={cat.category}
            className="
              rounded-xl p-6 transition duration-300
              bg-white border border-slate-300 shadow-sm
              dark:bg-slate-950 dark:border-blue-900/60 dark:shadow-none
              hover:-translate-y-1 hover:shadow-md dark:hover:shadow-blue-950/30
            "
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
          >
            <button
              onClick={() => setExpanded(idx)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {cat.category}
                </h3>

                <span
                  className="
                    text-xs px-2 py-1 rounded-full
                    bg-blue-500/10 border border-blue-500/20
                    text-blue-700 dark:text-blue-200
                  "
                >
                  {cat.tools.length} tools
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {expanded === idx ? "Showing tools ↓" : "Click to expand →"}
              </div>
            </button>

            <AnimatePresence>
              {expanded === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3"
                >
                  {cat.tools.map((t) => (
                    <div
                      key={t.name}
                      className="
                        rounded-lg border p-4 text-center transition
                        border-slate-200 bg-slate-50
                        dark:border-blue-500/15 dark:bg-black/30
                        hover:scale-[1.02]
                      "
                    >
                      <div className="flex h-12 items-center justify-center">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-10 w-10 object-contain dark:invert dark:brightness-200"
                        />
                      </div>

                      <div className="mt-3 min-h-[2.5rem] text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                        {t.name}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tools;