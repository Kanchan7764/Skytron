import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[35vh] md:h-[45vh] flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-200 overflow-hidden mb-[-3rem]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Review Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-green-900/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4 animate-fade-in-up">Customer Reviews</h1>
          <p className="text-lg md:text-xl font-medium animate-fade-in-up delay-100">See what our customers are saying about our drones!</p>
          <Link
            to="/reviewgive"
            className="mt-6 inline-flex items-center bg-gradient-to-r from-green-600 to-blue-500 text-white text-base px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:from-green-700 hover:to-blue-600 transition-all duration-200 animate-fade-in-up delay-200"
          >
            Write Your Own Review
          </Link>
        </div>
      </div>
      {/* SVG Wavy Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 100" className="w-full h-16 md:h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-10 mb-16">
        {/* Review Card 1 */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/100?img=8"
              alt="Reviewer"
              className="w-14 h-14 rounded-full border-4 border-blue-400 shadow-lg ring-2 ring-green-300 animate-glow"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Anjali Verma
              </h3>
              <p className="text-sm text-gray-500">Farm Owner, Punjab</p>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-gray-700 text-base">
              “Using the DJI Agras T50 has completely transformed how we apply fertilizers. The variable rate spraying and terrain-following sensors have saved us both time and money.”
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex space-x-1 animate-fade-in-up delay-100">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 hover:scale-125 transition-transform duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">5.0 Stars</span>
          </div>
        </div>
        {/* Review Card 2 */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-100">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="Reviewer"
              className="w-14 h-14 rounded-full border-4 border-blue-400 shadow-lg ring-2 ring-green-300 animate-glow"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Rajesh Singh
              </h3>
              <p className="text-sm text-gray-500">Agronomist, Maharashtra</p>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-gray-700 text-base">
              "The drone's precision spraying has improved crop yield. Battery backup is decent and the build quality is excellent. Minor lag in app connection, but overall satisfied."
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex space-x-1 animate-fade-in-up delay-200">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"} hover:scale-125 transition-transform duration-150`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">4.0 Stars</span>
          </div>
        </div>
        {/* Review Card 3 */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-200">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="Reviewer"
              className="w-14 h-14 rounded-full border-4 border-blue-400 shadow-lg ring-2 ring-green-300 animate-glow"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Pooja Sharma
              </h3>
              <p className="text-sm text-gray-500">Agri-Tech Consultant, Haryana</p>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-gray-700 text-base">
              "An incredible innovation! Autonomous operation, obstacle detection, and real-time data made a big difference in our farming advisory services."
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex space-x-1 animate-fade-in-up delay-300">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 hover:scale-125 transition-transform duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">5.0 Stars</span>
          </div>
        </div>
        {/* Review Card 4 */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-300">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/100?img=9"
              alt="Reviewer"
              className="w-14 h-14 rounded-full border-4 border-blue-400 shadow-lg ring-2 ring-green-300 animate-glow"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Shruti Patel
              </h3>
              <p className="text-sm text-gray-500">Farm Owner, Gujarat</p>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-gray-700 text-base">
              "Great tool for spreading urea and liquid fertilizers. Took some time to learn but support was good. Weather resistance could be slightly better."
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex space-x-1 animate-fade-in-up delay-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"} hover:scale-125 transition-transform duration-150`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">4.0 Stars</span>
          </div>
        </div>
      </div>
    </>
  );
}
