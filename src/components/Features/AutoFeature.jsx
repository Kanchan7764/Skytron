import React from 'react';

export default function AutoFeature() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen px-6 py-12 md:px-20 lg:px-32">
      {/* Hero Section */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
          Automated Spraying System with Drones
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Revolutionizing crop protection through precision-targeted, automated spraying technology.
        </p>
      </header>

      {/* Benefits Section */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">✨ Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>GPS & RTK enabled for centimeter-level accuracy.</li>
            <li>Obstacle avoidance sensors for safe operation.</li>
            <li>Automated refilling and route planning support.</li>
            <li>Customizable spray height, angle, and pressure.</li>
            <li>Weather-resilient flight for varied climates.</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🚀 Advantages</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Reduces chemical waste and environmental impact.</li>
            <li>Minimizes human exposure to hazardous pesticides.</li>
            <li>Covers large areas quickly with uniform application.</li>
            <li>Precision spraying based on real-time crop data.</li>
            <li>Efficient in terrains difficult for tractors or workers.</li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">
          🌾 Use Cases for Automated Spraying Drones
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          {[
            'Crop pest and disease management',
            'Fertilizer and micronutrient application',
            'Weed control across large farmlands',
            'Vineyard and orchard maintenance',
            'Forestry spraying in hilly areas',
            'Water spraying during drought conditions',
          ].map((use, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-sm border">
              {use}
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Watch These Technologies in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/odP_0wQ0d8Y?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/Ra8bZOn-OjM?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-md text-gray-600 mb-4">
          Want to implement automated spraying in your fields?
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
