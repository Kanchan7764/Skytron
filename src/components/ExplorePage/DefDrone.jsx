import React from 'react';

export default function DefDrone() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 md:px-16 lg:px-28 text-gray-800">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900">
          Drone Applications in Defense & Military
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Explore how unmanned aerial systems are transforming modern military operations through surveillance, reconnaissance, and tactical support.
        </p>
      </header>

      {/* Applications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Strategic Applications</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-base leading-relaxed">
          <li>
            <strong>Surveillance & Reconnaissance:</strong> Real-time monitoring of enemy territories and movement using high-altitude drones.
          </li>
          <li>
            <strong>Target Acquisition:</strong> Precise identification of enemy positions before launching manned or unmanned strikes.
          </li>
          <li>
            <strong>Border Security:</strong> Patrolling vast and remote borders with thermal and night-vision capable drones.
          </li>
          <li>
            <strong>Electronic Warfare:</strong> Drones equipped to jam enemy communication and intercept signals.
          </li>
          <li>
            <strong>Combat & Strike Missions:</strong> Armed UAVs capable of precision strikes while minimizing soldier risk.
          </li>
          <li>
            <strong>Search & Rescue:</strong> Rapid deployment of drones for reconnaissance in disaster or combat zones.
          </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Watch Drones in Military Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/8AWIroPud8c?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/dpxU8_Fa5RE?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-4">
          Interested in adopting drone technology for defense-grade operations?
        </p>
        <button className="px-6 py-3 bg-blue-800 text-white rounded-md text-sm font-medium hover:bg-blue-900 transition">
          Contact Our Defense Team
        </button>
      </div>
    </div>
  );
}
