import React from "react";
import { PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Warranty() {
  return (
    <section className="bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <PackageCheck className="w-10 h-10 text-blue-600" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Delivery & Warranty
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Your drone is shipped back with a full repair report and post-service warranty of up to 6 months, ensuring peace of mind.
        </p>

        {/* Action Button */}
        <Link to="/warranty-policy">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            View Warranty Policy
          </button>
        </Link>
      </div>
    </section>
  );
}
