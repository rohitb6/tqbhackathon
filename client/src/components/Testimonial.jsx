// File: src/components/Testimonials.jsx
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function Testimonials() {

  // ===== Smooth scrolling =====
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ===== thingQbator Key Impact Metrics =====
  const stats = [
    { value: "40+", label: "Startups Incubated" },
    { value: "120+", label: "Founders Supported" },
    { value: "60+", label: "Mentors & Experts" },
    { value: "10+", label: "Cohorts & Programs" },
  ];

  // ===== Impact Areas (replacing SDG images) =====
  const impactAreas = [
    { number: "01", title: "Entrepreneurship Enablement" },
    { number: "02", title: "Innovation & Deep-Tech Adoption" },
    { number: "03", title: "Employment & Skill Development" },
    { number: "04", title: "Inclusive Startup Ecosystems" },
    { number: "05", title: "Sustainable Business Models" },
    { number: "06", title: "Economic Growth & Value Creation" },
  ];

  return (
    <section
      className="relative py-24 px-4
                 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')]
                 bg-no-repeat bg-cover bg-center text-black overflow-hidden"
    >
      {/* ===== Impact Overview ===== */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          thing<span className="text-yellow-500">Q</span>bator Impact
        </h2>

        <p className="text-slate-800 max-w-2xl mx-auto mb-14">
          thingQbator is committed to nurturing innovation-led startups by
          providing structured incubation, mentorship, and ecosystem access
          that transforms ideas into scalable ventures.
        </p>

        {/* ===== Stats Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl
                         bg-white/80 backdrop-blur-sm
                         border border-blue-100 shadow-lg
                         hover:shadow-2xl hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl font-bold text-black">{stat.value}</p>
              <p className="text-sm text-slate-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Impact Areas Section ===== */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Areas of Impact
        </h2>

        <p className="text-slate-700 mt-3 max-w-2xl mx-auto">
          Our incubation model aligns with long-term economic, technological,
          and social impact by empowering founders and fostering sustainable
          innovation ecosystems.
        </p>

        {/* ===== Impact Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl
                         bg-white/80 backdrop-blur-sm
                         border border-blue-100 shadow-lg
                         hover:shadow-xl hover:-translate-y-1 transition-all
                         text-center cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <span className="text-3xl font-bold text-yellow-500 block mb-3">
                {area.number}
              </span>
              <h3 className="text-base font-semibold text-slate-800">
                {area.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Ambient Glow ===== */}
      <motion.div
        className="absolute top-1/2 left-1/2
                   w-[520px] h-[520px]
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
  );
}
