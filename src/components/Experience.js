import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "CyberForce|Q",
    role: "SOC Analyst",
    duration: "Oct 2025 – Present",
    location: "Plymouth, MI (US)",
    bullets: [
      "Investigate and triage 150+ weekly alerts using Splunk, Microsoft Sentinel, Elastic, and CrowdStrike by correlating endpoint, network, and cloud telemetry.",
      "Conduct Tier-2 and Tier-3 investigations across endpoint, identity, and cloud environments to determine root cause and escalate confirmed security incidents.",
      "Monitor and analyze alerts from AWS GuardDuty, Microsoft Defender, and Azure security services to detect cloud threats and misconfigurations.",
      "Integrate and validate telemetry from Azure, Microsoft Defender, and CrowdStrike across 20+ log sources to strengthen detection coverage and threat visibility.",
      "Collaborate with enterprise clients across healthcare, education, and financial sectors to tune SIEM detection rules and reduce false positives.",
      "Audit 100+ SOC investigation cases weekly to validate analyst findings and improve investigation accuracy and SOC quality standards.",
    ],
  },

  {
    company: "University of Michigan–Dearborn",
    role: "Graduate Research Assistant (Automotive Cybersecurity)",
    duration: "Oct 2024 – Oct 2025",
    location: "Dearborn, MI (US)",
    bullets: [
      "Develop an automotive Ethernet cybersecurity testbed simulating 2+ ECUs using Docker and OMNeT++ to emulate in-vehicle communication environments.",
      "Analyze 10,000+ packets using Wireshark, Scapy, and Python to study traffic behavior across automotive network protocols.",
      "Apply graph-based anomaly detection techniques to model communication relationships between ECUs and identify abnormal network behavior for IDS development.",
      "Investigate DoS and replay attack patterns using graph analysis and statistical techniques to improve IDS detection accuracy.",
    ],
  },

  {
    company: "Cognizant",
    role: "Security Platform Engineer",
    duration: "Dec 2023 – Nov 2024",
    location: "Chennai, India",
    bullets: [
      "Integrated enterprise telemetry from 15+ systems into Microsoft Sentinel to strengthen cloud and infrastructure threat visibility.",
      "Developed SIEM detection rules and correlation logic that improved mean time to detection by 40% across enterprise environments.",
      "Implemented Azure RBAC policies and identity access controls enforcing least privilege and reducing unauthorized access incidents by 75%.",
      "Built automated SOAR investigation workflows that reduced manual security operations effort by 30%.",
      "Supported DevSecOps initiatives by integrating security monitoring into CI/CD pipelines and validating SAST and DAST results.",
    ],
  },

  {
    company: "DigiALERT",
    role: "Associate Security Analyst",
    duration: "Mar 2022 – Oct 2023",
    location: "Chennai, India",
    bullets: [
      "Monitored and analyzed security alerts across 15+ enterprise systems to identify suspicious activity and escalate high-severity incidents.",
      "Performed SIEM log analysis and automated threat intelligence collection using Python, reducing investigation time by 35%.",
      "Coordinated vendor penetration testing engagements and validated remediation of identified vulnerabilities.",
      "Assisted security teams in vulnerability assessment and risk reporting to strengthen enterprise security posture.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-100"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h2>

      <div className="mt-10 grid gap-6">
        {experienceData.map((x, i) => (
          <motion.div
            key={i}
            className="
              rounded-xl p-6 transition duration-300
              bg-white border border-slate-300 shadow-sm
              dark:bg-slate-950 dark:border-blue-900/60 dark:shadow-none
              hover:-translate-y-1 hover:shadow-md dark:hover:shadow-blue-950/30
            "
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-semibold text-slate-900 dark:text-blue-100">
                  {x.role}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {x.company} • {x.location}
                </div>
              </div>

              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {x.duration}
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
              {x.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="leading-7 marker:text-slate-500 dark:marker:text-slate-400"
                >
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;