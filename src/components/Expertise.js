import React from "react";
import { motion } from "framer-motion";

const expertiseData = [
  {
    title: "SOC Operations",
    description:
      "Hands-on experience in SOC triage, investigation, and escalation using SIEM/SOAR platforms such as Splunk, Microsoft Sentinel, and Elastic. Experienced in analyzing high volumes of alerts, improving detection rules, and reducing alert fatigue through signal-to-noise optimization.",
    image: "https://img.icons8.com/ios/100/security-checked.png",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description:
      "Experience performing security testing across web, mobile (Android/iOS), and infrastructure environments. Skilled in identifying vulnerabilities, validating real-world impact, and delivering clear remediation guidance using tools such as Burp Suite, Nmap, and Metasploit.",
    image: "https://img.icons8.com/ios/100/security-checked.png",
  },
  {
    title: "Threat Detection & Incident Response",
    description:
      "Detect, investigate, and respond to security incidents through log analysis, event correlation, and threat intelligence enrichment. Experienced in Tier-2/Tier-3 investigations across endpoint, network, and cloud telemetry using SIEM workflows.",
    image: "https://img.icons8.com/ios/100/radar.png",
  },
  {
    title: "Security Engineering",
    description:
      "Apply security-by-design principles to build scalable security workflows, including RBAC implementation, detection engineering, and SOAR automation to improve incident response efficiency and operational resilience.",
    image: "https://img.icons8.com/ios/100/engineering.png",
  },
  {
    title: "Cloud Security",
    description:
      "Working knowledge of Azure security fundamentals, including Microsoft Entra ID (IAM/RBAC), Defender for Cloud monitoring, and cloud security posture practices to identify vulnerabilities and misconfigurations.",
    image: "https://img.icons8.com/ios/100/cloud.png",
  },
  {
    title: "Continuous Learning & Research",
    description:
      "Continuously strengthening practical security skills through hands-on labs, research, and experimentation on platforms such as TryHackMe and Hack The Box, while exploring emerging areas like machine-learning-based intrusion detection systems for automotive networks and practical security automation.",
    image: "https://img.icons8.com/ios/100/hacker.png",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-100"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Expertise
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {expertiseData.map((e, i) => (
          <motion.div
            key={i}
            className="
              rounded-xl p-6 transition duration-300 hover:-translate-y-1
              bg-white border border-slate-300 shadow-sm
              dark:bg-slate-950 dark:border-blue-900/60 dark:shadow-none
              hover:shadow-md dark:hover:shadow-blue-950/30
            "
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <img
                src={e.image}
                alt={e.title}
                className="w-12 h-12 shrink-0 dark:invert dark:brightness-200"
              />

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-blue-100">
                  {e.title}
                </h3>

                <p
                  className="mt-2 text-sm leading-8 text-left text-slate-700 dark:text-slate-200"
                  style={{
                    hyphens: "auto",
                    overflowWrap: "break-word",
                    wordBreak: "normal",
                  }}
                >
                  {e.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;