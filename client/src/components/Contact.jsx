"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  // ✅ Initialize Lenis smooth scroll
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
      `}</style>

      {/* ⬇️ Added id="contact" here */}
      <section
        id="contact"
        className="relative py-20 px-6 md:px-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-cover bg-center bg-no-repeat overflow-hidden text-black"
      >
        {/* Title Section */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-3">Get in Touch</h1>
          <p className="text-slate-700 text-sm">
            Have questions or want to collaborate? We’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <Mail className="mx-auto w-10 h-10 text-black mb-3" />
            <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
            <p className="text-sm text-slate-600 mt-1">contact@agrivault.in</p>
          </div>

          {/* Phone */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <Phone className="mx-auto w-10 h-10 text-black mb-3" />
            <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="text-sm text-slate-600 mt-1">+91 98765 43210</p>
          </div>

          {/* Location */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <MapPin className="mx-auto w-10 h-10 text-black mb-3" />
            <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
            <p className="text-sm text-slate-600 mt-1">
              Bhubaneswar, Odisha, India
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 border border-gray-200 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#000",
                color: "#fff",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-8 py-3 bg-black text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Background Glow Animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gray-300/30 rounded-full blur-3xl -z-10"
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
