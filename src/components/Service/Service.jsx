import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Aerial Photography",
    description:
      "Professional aerial imaging for real estate, events, marketing, and cinematic production.",
    icon: "📸",
  },
  {
    title: "Surveying & Mapping",
    description:
      "Accurate land surveys, 2D/3D mapping, and terrain analysis using advanced drone sensors.",
    icon: "🗺️",
  },
  {
    title: "Agricultural Monitoring",
    description:
      "Enhance crop yields with drone-based NDVI imaging, irrigation analysis, and field health monitoring.",
    icon: "🌾",
  },
  {
    title: "Infrastructure Inspection",
    description:
      "High-resolution inspections of towers, bridges, solar farms, and industrial sites without risk.",
    icon: "🏗️",
  },
  {
    title: "Search & Rescue",
    description:
      "Rapid-response thermal and visual drone support for locating individuals in remote or hazardous zones.",
    icon: "🚁",
  },
  {
    title: "Custom Drone Solutions",
    description:
      "Tailored drone builds, software integration, and automation based on your unique operational needs.",
    icon: "⚙️",
  },
];

export default function Service() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[32vh] md:h-[40vh] flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200 overflow-hidden mb-[-3rem]">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
          alt="Service Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-blue-900/40" />
        <div className="relative  text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">Our Services</h1>
          <p className="text-lg md:text-xl font-medium">Explore our professional drone solutions</p>
        </div>
      </div>
      {/* SVG Wavy Divider */}
      <div className="mt-0">
        <svg viewBox="0 0 1440 100" className="w-full h-12 md:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0f172a" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <div className="bg-[#0f172a] text-white py-20 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-900 hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="w-16 h-16 flex items-center justify-center text-3xl rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white mb-6 shadow-lg border-4 border-blue-300 animate-pulse"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-300 mb-3 drop-shadow-lg">
                {service.title}
              </h3>
              <p className="text-base text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
