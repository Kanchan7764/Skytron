import React from "react";
import { PhoneCall, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Request() {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Wrench className="w-12 h-12 text-green-600" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Request Drone Maintenance or Repair
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-md">
          You can quickly request drone servicing through our secure online form
          or connect with a technician via our support line. Our response time is
          typically within <strong>24 hours</strong>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <Link to="/maintenance-request-form">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition text-sm sm:text-base">
              Submit Online Request
            </button>
          </Link>

          <a href="tel:+911234567890">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2 text-sm sm:text-base">
              <PhoneCall className="w-5 h-5" />
              Call Support
            </button>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
          <p className="mb-2">
            🛠️ Our certified technicians use genuine parts and test every drone after servicing.
          </p>
          <p>
            🚚 Free pickup & delivery in metro cities. Nationwide service available.
          </p>
        </div>
      </div>
    </section>
  );
}
