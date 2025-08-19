import React from "react";

export default function Security() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center">
          Security & Data Protection
        </h1>

        <section className="text-gray-700 space-y-6">
          <p>
            At <strong>SkyEdge Technologies</strong>, your data security is a top priority. We implement robust protocols to ensure the confidentiality, integrity, and availability of your information at all times.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Data Encryption:</strong> All data transfers are encrypted using SSL/TLS to protect your personal and usage data from unauthorized access.
            </li>
            <li>
              <strong>Secure Storage:</strong> Personal data is securely stored in encrypted databases with restricted access and regular audits.
            </li>
            <li>
              <strong>Access Control:</strong> Only authorized personnel have access to sensitive information, enforced by role-based access control and 2FA.
            </li>
            <li>
              <strong>Regular Audits:</strong> Our systems undergo regular vulnerability assessments and penetration testing to identify and fix security issues.
            </li>
            <li>
              <strong>Incident Response:</strong> We maintain an active incident response plan to handle and report any security breaches swiftly.
            </li>
            <li>
              <strong>Compliance:</strong> We comply with all relevant data protection laws, including GDPR and applicable Indian cybersecurity standards.
            </li>
          </ul>

          <p>
            Our team is continuously improving our security infrastructure to keep your data safe as we evolve our technology. If you have any questions or concerns about our security practices, feel free to contact us.
          </p>
        </section>

        <div className="text-sm text-center text-gray-500 mt-10">
          Last Updated: June 15, 2025
        </div>
      </div>
    </div>
  );
}
