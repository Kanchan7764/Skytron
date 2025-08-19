import React from "react";
import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Repair() {
  return (
    <section className="bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Wrench className="w-10 h-10 text-red-600" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Repair & Testing
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Once approved, our certified technicians perform repairs, replace parts, and conduct rigorous flight testing to ensure optimal performance.
        </p>

        {/* Action Button */}
        <Link to="/repair-request">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Start Repair Request
          </button>
        </Link>
      </div>
    </section>
  );
}
