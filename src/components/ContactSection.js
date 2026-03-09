import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="mt-10">
        <motion.div
          className="glass glow-hover rounded-xl p-10 max-w-4xl ml-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 text-right">
            I’m always open to connecting—whether for new opportunities, collaborations, or a quick chat about security.
          </p>

          <div className="mt-8 flex flex-col items-end gap-4">
            <a
              href="https://www.linkedin.com/in/maghnaa-s"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-blue-500/30
                         hover:bg-blue-500/10 transition text-slate-900 dark:text-slate-100"
            >
              <FaLinkedin className="text-blue-700 dark:text-blue-300" />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://calendly.com/smaghnaa/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-blue-500/30
                         hover:bg-blue-500/10 transition text-slate-900 dark:text-slate-100"
            >
              <FaCalendarAlt className="text-blue-700 dark:text-blue-300" />
              <span className="font-semibold">Schedule a Meeting</span>
            </a>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-black/5 dark:bg-black/30 border border-blue-500/15 text-slate-900 dark:text-slate-100">
              <FaPhone className="text-blue-700 dark:text-blue-300" />
              <span className="font-semibold">+1 (313) 502-8825</span>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-black/5 dark:bg-black/30 border border-blue-500/15 text-slate-900 dark:text-slate-100">
              <FaEnvelope className="text-blue-700 dark:text-blue-300" />
              <span className="font-semibold">smaghnaa@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
