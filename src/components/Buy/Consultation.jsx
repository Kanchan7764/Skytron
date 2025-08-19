import React, { useState } from "react";

export default function Consultation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[32vh] md:h-[40vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2024/12/travel-drones.jpg)' }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">Drone Consultation</h1>
          <p className="text-lg md:text-xl font-medium">Get expert advice for your drone needs</p>
        </div>
      </div>
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Request a Free Consultation</h2>
          <p className="text-gray-600 text-center mb-8">Fill out the form and our drone experts will get in touch with you soon.</p>
          {submitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center font-semibold">Thank you! We have received your request.</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 