import React from 'react';

export default function RealFeature() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-20 lg:px-32 text-gray-800">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Real-Time Telemetry & Live Feed
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Experience unparalleled drone control with live video streaming and precise telemetry data for safer and more informed decisions in real-time.
        </p>
      </header>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">📡 Key Capabilities</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Live HD video transmission from drone to control station.</li>
            <li>Instant telemetry data: GPS, altitude, speed, battery health.</li>
            <li>Multiple user views with secure real-time access.</li>
            <li>Data over 4G/5G, Wi-Fi, or RF depending on environment.</li>
            <li>Remote monitoring from any device or command center.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🎯 Benefits</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Immediate response to emergencies and dynamic conditions.</li>
            <li>Improved safety and mission effectiveness.</li>
            <li>Detailed insights during flight for better control.</li>
            <li>Ideal for inspections, security, surveillance, and mapping.</li>
            <li>Data can be recorded and analyzed for post-flight reports.</li>
          </ul>
        </div>
      </section>

      {/* Video Demonstration */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Watch These Technologies in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
             
              src="https://www.youtube.com/embed/-XMdp9mhecE?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/ulIWvFpsAGQ?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-6">
          🔍 Applications of Live Feed & Telemetry
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            'Search and Rescue Operations',
            'Border Surveillance',
            'Pipeline & Powerline Monitoring',
            'Wildlife Tracking',
            'Event Security & Crowd Management',
            'Infrastructure Inspections',
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow border">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="text-center">
        <p className="text-md text-gray-600 mb-4">
          Ready to integrate real-time telemetry into your drone system?
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition">
          Contact Our Team
        </button>
      </footer>
    </div>
  );
}
