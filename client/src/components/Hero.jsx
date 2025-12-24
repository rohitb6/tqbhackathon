import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import PillNav from "./PillNav";
import {
  Cpu,
  Rocket,
  Lightbulb,
  Trophy,
  IndianRupee,
  BadgeCheck,
  Users,
} from "lucide-react";

import Group177 from "../assets/Group177.png";
import gpic from "../assets/gpic.JPG";

export default function HeroSection() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Goal", href: "/location" },
    { label: "Registration", href: "/dashboard" },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      id="top"
      className="relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')]
                 w-full bg-cover bg-center pt-24 pb-44 overflow-hidden font-[Poppins]"
    >
      {/* LOGO */}
      <div className="absolute top-4 left-4 md:left-16 z-[1001]">
        <img
          src={Group177}
          alt="ThingQbator Logo"
          className="h-10 md:h-12 object-contain"
        />
      </div>

      <PillNav items={navItems} />

      {/* HERO CONTENT */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-16 mt-24
                   px-6 md:px-16 lg:px-24 xl:px-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, Welcome to{" "}
            <span className="text-blue-900">
              thing<span className="text-yellow-500">Q</span>bator TAT's
              AIoT Hackathon & Innovation Mela
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-700 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [-4, 4] }}
            transition={{
              delay: 0.6,
              y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            <span className="text-red-700 font-bold">New:</span>{" "}
            Register now, build real-world AIoT solutions, and showcase your innovation.
          </motion.p>

          {/* ICONS */}
          <div className="flex justify-center md:justify-start gap-12 mt-10">
            {[
              { icon: Lightbulb, label: "Innovate" },
              { icon: Cpu, label: "Build" },
              { icon: Rocket, label: "Launch" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6 relative">
          {/* GLOW */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/40 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-20 w-56 h-56 bg-yellow-200/40 blur-[120px] rounded-full" />

          {/* REGISTRATION ALERT */}
          <motion.a
            href="/dashboard"
            className="absolute -top-4 -right-4 bg-red-600 text-white
                       px-4 py-2 rounded-xl text-sm font-bold shadow-lg mr-4 z-20"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            🚨 Registration Open For Hackathon / Innovation Mela
          </motion.a>

          {/* ATTRACTION CARDS */}
          <div className="grid grid-cols-2 gap-4 mb-6 z-10 mt-11">
            {[
              { icon: IndianRupee, text: "Win Cash Prizes" },
              { icon: Trophy, text: "Exciting Rewards" },
              { icon: BadgeCheck, text: "Certificates for All" },
              { icon: Users, text: "Expert Mentorship" },
            ].map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl
                           shadow-lg flex items-center gap-3 text-sm font-semibold"
                whileHover={{ scale: 1.08 }}
              >
                <Icon className="w-5 h-5 text-red-600" />
                {text}
              </motion.div>
            ))}
          </div>

          {/* IMAGE – NO BORDER + LARGE + HOVER EFFECT */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
          >
            <img
              src={gpic}
              alt="ThingQbator TAT"
              className="
                w-[340px] md:w-[380px] lg:w-[420px]
                object-contain
                transition-all duration-500 ease-out
                hover:drop-shadow-[0_25px_60px_rgba(59,130,246,0.35)]
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
