import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Quote() {
  return (
    <section className="bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FileText className="w-10 h-10 text-indigo-600" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Diagnostic & Quote
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          We assess your drone, identify issues, and send a detailed quote
          including estimated repair time and total cost.
        </p>

        {/* Action Button */}
        <Link to="/diagnostic-request">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Request Diagnostic
          </button>
        </Link>
      </div>
    </section>
  );
}
