import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_clinqqf', 'template_ixhdric', form.current, {
        publicKey: 'XfzRAZEwdQrzbJNZp',
      })
      .then(
        () => {
           form.current.reset(); 
          alert("✅ Message sent successfully!");

          setMessage("✅ Message sent successfully!");
         
        },
        (error) => {
          setMessage("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  
     
  return (
    <>
      {/* Modern Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-200 overflow-hidden mb-[-4rem]">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-green-900/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4 animate-fade-in-up">Get in Touch</h1>
          <p className="text-lg md:text-xl font-medium animate-fade-in-up delay-100">We'd love to hear from you. Reach out for any inquiries, support, or collaboration.</p>
        </div>
      </div>
      {/* SVG Wavy Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 100" className="w-full h-16 md:h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      {/* Main Contact Section */}
      <div className="bg-gray-50 py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16">
          {/* Grid: Contact Form + Details */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left: Consultation Form */}
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-green-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
                <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 placeholder-gray-400 transition-all"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 placeholder-gray-400 transition-all"
                  />
                  <input
                    name="number"
                    type="number"
                    placeholder="Your Phone No"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 placeholder-gray-400 transition-all"
                  />
                  <input
                    name="title"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 placeholder-gray-400 transition-all"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 placeholder-gray-400 transition-all"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:from-green-700 hover:to-blue-600 transition-all duration-200"
                  >
                    Send Message
                  </button>
                  {message && (
                    <p className="text-sm mt-2 text-center text-green-600 font-medium">{message}</p>
                  )}
                </form>
              </div>
            </div>
            {/* Right: Contact Info & Map */}
            <div className="flex flex-col justify-between h-full animate-fade-in-up delay-100">
              {/* Contact Info */}
              <div className="space-y-6 text-gray-800 text-base mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Company Details</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-100 to-blue-100 shadow hover:shadow-lg transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white text-xl shadow-lg"><FaPhoneAlt /></span>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-100 to-blue-100 shadow hover:shadow-lg transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl shadow-lg"><FaEnvelope /></span>
                  <div>
                    <span className="font-medium">Email:</span>
                    <p>company@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-100 to-blue-100 shadow hover:shadow-lg transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white text-xl shadow-lg"><FaMapMarkerAlt /></span>
                  <div>
                    <span className="font-medium">Location:</span>
                    <p>Darbhanga - 846004, Bihar, India</p>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-green-100 hover:scale-[1.02] transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28785.35200812539!2d85.89102550794808!3d26.15388834297156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec9fc9f275333f%3A0x4cd771e317a5b33b!2sDarbhanga%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sin!4v1718451700000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Darbhanga Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
