"use client";
import React from "react";
import { motion } from "framer-motion";
import pic14 from "../assets/pic14.JPG"; // Use your local image

export default function Mission() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Page Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-center mx-auto mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Mission
      </motion.h1>
      <motion.p
        className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We aim to empower students and innovators through AIoT, creating meaningful solutions and pushing the boundaries of technology.
      </motion.p>

      {/* Mission Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        {/* Background Glow */}
        <div className="absolute w-[520px] h-[520px] rounded-full blur-[300px] -z-10 bg-[#FBFFE1] top-0 md:top-1/4 left-1/2 transform -translate-x-1/2"></div>

        {/* Image */}
        <motion.img
          className="max-w-sm w-full rounded-xl h-auto"
          src={pic14}
          alt="AIoT Hackathon"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Mission Details */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold">Empowering Innovation Through AIoT</h2>
          <p className="text-sm text-slate-500 mt-2">
            During the AIoT Hackathon, our mission is to connect brilliant minds, foster collaboration, and turn ideas into impactful technology solutions for real-world problems.
          </p>

          {/* Key Points */}
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <h3 className="text-base font-medium text-slate-600">Innovative Solutions</h3>
              <p className="text-sm text-slate-500">Encourage participants to create AIoT projects that solve real-world challenges.</p>
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-600">Collaboration & Learning</h3>
              <p className="text-sm text-slate-500">Connect students, mentors, and experts to share knowledge and ideas during the hackathon.</p>
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-600">Future-Ready Skills</h3>
              <p className="text-sm text-slate-500">Promote practical experience in AI, IoT, and full-stack development to prepare students for emerging tech roles.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
