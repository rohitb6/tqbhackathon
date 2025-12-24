"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function OurBrand() {
  const companyLogos = [
    "C1.png",
    "C2.png",
    "C3.png",
    "C4.jpeg",
    "C5.png",
    "C6.png",
    "C7.png",
    "C8.png",
    "C9.png",
    "C10.png",
  ];

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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }

        .marquee-inner {
          animation: marqueeScroll 18s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-60%);
          }
        }
      `}</style>

      <section className="relative py-20 px-6 md:px-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center bg-no-repeat overflow-hidden text-black">
        
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-3">Our Partners & Collaborations</h1>
          <p className="text-slate-700 text-sm">
            Trusted by industry leaders, innovators, and global organizations who believe in the future of smart agriculture and IoT.
          </p>
        </motion.div>

        <div className="overflow-hidden w-full relative max-w-6xl mx-auto select-none mt-10">

          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="marquee-inner flex will-change-transform min-w-[160%]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-14 py-4">
              {[...companyLogos, ...companyLogos].map((logo, index) => {
                return (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                    draggable={false}
                    whileHover={{ scale: 1.15 }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </section>
    </>
  );
}
