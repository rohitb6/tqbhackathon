// File: src/components/AboutUs.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.png";

export default function AboutUs() {
  return (
    <>
      {/* POPPINS FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="w-full min-h-screen px-6 md:px-20 lg:px-28 py-24 relative overflow-hidden bg-white text-black">
        {/* BACKGROUND GRID */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center" />

        {/* LIGHT GLOW EFFECTS */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300/30 blur-[120px] rounded-full" />

        {/* HEADER + IMAGE */}
        <motion.div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-left drop-shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About ThingQbator
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-slate-600 mt-3 max-w-xl text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              ThingQbator is the innovation and incubation center at
              <strong> Trident Academy of Technology</strong>, dedicated to
              nurturing student startups, technical innovation, and
              entrepreneurial thinking through hands-on learning and real-world
              problem solving.
            </motion.p>
          </div>

          <div className="md:w-1/2">
            <motion.img
              src={image}
              alt="ThingQbator - Trident Academy of Technology"
              className="
    w-full 
    max-w-md 
    h-[300px] 
    md:h-[400px] 
    object-contain 
    bg-white 
    p-6 
    rounded-2xl 
    shadow-2xl 
    mx-auto
  "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </div>
        </motion.div>

        {/* EXPERIENCE + CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24 mb-20">
          {/* EXPERIENCE */}
          <motion.div
            className="p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Our Mission & Expertise
            </h3>

            <p className="text-black/80 text-sm leading-relaxed">
              ThingQbator empowers students of Trident Academy of Technology to
              innovate, prototype, and transform ideas into impactful solutions.
              We focus on emerging technologies, startup mentorship, and
              industry-aligned skill development.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-black/80">
              <li>• Startup Incubation & Mentorship</li>
              <li>• IoT, AI & Emerging Technology Labs</li>
              <li>• Industry & Hackathon Exposure</li>
              <li>• Prototype-to-Product Development</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-black">
              Connect With Us
            </h3>

            <p className="text-black/80 leading-relaxed text-base mb-4">
              Interested in innovation, startups, or collaborative projects? Get
              in touch with ThingQbator at Trident Academy of Technology.
            </p>

            <ul className="text-black/80 space-y-2 text-sm mb-6">
              <li>
                <strong>Institute:</strong> Trident Academy of Technology
              </li>
              <li>
                <strong>Email:</strong> thingqbator@trident.ac.in
              </li>
              <li>
                <strong>Location:</strong> Bhubaneswar, Odisha
              </li>
            </ul>

            {/* NORMAL BUTTON */}
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* VALUES */}
        <motion.h2
          className="text-3xl font-semibold mt-10 text-left text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <p className="text-sm text-black/70 mt-1 mb-10 text-left">
          Values that drive innovation and entrepreneurship at ThingQbator.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Innovation",
              text: "Encouraging creativity and cutting-edge problem solving.",
            },
            {
              title: "Learning by Doing",
              text: "Hands-on projects and real-world exposure.",
            },
            {
              title: "Entrepreneurship",
              text: "Building startup mindset and leadership skills.",
            },
            {
              title: "Collaboration",
              text: "Connecting students, mentors, and industry experts.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-md bg-white/30 backdrop-blur-md border border-white/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="font-semibold text-xl mb-2 text-black">
                {card.title}
              </h3>
              <p className="text-sm text-black/80">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
