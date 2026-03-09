import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentOrganization = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, alt) => setSelectedImage({ src, alt });
  const closeImage = () => setSelectedImage(null);

  return (
    <section id="organizations" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-slate-900 dark:text-blue-200"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Leadership & Volunteering
      </motion.h2>

      <div className="mt-10 grid gap-10">

        {/* ================= CSA SECTION ================= */}

        <motion.div
          className="glass glow-hover rounded-xl p-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-[1fr_160px] gap-6 items-start">

            {/* LEFT CONTENT */}
            <div>

              <div className="text-sm text-slate-600 dark:text-slate-300">
                UMD Cyber Security Association
              </div>

              <div className="mt-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
                CSA – UMD
              </div>

              <div className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                President & Founder — CyberSecurity Association - UMD
              </div>

              <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300 leading-relaxed">
                I lead CSA at the University of Michigan-Dearborn to bridge academic
                learning with real-world cybersecurity practice through workshops,
                CTF competitions, and hands-on technical learning events.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">

                {[
                  "Organized hands-on hardware security workshops introducing students to real cybersecurity tools and attack concepts.",
                  "Hosted Capture-The-Flag (CTF) competitions to strengthen offensive security and problem-solving skills.",
                  "Conducted cybersecurity learning sessions covering industry tools, SOC workflows, and vulnerability assessment.",
                  "Built a cybersecurity-focused student community promoting hands-on learning and collaboration.",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-lg border border-blue-500/15 bg-black/5 dark:bg-black/30 p-4 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* LOGO */}
            <div className="flex justify-end">
              <img
                src={`${process.env.PUBLIC_URL}/CSLI.jpeg`}
                alt="CSA Logo"
                className="h-24 w-auto object-contain"
              />
            </div>

          </div>

          {/* IMAGE GALLERY */}

          <div className="mt-8 grid md:grid-cols-3 gap-4">

            <button onClick={() => openImage("/DSC_4387.webp","CSA CTF Event")}>

              <img
                src={`${process.env.PUBLIC_URL}/DSC_4387.webp`}
                alt="CSA CTF Event"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

            <button onClick={() => openImage("/WhatsApp Image 2025-08-22 at 5.54.59 PM (3).jpeg","CSA Event")}>

              <img
                src={`${process.env.PUBLIC_URL}/WhatsApp Image 2025-08-22 at 5.54.59 PM (3).jpeg`}
                alt="CSA Event"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

            <button onClick={() => openImage("/WhatsApp Image 2025-10-15 at 6.52.00 PM (1).jpeg","CSA Workshop")}>

              <img
                src={`${process.env.PUBLIC_URL}/WhatsApp Image 2025-10-15 at 6.52.00 PM (1).jpeg`}
                alt="CSA Workshop"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

          </div>

        </motion.div>


        {/* ================= ISSF LAB SECTION ================= */}

        <motion.div
          className="glass glow-hover rounded-xl p-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="grid lg:grid-cols-[1fr_160px] gap-6 items-start">

            {/* LEFT CONTENT */}

            <div>

              <div className="text-sm text-slate-600 dark:text-slate-300">
                Information Systems, Security & Forensics Lab
              </div>

              <div className="mt-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
                ISSF Lab
              </div>

              <div className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Research Volunteer — ISSF Lab
              </div>

              <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Worked in the ISSF Lab under the guidance of
                <span className="font-semibold"> Prof. Hafiz Malik</span>
                focusing on research related to Automotive Ethernet cybersecurity
                testbench development and intrusion detection research.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">

                {[
                  "Contributed to Automotive Ethernet cybersecurity testbed development under faculty supervision.",
                  "Studied vehicle network traffic and attack patterns such as replay and denial-of-service attacks.",
                  "Worked with anomaly detection concepts and automotive network security research methodologies.",
                  "Won 1st Prize at the CCAT Poster Competition hosted by the Centre for Connected & Automated Transport (Mcity), earning a $2,500 cash award.",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-lg border border-blue-500/15 bg-black/5 dark:bg-black/30 p-4 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>


            {/* LOGO */}

            <div className="flex justify-end">

              <img
                src={`${process.env.PUBLIC_URL}/Screenshot 2026-03-07 at 11.42.36 PM.png`}
                alt="ISSF Lab"
                className="h-24 w-auto object-contain"
              />

            </div>

          </div>


          {/* LAB IMAGES */}

          <div className="mt-8 grid md:grid-cols-3 gap-4">

            <button onClick={() => openImage("/Screenshot 2026-03-07 at 11.27.37 PM.png","ISSF Poster")}>

              <img
                src={`${process.env.PUBLIC_URL}/Screenshot 2026-03-07 at 11.27.37 PM.png`}
                alt="ISSF Poster"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

            <button onClick={() => openImage("/Screenshot 2026-03-07 at 11.29.04 PM.png","ISSF Lab")}>

              <img
                src={`${process.env.PUBLIC_URL}/Screenshot 2026-03-07 at 11.29.04 PM.png`}
                alt="ISSF Lab"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

            <button onClick={() => openImage("/Japan professor_2.jpg","ISSF Research")}>

              <img
                src={`${process.env.PUBLIC_URL}/Japan professor_2.jpg`}
                alt="ISSF Research"
                className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
              />

            </button>

          </div>

        </motion.div>

      </div>


      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >

            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />

              <div className="mt-3 text-center text-white text-sm">
                {selectedImage.alt}
              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default StudentOrganization;