import React from "react";
import { Wrench, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[28vh] md:h-[36vh] flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200 overflow-hidden mb-[-2rem]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Support Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-blue-900/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">Support & Services</h1>
          <p className="text-lg md:text-xl font-medium">We're here to help you fly further.</p>
        </div>
      </div>
      {/* SVG Wavy Divider */}
      <div className="-mt-2">
        <svg viewBox="0 0 1440 100" className="w-full h-10 md:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <section className="bg-[#f9fafb] min-h-screen pt-8 pb-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          {/* Removed duplicate title and subtitle for modern hero */}
          {/* Support Sections Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Training */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl border border-blue-100 hover:border-blue-400 transition-all duration-300 animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-blue-600 animate-pulse" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Training</h2>
              <p className="text-gray-600 text-sm mb-4">
                Access professional courses and workshops designed to boost your drone flying, mapping, and safety skills.
              </p>
              <Link to="/training">
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-5 py-2 rounded-md text-sm font-semibold shadow hover:from-blue-700 hover:to-green-600 transition-all">
                  Training Page
                </button>
              </Link>
            </div>
            {/* Maintenance */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl border border-green-100 hover:border-green-400 transition-all duration-300 animate-fade-in-up delay-100">
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-green-600 animate-pulse" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Maintenance</h2>
              <p className="text-gray-600 text-sm mb-4">
                From battery care to firmware updates, our support covers all technical aspects to keep your drone flying smoothly.
              </p>
              <Link to="/maintence">
                <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-5 py-2 rounded-md text-sm font-semibold shadow hover:from-green-700 hover:to-blue-600 transition-all">
                  Maintenance Page
                </button>
              </Link>
            </div>
            {/* Community */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl border border-purple-100 hover:border-purple-400 transition-all duration-300 animate-fade-in-up delay-200">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-purple-600 animate-pulse" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Community</h2>
              <p className="text-gray-600 text-sm mb-4">
                Join our growing community of drone pilots. Share experiences, ask questions, and get help from experts worldwide.
              </p>
              <Link to="/comm">
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-md text-sm font-semibold shadow hover:from-purple-700 hover:to-blue-600 transition-all">
                  Community Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
