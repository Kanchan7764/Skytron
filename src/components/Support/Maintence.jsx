import React from "react";
import { Wrench, ShieldCheck, Clock3, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const repairSteps = [
  {
    title: "1. Request Service",
    description:
      "Submit a maintenance or repair request through our website or helpline. Our team responds within 24 hours.",
    icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
    link: "/request",
    buttonText: "Submit Request",
  },
  {
    title: "2. Diagnostic & Quote",
    description:
      "We assess your drone, identify issues, and send a detailed quote including timeline and costs.",
    icon: <Clock3 className="w-6 h-6 text-yellow-400" />,
    link: "/quote",
    buttonText: "View Details",
  },
  {
    title: "3. Repair & Testing",
    description:
      "Once approved, our certified technicians perform repairs, replace parts, and conduct rigorous flight testing.",
    icon: <Wrench className="w-6 h-6 text-green-400" />,
    link: "/repair",
    buttonText: "Repair Info",
  },
  {
    title: "4. Delivery & Warranty",
    description:
      "Your drone is shipped back with a full repair report and post-service warranty of up to 6 months.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    link: "/warranty",
    buttonText: "Warranty Info",
  },
];

export default function Maintenance() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Drone Maintenance & Repair Services
      </h2>

      <div className="max-w-4xl mx-auto text-center text-gray-300 mb-12">
        We provide end-to-end support for all major drone brands — including scheduled maintenance, warranty coverage, and fast repair turnaround. Our certified experts ensure your drone is back in the air safely and swiftly.
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {repairSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] rounded-xl border border-gray-700 p-6 flex flex-col justify-between gap-4 hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <div>{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </div>

            <div className="text-right mt-4">
              <Link to={step.link}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                  {step.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center mt-14 text-sm text-gray-400">
        <p className="mb-2">
          📦 <strong>Free Pickup & Delivery</strong> available in select cities.
        </p>
        <p>
          🛡️ <strong>Warranty Coverage:</strong> Up to 6 months on all repairs and replaced components.
        </p>
      </div>
    </section>
  );
}
