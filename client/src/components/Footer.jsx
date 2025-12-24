"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import looo from "../assets/looo.jpeg";

export default function Footer() {
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Goal", href: "/location" },
    { label: "Registration", href: "/dashboard" },
  ];

  return (
    <footer className="relative px-6 pt-12 md:px-16 lg:px-36 w-full text-gray-800 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      <motion.div
        className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-400 pb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Logo & Description */}
        <div className="md:max-w-96">
          <img
            alt="ThingQbator Logo"
            className="h-15"
            src={looo} // update path if needed
          />
          <p className="mt-6 text-sm text-gray-700">
            ThingQbator is committed to fostering innovation and AIoT solutions among students and enthusiasts, providing mentorship, resources, and a platform to showcase creativity.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5 text-gray-900">Navigation</h2>
            <ul className="text-sm space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a className="hover:text-black transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-gray-900">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-700">
              <p>
                Email: <span className="font-semibold text-black">thingqbatortrident@gmail.com</span>
              </p>
              <p>
                University Relations: <span className="font-semibold text-black">shubhangambiswal@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="pt-4 text-center text-sm text-gray-600 pb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Copyright © {new Date().getFullYear()} <span className="font-semibold">ThingQbator</span>. All Rights Reserved.
      </motion.p>

      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}
