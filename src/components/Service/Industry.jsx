import React from "react";
import { Briefcase, Home, Tractor, Film, Shield, Wrench } from "lucide-react";

const industries = [
  {
    icon: <Home className="w-8 h-8 text-blue-400" />,
    title: "Real Estate",
    description: "Showcase properties with stunning aerial views and virtual tours to attract more buyers.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
    title: "Construction",
    description: "Monitor site progress, create 3D models, and improve safety with regular drone mapping.",
  },
  {
    icon: <Tractor className="w-8 h-8 text-blue-400" />,
    title: "Agriculture",
    description: "Boost productivity using crop health analysis, irrigation planning, and drone spraying.",
  },
  {
    icon: <Film className="w-8 h-8 text-blue-400" />,
    title: "Film & Media",
    description: "Capture dynamic and cinematic aerial footage for movies, commercials, and live events.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: "Security & Surveillance",
    description: "Real-time aerial surveillance for perimeter monitoring, crowd control, and risk detection.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    title: "Industrial Inspection",
    description: "Inspect hard-to-reach assets like pipelines, towers, and wind turbines with precision.",
  },
];

export default function Industry() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Industries We Serve
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:shadow-xl transition"
          >
            <div className="mb-4">{industry.icon}</div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {industry.title}
            </h3>
            <p className="text-sm text-gray-300">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
