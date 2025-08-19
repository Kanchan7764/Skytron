import React from "react";
import { Link } from "react-router-dom";

export default function CompanyIntro() {
  return (
 <div className="min-h-screen mt-10 px-4 py-12">
  <div className="max-w-7xl w-full mx-auto md:flex md:items-center md:gap-0">
    
    {/* Image Section */}
    <div className="md:w-[55%] mb-6 md:mb-0 flex justify-center">
      <img
        src="https://i.ytimg.com/vi/2_jArLJT4x4/mqdefault.jpg"
        alt="Company Overview"
        className="w-[95%] max-w-lg h-auto object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Content Section */}
    <div className="md:w-[45%] text-center md:text-left">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-snug max-w-[36ch]">
        Empowering Innovation with Drones
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6 max-w-[42ch]">
        At SkyEdge Technologies, we build advanced drone systems for precision tasks
        in agriculture, security, logistics, and aerial mapping—pushing boundaries
        in automation and efficiency.
      </p>
      <Link to="/about">
            <button className="bg-[#1e3a8a] hover:bg-[#1a3279] text-white px-6 py-3 rounded-lg text-sm font-semibold transition duration-300">
             Learn More About Us
            </button>
          </Link>
      
    </div>
  </div>
</div>






  );
}
