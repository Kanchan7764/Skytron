import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function DGCACertification() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans min-h-screen">
         
         <div className="mb-2">
                           <Link
                             to="/training"
                             className="text-blue-400 hover:underline text-sm"
                           >
                             ← Back to Courses
                           </Link>
                         </div>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400">
          DGCA Certification Prep (India)
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto text-lg">
          Prepare for the DGCA RPAS Pilot certification exam with expert-led training on drone laws, airspace rules, and practical flying skills.
        </p>

        {/* Icon */}
        <div className="flex justify-center mb-10">
          <ShieldCheck className="w-12 h-12 text-yellow-500" />
        </div>

        {/* Generate Certificate Button */}
        <div className="text-center mb-12">
          <Link to="/mapprofcerti" state={{ courseTitle: "DGCA Certification Prep (India)" }}>
            <button className="inline-block px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-full transition">
              Generate Certification
            </button>
          </Link>
        </div>

        {/* Course Details */}
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
              <strong className="text-white">Mode:</strong> Online + DGCA-Affiliated Flying Partner
            </div>
            <div>
              <strong className="text-white">Practice:</strong> Mock Tests + Flight Simulator
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Certification:</strong> Yes – Prepares you to pass DGCA RPAS Certification Exam.
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What You’ll Learn</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>DGCA RPAS syllabus breakdown</li>
            <li>Indian airspace classifications</li>
            <li>No Permission No Takeoff (NPNT) system</li>
            <li>Weather, payloads, and emergency procedures</li>
            <li>Simulator training and safety protocols</li>
            <li>Mock exams and interview preparation</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/enroll">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition">
              Enroll Now & Start Your DGCA Prep
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
