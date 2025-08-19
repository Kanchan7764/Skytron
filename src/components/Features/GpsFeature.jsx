import React from 'react';
import { Link } from 'react-router-dom';

export default function GpsFeature() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen px-6 py-12 md:px-16 lg:px-28">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-bla">
          GPS & RTK/PPK Navigation in Drones
        </h1>
        <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
          Understand the critical role of GPS, RTK (Real-Time Kinematic), and PPK (Post-Processed Kinematic) navigation systems in ensuring drone flight accuracy and operational precision.
        </p>
      </header>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Core Navigation Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate-700 text-base leading-relaxed">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">GPS (Global Positioning System)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Standard navigation system used for most recreational and commercial drones.</li>
              <li>Accuracy typically within 1–3 meters depending on signal strength.</li>
              <li>Relies on satellite signals to track position, speed, and altitude.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">RTK (Real-Time Kinematic)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Delivers real-time corrections using ground-based stations for centimeter-level accuracy.</li>
              <li>Ideal for surveying, mapping, precision agriculture, and construction.</li>
              <li>Requires a constant link with a base station or RTK network.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">PPK (Post-Processed Kinematic)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Logs flight data and applies corrections after the flight for improved accuracy.</li>
              <li>Useful in environments where real-time RTK signals are unreliable.</li>
              <li>Preferred for high-end photogrammetry and topographic mapping.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Comparison & Use Cases</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>GPS:</strong> Basic flight tracking</li>
              <li><strong>RTK:</strong> Real-time precision (e.g., agriculture, inspection)</li>
              <li><strong>PPK:</strong> Post-flight accuracy (e.g., mapping, 3D modeling)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Visual Explanation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/FfHRue4MNtI?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/IRTsbheD__c?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-md text-slate-600 mb-4">
          Want to integrate high-precision navigation into your drone operations?
        </p>
        <Link to="/book">
        <button className="px-6 py-3 bg-indigo-700 text-white rounded-md text-sm font-medium hover:bg-indigo-800 transition">
          Request a Demo
        </button>
        </Link>
      </div>
    </div>
  );
}
