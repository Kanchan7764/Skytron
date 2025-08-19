import React from 'react';

export default function SurDrone() {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 py-12 sm:px-10 lg:px-24">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold text-indigo-800">
          Drone Applications in Surveying & Mapping
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Learn how drones are revolutionizing topographic surveying, land measurement, and geospatial analysis through aerial intelligence.
        </p>
      </div>

      {/* Applications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Key Applications</h2>
        <ul className="space-y-4 text-base leading-relaxed text-gray-700 list-disc list-inside">
          <li>
            <strong>Topographic Mapping:</strong> Generate accurate 3D models and terrain contours from aerial imagery.
          </li>
          <li>
            <strong>Boundary & Property Surveying:</strong> Use drones to perform cadastral and legal boundary surveys with precision.
          </li>
          <li>
            <strong>Volumetric Analysis:</strong> Quickly calculate volumes of stockpiles, earthworks, and cut-fill using photogrammetry.
          </li>
          <li>
            <strong>Urban & Infrastructure Planning:</strong> Integrate drone data into GIS for road, pipeline, and site design.
          </li>
          <li>
            <strong>Disaster Assessment:</strong> Survey hard-to-reach or dangerous terrain post-floods, earthquakes, or landslides.
          </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Watch Drone Mapping in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
             
              src="https://www.youtube.com/embed/A6T2MQX54zc?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
             
              src="https://www.youtube.com/embed/7uh_vfMEZKM?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Call to Action (Optional) */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600">
          Want to integrate drones into your surveying projects?
        </p>
        <button className="mt-4 px-6 py-3 bg-indigo-700 text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition">
          Contact Us for Consultation
        </button>
      </div>
    </div>
  );
}
