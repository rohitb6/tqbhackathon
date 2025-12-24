"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function TechnicalOverview() {

  // ===== Smooth scrolling with Lenis =====
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // ===== Technical framework for thingQbator =====
  const techDetails = [
    {
      title: "Startup Incubation Framework",
      desc: "A structured, milestone-driven incubation model guiding founders from idea validation to MVP development and early traction.",
    },
    {
      title: "Technology & Product Enablement",
      desc: "Hands-on support across full-stack development, cloud infrastructure, UI/UX, and scalable architecture selection.",
    },
    {
      title: "Data-Driven Growth & Mentorship",
      desc: "Performance tracking, founder diagnostics, and mentor feedback loops to support informed decision-making and sustainable growth.",
    },
  ];

  return (
    <>
      {/* Global Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* ===== Technical Overview Section ===== */}
      <section
        className="relative py-24 px-6 md:px-12
                   bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')]
                   bg-cover bg-center bg-no-repeat overflow-hidden text-black"
      >
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-3">
            thing<span className="text-yellow-500">Q</span>bator Framework
          </h1>
          <p className="text-slate-700 text-sm">
            The systems, processes, and technology that power our startup incubation ecosystem.
          </p>
        </motion.div>

        {/* ===== Content Cards ===== */}
        <motion.div
          className="flex flex-col gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {techDetails.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white/80 backdrop-blur-sm
                         shadow-xl rounded-2xl border border-blue-100
                         hover:shadow-blue-200 transition cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Ambient Glow ===== */}
        <motion.div
          className="absolute top-1/2 left-1/2
                     w-[500px] h-[500px]
                     bg-blue-200/40 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </>
  );
}
