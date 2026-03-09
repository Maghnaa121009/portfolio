import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    title: "The Silent Infiltration: How an Info-Stealer Malware Stole Millions of Identities",
    desc: "An analysis of large-scale infostealer malware campaigns, how credentials are harvested, and how AI-driven defenses could help detect and mitigate such threats.",
    link: "https://medium.com/@maghnaasathish/the-silent-infiltration-how-an-info-stealer-malware-stole-millions-of-identities-and-how-ai-could-f300a89298e5",
  },
  {
    title: "The Unseen Battlefront: Jetson Orin Nano & the Future of Edge Cybersecurity",
    desc: "Exploring how edge AI devices like the Jetson Orin Nano Developer Kit can enable real-time threat detection, autonomous systems security, and next-generation cyber defense.",
    link: "https://medium.com/@maghnaasathish/the-unseen-battlefront-how-the-jetson-orin-nano-super-developer-kit-could-shape-the-future-of-56dda329708a",
  },
  {
    title: "Parallel Realms of Defense: Parallel Computing in Cybersecurity",
    desc: "How parallel computing architectures accelerate threat detection, malware analysis, and large-scale security analytics for modern cyber defense.",
    link: "https://medium.com/@maghnaasathish/parallel-realms-of-defense-unleashing-parallel-computing-in-cybersecurity-37e10e246f18",
  },
  {
    title: "Operation ForumTroll: Chrome Zero-Day Exploit in Cyber Espionage",
    desc: "A breakdown of a sophisticated cyber espionage campaign exploiting a Chrome zero-day vulnerability and the implications for browser security.",
    link: "https://medium.com/@maghnaasathish/operation-forumtroll-uncovered-chrome-zero-day-exploit-strikes-in-sophisticated-cyber-espionage-d01613bee7d9",
  },
  {
    title: "Ollama: AI-Powered Threat Intelligence for Cybersecurity",
    desc: "Examining how local LLM frameworks like Ollama can enhance threat intelligence workflows and automate cybersecurity analysis.",
    link: "https://medium.com/@maghnaasathish/ollama-revolutionizing-cybersecurity-with-ai-powered-threat-intelligence-57a3db88ab5f",
  },
  {
    title: "The Great Scareware Swindle: How Fear is Sold Online",
    desc: "An investigation into scareware campaigns that manipulate users through fear-based tactics and the techniques used to detect and prevent them.",
    link: "https://medium.com/@maghnaasathish/the-great-scareware-swindle-how-fear-is-sold-online-7602011f18c3",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h2>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Cybersecurity articles and technical insights published on Medium.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((b, i) => (
          <motion.a
            key={b.title}
            href={b.link}
            target="_blank"
            rel="noreferrer"
            className="glass glow-hover rounded-xl p-6 block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {b.title}
                </div>

                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {b.desc}
                </div>
              </div>

              <FaExternalLinkAlt className="text-blue-700 dark:text-blue-300 mt-1" />
            </div>

            <div className="mt-4 text-xs text-blue-700 dark:text-blue-300">
              Read on Medium →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;