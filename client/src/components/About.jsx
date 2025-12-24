// File: src/components/HeroSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, BarChart2, Users } from "lucide-react"; // Feature icons

export default function About() {
  return (
    <>
      {/* Global font injection (can be moved to layout.js if needed) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* ===== About Section Wrapper ===== */}
      <section
        className="relative py-16 px-4 overflow-hidden 
                   bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] 
                   bg-no-repeat bg-cover bg-center text-black"
      >
        {/* ===== Heading & Intro Text ===== */}
        <div className="max-w-7xl mx-auto md:ml-4 lg:ml-8 xl:ml-12 text-center md:text-left">
          <motion.div
            className="inline-block mb-2 text-6xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About thing<span className="text-yellow-500">Q</span>bator
          </motion.div>

          <p className="text-sm mt-2 max-w-lg font-semibold">
            Where ideas evolve into scalable startups through innovation,
            mentorship, and real-world execution.
          </p>
        </div>

        {/* ===== Main Content Area ===== */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-10 mt-12">

          {/* ===== Visual / Image Section ===== */}
          {/* <motion.img
            src="/6.jpg"
            alt="thingQbator startup innovation"
            className="w-full md:max-w-lg h-[500px] object-cover rounded-xl shadow-xl 
                       cursor-pointer md:mr-16 lg:mr-24"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
            }}
          /> */}

          {/* ===== Text & Value Proposition Section ===== */}
          <motion.div
            className="max-w-md flex flex-col gap-6 h-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Build. Validate. Launch.
            </h2>

            <p className="text-sm text-slate-700">
              thingQbator is a technology and innovation incubator designed to
              support founders from idea to execution. We provide structured
              mentorship, technical guidance, and ecosystem access to help
              startups build scalable, impactful solutions.
            </p>

            {/* ===== Core Value Points ===== */}
            <div className="flex flex-col gap-6">

              {/* Innovation Support */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md 
                           cursor-pointer hover:shadow-xl hover:bg-blue-50 transition"
                whileHover={{ scale: 1.03 }}
              >
                <Activity className="text-blue-600 w-8 h-8" />
                <div>
                  <h3 className="text-base font-medium text-slate-800">
                    Idea-to-MVP Support
                  </h3>
                  <p className="text-sm text-slate-600">
                    Hands-on guidance to transform raw ideas into validated
                    prototypes and MVPs.
                  </p>
                </div>
              </motion.div>

              {/* Data & Growth */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md 
                           cursor-pointer hover:shadow-xl hover:bg-blue-50 transition"
                whileHover={{ scale: 1.03 }}
              >
                <BarChart2 className="text-blue-600 w-8 h-8" />
                <div>
                  <h3 className="text-base font-medium text-slate-800">
                    Market & Growth Insights
                  </h3>
                  <p className="text-sm text-slate-600">
                    Data-driven feedback to refine product-market fit and
                    accelerate growth.
                  </p>
                </div>
              </motion.div>

              {/* Community & Network */}
              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md 
                           cursor-pointer hover:shadow-xl hover:bg-blue-50 transition"
                whileHover={{ scale: 1.03 }}
              >
                <Users className="text-blue-600 w-8 h-8" />
                <div>
                  <h3 className="text-base font-medium text-slate-800">
                    Founder & Mentor Network
                  </h3>
                  <p className="text-sm text-slate-600">
                    Access to experienced mentors, investors, and a thriving
                    startup community.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
