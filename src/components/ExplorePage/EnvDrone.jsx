import React from 'react';

export default function EnvDrone() {
  return (
    <div className="bg-white min-h-screen px-6 py-12 md:px-16 lg:px-28 text-gray-800">
      {/* Page Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
          Drone Applications in Environmental Monitoring
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Learn how drones are revolutionizing environmental studies by providing accurate, real-time data for sustainable decisions.
        </p>
      </header>

      {/* Applications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">Key Applications</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-base leading-relaxed">
          <li><strong>Air Quality Monitoring:</strong> Drones equipped with gas sensors detect pollution hotspots and emissions.</li>
          <li><strong>Water Quality Analysis:</strong> Collect water samples or detect contaminants in lakes, rivers, and coastal zones.</li>
          <li><strong>Forest Health & Deforestation Tracking:</strong> Monitor biodiversity, detect illegal logging, and track wildlife movement.</li>
          <li><strong>Soil Erosion & Land Degradation:</strong> Capture aerial imagery for assessing soil health and topography changes.</li>
          <li><strong>Wildlife Surveillance:</strong> Observe sensitive habitats without disturbance using quiet, long-range drones.</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Watch Drone Monitoring in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/49Ut67lAJKo?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/kN3X2rtpPxo?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-4">
          Want to integrate drone tech into your environmental monitoring projects?
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
