import React from "react";
import { motion } from "framer-motion";
import LiveThreatFeed from "./LiveThreatFeed";

const Home = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200">
            Available for Full-Time • SOC / Security Engineer / Pentester
          </div>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Maghnaa Sathish Kumar
          </h1>

          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
            Event Response Analyst
          </p>

          <p className="mt-5 leading-relaxed text-slate-700 dark:text-slate-300">
            I specialize in Security Operations Center (SOC) operations, threat
            detection engineering, incident response, vulnerability assessment,
            and agentic AI–driven security automation. I design and implement
            practical, measurable, and resilient security solutions that enhance
            organizational defense capabilities while improving the efficiency
            and effectiveness of SOC operations.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={`${process.env.PUBLIC_URL}/Maghnaa_SK.pdf`}
              download
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition font-semibold shadow-sm"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-300 text-slate-800 hover:bg-blue-50 transition font-semibold dark:border-blue-500/40 dark:text-white dark:hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 w-full lg:max-w-[720px]"
        >
          <div className="rounded-xl p-6 flex items-center gap-5 border border-slate-200 bg-white shadow-sm dark:bg-slate-900/60 dark:border-blue-500/20">
            <img
              src={`${process.env.PUBLIC_URL}/PNG image.jpeg`}
              alt="Maghnaa"
              className="w-20 h-20 rounded-full object-cover border border-blue-200 dark:border-blue-500/30"
            />
            <div>
              <div className="font-semibold text-blue-700 dark:text-blue-300">
                SOC mindset:
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                Detect • Investigate • Contain • Automate • Improve
              </div>
            </div>
          </div>

          <LiveThreatFeed />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;