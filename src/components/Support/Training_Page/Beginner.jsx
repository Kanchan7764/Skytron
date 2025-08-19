import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Beginner() {
  return (
    <section className="bg-[#0f172a] text-white min-h-screen py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/training"
          className="flex items-center text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Beginner Drone Pilot Training
        </h1>

        <p className="text-gray-300 text-base leading-relaxed mb-8">
          Welcome to the Beginner Drone Pilot Training course! This course is
          designed to help new pilots understand the fundamentals of drone
          operation, safety procedures, aerial dynamics, and regulatory
          compliance.
        </p>

        <div className="space-y-6">
          <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              📋 Course Overview
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Drone types and basic components</li>
              <li>Flight regulations and safety guidelines</li>
              <li>Basic controls and flight maneuvers</li>
              <li>Battery management and maintenance</li>
              <li>Indoor and outdoor practice routines</li>
            </ul>
          </div>

          <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-green-400">
              🗓️ Duration & Format
            </h2>
            <p className="text-sm text-gray-300">
              This course spans <strong>4 weeks</strong> and includes:
              <br />
              - Weekly video modules
              <br />
              - Live Q&A sessions every Saturday
              <br />
              - Assignments and hands-on flight tasks
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">
              🎓 Certification
            </h2>
            <p className="text-sm text-gray-300">
              After successfully completing the course and final assessment,
              students will receive a <strong>Beginner Pilot Certificate</strong>
              , recognized by local aviation communities.
            </p>
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
