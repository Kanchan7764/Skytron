import React from "react";
import { MapPin, ShieldCheck, BadgeCheck, Users } from "lucide-react";

const pilots = [
  {
    name: "Arjun Mehta",
    location: "Mumbai, India",
    certifications: ["DGCA Certified", "Night Operations", "Thermal Imaging"],
    experience: "5+ Years",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Sara Thomas",
    location: "Bengaluru, India",
    certifications: ["DGCA Certified", "Mapping & Surveying"],
    experience: "3+ Years",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "ranju Kumari",
    location: "Delhi, India",
    certifications: ["DGCA Certified", "Infrastructure Inspection", "Cinematography"],
    experience: "7+ Years",
    image: "https://i.pravatar.cc/150?img=27",
  },
];

export default function Pilot() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8 font-sans w-full overflow-hidden py-16">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center mb-16">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Meet Our Pilot Network
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Certified, experienced, and passionate professionals powering every mission.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {pilots.map((pilot, idx) => (
          <div
            key={idx}
            className="group bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center p-8"
          >
            <div className="relative mb-4">
              <img
                src={pilot.image}
                alt={pilot.name}
                className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                {pilot.experience}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-center text-blue-300 mb-1">
              {pilot.name}
            </h3>
            <div className="text-center text-sm text-blue-100 mb-3 flex items-center justify-center gap-1">
              <MapPin className="w-4 h-4" />
              {pilot.location}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {pilot.certifications.map((cert, certIdx) => (
                <span
                  key={certIdx}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                >
                  <ShieldCheck className="w-4 h-4 text-white" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



