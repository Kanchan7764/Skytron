import React from "react";
import { BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function DroneMapping() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans min-h-screen">
        <div className="mb-2 m-7 text-left">
                  <Link
                    to="/training"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    ← Back to Courses
                  </Link>
                </div>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-green-400">
          Drone Mapping & Survey Certification
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
          Get certified in photogrammetry, LiDAR mapping, and terrain analysis.
          Designed for professionals seeking drone survey mastery.
        </p>

        {/* Generate Certificate Button (Centered) */}
        <div className="flex justify-center mb-10">
          <Link to="/mapprofcerti" state={{ courseTitle: "Drone Mapping & Survey Certification" }}>
            <button className="px-6 py-2 bg-green-700 hover:bg-green-800 text-green-100 font-semibold rounded-full transition">
              🎓 Generate Certificate
            </button>
          </Link>
        </div>

        {/* Icon and Overview */}
        <div className="flex justify-center mb-10">
          <BookOpenCheck className="w-12 h-12 text-green-500" />
        </div>

        {/* Course Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <strong className="text-white">Duration:</strong> 8 Weeks
            </div>
            <div>
              <strong className="text-white">Level:</strong> Professional
            </div>
            <div>
              <strong className="text-white">Mode:</strong> Online + Field Training (Optional)
            </div>
            <div>
              <strong className="text-white">Projects:</strong> 4 Mapping Assignments
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Certification:</strong> Yes – Earn an industry-recognized certificate on successful completion of assessments.
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What You’ll Learn</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Introduction to drone surveying</li>
            <li>Flight planning and mission execution</li>
            <li>Photogrammetry basics using Pix4D & DroneDeploy</li>
            <li>LiDAR data processing and terrain modeling</li>
            <li>GIS software for map analysis</li>
            <li>Legal & regulatory compliance (DGCA/FAA)</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/enroll">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition">
              Enroll Now 
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
