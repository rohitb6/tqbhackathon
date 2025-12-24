"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PenTool } from "lucide-react";

export default function ScrollLine() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  // --- THEME SETTINGS --- //
  const theme = {
    primary: "#000000",
    secondary: "#4B5563",
    text: "#1E1E2E",
    bgImage: "url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')",
    fontFamily: "'Poppins', sans-serif",
  };

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      const scrollTop = window.scrollY;

      const scrollStart = containerTop - window.innerHeight * 0.5;
      const scrollEnd = containerTop + containerHeight - window.innerHeight * 1.2;

      let scrollPercent = 0;
      if (scrollTop < scrollStart) scrollPercent = 0;
      else if (scrollTop > scrollEnd) scrollPercent = 1;
      else scrollPercent = (scrollTop - scrollStart) / (scrollEnd - scrollStart);

      scrollPercent = Math.pow(scrollPercent, 0.85);
      setScrollPercentage(scrollPercent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const penProgress = useMotionValue(0);
  useEffect(() => {
    penProgress.set(scrollPercentage);
  }, [scrollPercentage, penProgress]);

  const getPenPosition = () => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const length = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(length * scrollPercentage);
    return point;
  };

  const penPos = getPenPosition();

  // --- PATH DATA --- //
  const pathData = `
    M50 400 
    C300 800, 700 200, 950 600
    S150 1400, 850 1800
    S100 2200, 200 2600
  `;

  // --- UPDATED SMART AGRI PROBLEM JOURNEY --- //
  const journeySteps = [
    {
      title: "Idea Submission",
      text: "Teams submit their problem statement, solution idea, and tech stack.",
      x: 50,
      y: 10,
    },
    {
      title: "Selection of TOP 30 team",
      text: "Shortlisting based on innovation, feasibility, and impact.",
      x: 300,
      y: 750,
    },
    {
      title: "Prototype / Development Round",
      text: "Selected teams build a working prototype or MVP within the given time and receive mentor support.",
      x: 100,
      y: 1500,
    },
    {
      title: "Final Pitch & Evaluation",
      text: "Teams present their solution (demo + presentation) in front of judges, followed by Q&A and final winner declaration.",
      x: 700,
      y: 2500,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full relative"
      style={{
        minHeight: "3200px",
        backgroundImage: theme.bgImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: theme.fontFamily,
      }}
    >
      {/* --- HEADING --- */}
      <motion.h2
        className="text-7xl font-bold text-black text-center pt-12 pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Hackathon Stages..
      </motion.h2>

      <div className="w-full h-full pointer-events-none relative">
        <svg
          width="100%"
          height="2800"
          viewBox="0 0 1000 2800"
          className="absolute top-0 left-0"
        >
          {/* Background path */}
          <path d={pathData} stroke="#E5E7EB" strokeWidth="6" fill="none" />

          {/* Foreground animated path */}
          <path
            ref={pathRef}
            d={pathData}
            stroke={theme.primary}
            strokeWidth="6"
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - scrollPercentage * pathLength}
            strokeLinecap="round"
          />

          {/* Pen Icon */}
          <motion.g style={{ translateX: penPos.x, translateY: penPos.y }}>
            <PenTool size={40} color={theme.primary} />
          </motion.g>
        </svg>

        {/* TEXT BLOCKS */}
        {journeySteps.map((p, i) => (
          <motion.div
            key={i}
            className="absolute max-w-2xl"
            style={{ left: p.x, top: p.y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Step Number */}
            <div className="relative mb-4">
              <div
                className="text-[100px] sm:text-[120px] font-extrabold leading-none"
                style={{
                  WebkitTextStroke: `3px ${theme.secondary}`,
                  WebkitTextFillColor: "transparent",
                  filter: `drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.15))`,
                }}
              >
                {i + 1}
              </div>
            </div>

            {/* Divider */}
            <div
              className="border-t-2 border-dashed mb-4"
              style={{ borderColor: theme.secondary }}
            ></div>

            {/* Title + Text */}
            <div className="space-y-3">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: theme.text }}
              >
                {p.title}
              </div>
              <div
                className="text-lg sm:text-xl leading-relaxed font-medium"
                style={{ color: "#4B5563" }}
              >
                {p.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
