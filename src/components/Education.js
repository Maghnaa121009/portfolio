import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Science in Cybersecurity and Information Assurance",
    university: "University of Michigan–Dearborn",
    year: "2024 – 2026",
    concentration: "Data and Application Security",
    courses: [
      "Data Security and Privacy",
      "Computer Networks",
      "Enterprise Information Systems",
      "Database Systems",
      "Software Security",
      "Security and Privacy in Wireless Networks",
      "Security and Privacy in Cloud Computing",
      "Foundations of Information Security",
      "Software Architecture and Design Patterns",
      "Information Science and Ethics",
    ],
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    university: "Jeppiaar Engineering College – Anna University",
    year: "2019 – 2023",
    details: [
      {
        title: "Academic Foundation",
        text: "Built a strong foundation in algorithms, databases, networking, and core computer science concepts.",
      },
      {
        title: "Skill Development",
        text: "Developed analytical thinking and problem-solving skills through technical coursework and practical labs.",
      },
      {
        title: "Extracurricular Engagement",
        text: "Hosted National-Level Symposium “REVOITS” as President and participated in workshops and hackathons.",
      },
      {
        title: "Early Interest in Cybersecurity",
        text: "Explored ethical hacking and cybersecurity topics early, which shaped my career direction toward security.",
      },
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="mt-10 grid gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="glass glow-hover rounded-xl p-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </div>
                <div className="mt-1 text-slate-600 dark:text-slate-300">
                  {edu.university}
                </div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {edu.year}
              </div>
            </div>

            {edu.concentration && (
              <div className="mt-4 text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Concentration:
                </span>{" "}
                {edu.concentration}
              </div>
            )}

            {edu.courses && (
              <div className="mt-6">
                <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Courses
                </div>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  {edu.courses.map((c) => (
                    <div
                      key={c}
                      className="rounded-lg border border-blue-500/15 bg-black/5 dark:bg-black/30 p-3 text-sm text-slate-700 dark:text-slate-300"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {edu.details && (
              <div className="mt-6 space-y-4">
                <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Highlights
                </div>
                {edu.details.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-lg border border-blue-500/15 bg-black/5 dark:bg-black/30 p-4"
                  >
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {d.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      {d.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;