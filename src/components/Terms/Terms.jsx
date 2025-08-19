import React from "react";

export default function Terms() {
  return (
   
    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center">
          Terms of Service
        </h1>

        <section className="text-gray-700 space-y-6">
          <p>
            Welcome to SkyEdge Technologies. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Usage:</strong> You agree to use the site for lawful purposes only and not for any illegal or unauthorized activity.
            </li>
            <li>
              <strong>Content:</strong> All content is provided for informational purposes. We reserve the right to change or update content without notice.
            </li>
            <li>
              <strong>Account Responsibility:</strong> If you create an account, you are responsible for maintaining the confidentiality of your credentials.
            </li>
            <li>
              <strong>Limitations:</strong> We are not liable for any direct, indirect, or incidental damages resulting from use of our site or services.
            </li>
            <li>
              <strong>Eligibility:</strong> Users must be at least 13 years of age or have guardian supervision to access any interactive services.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All logos, content, images, and design are property of SkyEdge Technologies and protected by applicable laws.
            </li>
          </ul>

          <p>
            We reserve the right to update these terms at any time. Continued use of our services implies acceptance of any updates.
          </p>
        </section>

        <div className="text-sm text-center text-gray-500 mt-10">
          Last Updated: June 15, 2025
        </div>
      </div>
    </div>
  );
}

