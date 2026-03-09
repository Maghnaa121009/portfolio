import React from "react";
import { motion } from "framer-motion";

const certs = [
  {
    name: "CompTIA Security+",
    desc: "Validates core cybersecurity knowledge across network security, threats & vulnerabilities, identity & access management, risk management, and incident response.",
  },
  {
    name: "eJPT (Junior Penetration Tester)",
    desc: "Hands-on penetration testing fundamentals including recon, exploitation basics, and reporting mindset.",
  },
  {
    name: "SC-900 (Microsoft Security, Compliance, and Identity)",
    desc: "Fundamentals of security, compliance, and identity concepts across Microsoft cloud services.",
  },
  {
    name: "Varonis AI Security Fundamentals (Badge)",
    desc: "Understanding security basics and awareness around data protection and modern security practices.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            className="glass glow-hover rounded-xl p-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {c.name}
            </div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {c.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;