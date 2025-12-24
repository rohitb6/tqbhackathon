"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Cpu,
  PartyPopper,
  Users,
  X,
} from "lucide-react";

/* =======================
   Event Card
======================= */
const EventCard = ({
  title,
  date,
  time,
  participation,
  description,
  icon,
  features,
  buttonColor,
  borderColor,
  badgeColor,
  rulesContent,
  registrationLink, // New prop for registration href
}) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div
      className={`rounded-3xl p-8 border ${borderColor} bg-white/80 backdrop-blur-md
                  shadow-md hover:shadow-xl transition-all relative`}
    >
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full 
                    text-xs font-semibold mb-6 ${badgeColor}`}
      >
        Upcoming Event
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-100">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* Date & Time */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {time}
        </div>
      </div>

      {/* Participation */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
                         text-xs font-semibold bg-slate-200 text-slate-700">
          <Users className="w-3 h-3" />
          {participation}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-6">{description}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-6">
        {features.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {registrationLink && (
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-xl text-white font-semibold 
                        flex items-center gap-2 ${buttonColor} 
                        hover:scale-110 transition text-center`}
          >
            Register Now <ArrowRight className="w-4 h-4" />
          </a>
        )}

        {rulesContent && (
          <button
            onClick={() => setShowRules(true)}
            className="px-6 py-3 rounded-xl text-white font-semibold bg-gray-500 hover:bg-gray-600 transition"
          >
            Rules & Regulations
          </button>
        )}
      </div>

      {/* Rules Modal */}
      {showRules && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white/80 backdrop-blur-lg w-full h-full p-8 relative overflow-y-auto">
            <button
              onClick={() => setShowRules(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">{title} – Rules & Regulations</h2>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {rulesContent}
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  );
};

/* =======================
   Dashboard
======================= */
const Dashboard = () => {
  const rulesText = `AIoT Hackathon – Rules & Regulations
Organized by: Thinqbator
Eligibility:
• Individuals or teams (max 3 members, minimum 2). 
• Open to students and innovators. 
• One participant can be part of only one team.
Registration:
• Mandatory registration before deadline.
• Valid ID required during event.
Theme:
• Solutions based on Artificial Intelligence + Internet of Things (AIoT).
• Open Innovation is allowed 
Tools & Resources:
• Any programming language, AI/ML framework, cloud or IoT platform allowed.
• Open-source tools permitted with proper credits.
Submission:
• Code repository link, demo video, presentation, and documentation required.
• Late submissions will not be accepted.
Evaluation Criteria:
• Innovation & Originality – 25%
• Technical Implementation – 30%
• Practical Impact – 20%
• UI/UX & Presentation – 25%
Code of Conduct:
• No plagiarism or unethical data usage.
• Maintain professionalism and respect throughout the event.
Intellectual Property:
• Teams retain full ownership of their projects.
• Thinqbator may showcase projects for promotional purposes.
General:
• Judges’ decisions are final.
• Organizers reserve the right to modify rules if necessary.`;

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-teal-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium 
                           bg-orange-100 text-orange-600 mb-4">
            🎉 Exciting Events Coming Up!
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="text-teal-500">Events</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Join us for these incredible opportunities to learn, build, and connect.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <EventCard
            title="IoT Hackathon"
            date="9th January 2026"
            time="Approx 8 Hours Event"
            participation="Open to All"
            description="Dive into the world of Internet of Things! Build innovative IoT solutions, compete with brilliant minds, and win amazing prizes."
            icon={<Cpu className="w-6 h-6 text-teal-500" />}
            features={["IoT Projects", "Cash Prizes", "Mentorship", "Networking"]}
            buttonColor="bg-teal-500 hover:bg-teal-600"
            borderColor="border-teal-200"
            badgeColor="bg-teal-100 text-teal-600"
            rulesContent={rulesText} // pass rules
            registrationLink="https://forms.gle/ER5wZTF22AJEmxqX6" // AIoT Hackathon link
          />

          <EventCard
            title="Innovation Mela"
            date="10th January 2026"
            time="Full Day Event"
            participation="Only for Trident Students"
            description="Experience innovation at its finest! Showcase your projects, explore groundbreaking ideas, and connect with industry leaders."
            icon={<PartyPopper className="w-6 h-6 text-orange-500" />}
            features={["Project Showcase", "Industry Connect", "Workshops", "Prizes"]}
            buttonColor="bg-orange-500 hover:bg-orange-600"
            borderColor="border-orange-200"
            badgeColor="bg-orange-100 text-orange-600"
            registrationLink="https://forms.gle/PQZ1r1GS2EBQrFi7A" // Innovation Mela link
          />
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-16">
          Don&apos;t miss out! Limited seats available.{" "}
          <span className="text-teal-600 font-semibold">Register today!</span>
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
