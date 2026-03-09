import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Behavior-Based Malware Detection & Evasion",
    description:
      "Developed machine learning models to classify benign and malicious Windows executables using behavior-based execution traces. Evaluated multiple models including Random Forest, SVM, Logistic Regression, MLP, and XGBoost to analyze malware detection performance.",
    tags: ["Python", "Machine Learning", "Malware Analysis", "XGBoost", "Random Forest"],
    github: "https://github.com/Maghnaa121009/Win_Malware_Detect_and_Evade",
  },

  {
    title: "SecureShare – Secure File Sharing Platform",
    description:
      "Built a secure file-sharing application with role-based access control, encrypted file storage, JWT authentication, and audit logging to ensure confidentiality and accountability across file operations.",
    tags: ["FastAPI", "React", "MongoDB", "RBAC", "Cryptography"],
    github: "https://github.com/Maghnaa121009/SecureShare",
  },

  {
    title: "SOC Home Lab – Elastic SIEM",
    description:
      "Built a blue-team SOC home lab using Elastic Security, Elastic Agent, Kali Linux, and Kibana to collect logs, create dashboards, investigate alerts, and simulate real-world SOC detection workflows.",
    tags: ["Elastic SIEM", "Kibana", "Elastic Agent", "Kali Linux", "Blue Team"],
    blog: "https://medium.com/@maghnaasathish/soc-home-lab-493346ba6c0d",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Selected projects demonstrating hands-on work in malware analysis,
        secure system design, and SOC detection engineering.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="
              rounded-xl p-6 flex flex-col transition duration-300
              bg-white border border-slate-300 shadow-sm
              dark:bg-slate-950 dark:border-blue-900/60 dark:shadow-none
              hover:-translate-y-1 hover:shadow-md dark:hover:shadow-blue-950/30
            "
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {p.title}
            </div>

            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {p.description}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30
                             text-blue-700 dark:text-blue-300 hover:bg-blue-500/10 transition text-sm font-semibold"
                >
                  <FaGithub /> Code
                </a>
              )}

              {p.blog && (
                <a
                  href={p.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold"
                >
                  <FaExternalLinkAlt /> Blog
                </a>
              )}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;