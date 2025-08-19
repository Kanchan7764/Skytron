import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center">
          Privacy Policy
        </h1>

        <section className="text-gray-700 space-y-6">
          <p>
            At <strong>SkyEdge Technologies</strong>, we value your privacy and are committed to protecting the personal information you share with us through our website and services.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Information Collection:</strong> We collect your name, email, and contact details when you fill out forms, submit reviews, or contact us.
            </li>
            <li>
              <strong>Data Usage:</strong> Your information is used only to improve our services, respond to inquiries, and provide a better experience.
            </li>
            <li>
              <strong>No Data Selling:</strong> We do not sell, rent, or trade your personal information to third parties.
            </li>
            <li>
              <strong>Cookies:</strong> Cookies help us enhance your browsing experience and analyze site traffic. You may disable cookies in your browser settings.
            </li>
            <li>
              <strong>Security:</strong> We use encryption and secure technologies to protect your data from unauthorized access.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of receiving promotional messages at any time by contacting us or using the unsubscribe link.
            </li>
          </ul>

          <p>
            This policy may be updated periodically. Please review it regularly to stay informed about how we are protecting your data.
          </p>
        </section>

        <div className="text-sm text-center text-gray-500 mt-10">
          Last Updated: June 15, 2025
        </div>
      </div>
    </div>
  );
}
