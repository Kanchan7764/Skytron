import React from "react";
import { Video, CheckCircle, Film, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Intermediate() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/training"
            className="text-blue-400 hover:underline text-sm"
          >
            ← Back to Courses
          </Link>
        </div>

        {/* Course Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Advanced Aerial Cinematography
          </h1>
          <p className="text-gray-300 text-lg">
            Master cinematic drone shots, smooth camera movements, and editing workflows for stunning professional content.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="space-y-4 text-gray-300 list-none">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Drone camera control, framing & subject tracking
            </li>
            <li className="flex items-center gap-3">
              <Film className="w-5 h-5 text-purple-400" />
              Creating cinematic sequences & storytelling through aerial shots
            </li>
            <li className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-yellow-300" />
              Color grading & post-production editing for aerial footage
            </li>
            <li className="flex items-center gap-3">
              <Video className="w-5 h-5 text-red-400" />
              Working with FPV drones for dynamic filming
            </li>
          </ul>
        </div>

        {/* Course Info */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <strong className="text-white">Duration:</strong> 6 Weeks
            </div>
            <div>
              <strong className="text-white">Level:</strong> Intermediate
            </div>
            <div>
              <strong className="text-white">Mode:</strong> Online (Live & Recorded)
            </div>
            <div>
              <strong className="text-white">Projects:</strong> 3 Video Assignments
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/enroll">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition">
              Enroll in this Course
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
