// File: src/components/Services.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Trophy } from "lucide-react";

export default function Services() {

  const services = [
    {
      title: "AIoT Idea Innovation",
      description:
        "Participants submit innovative ideas combining Artificial Intelligence and Internet of Things to solve real-world problems.",
      icon: Cpu,
    },
    {
      title: "Prototype Development & Mentorship",
      description:
        "Top teams build functional AIoT prototypes with guidance on sensors, data, AI models, and system integration.",
      icon: Zap,
    },
    {
      title: "Final Demo, Pitch & Recognition",
      description:
        "Teams showcase their solutions before experts, compete for awards, and gain visibility with industry leaders.",
      icon: Trophy,
    },
  ];

  return (
    <>
      {/* Global font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section
        className="relative py-20 px-4 overflow-hidden
                   bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')]
                   bg-no-repeat bg-cover bg-center text-black"
      >
        <div className="max-w-4xl mx-auto flex justify-center">

          <motion.div
            className="w-full flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-4xl md:text-5xl font-bold">
              AIoT Hackathon Vision
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What the <span className="text-yellow-500">AIoT</span> Hackathon Delivers
            </h1>

            <p className="text-sm text-slate-700 mb-6 max-w-2xl">
              The AIoT Hackathon empowers innovators to merge Artificial Intelligence
              with Internet of Things, building smart, scalable, and impactful
              solutions for real-world challenges.
            </p>

            {/* Service Cards */}
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl
                             bg-white bg-opacity-90 shadow-lg border border-blue-100
                             transition cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    backgroundColor: "#EFF6FF",
                  }}
                >
                  <service.icon className="w-6 h-6 mt-1 text-black" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
