import React from 'react';

export default function MultiFeature() {
  return (
    <div className="bg-slate-50 min-h-screen px-6 py-12 md:px-16 lg:px-28 text-slate-800">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Multispectral & Thermal Cameras in Drones
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Explore how advanced camera technologies help drones detect crop health, monitor environments, and perform thermal inspections with unmatched accuracy.
        </p>
      </header>

      {/* Feature Sections */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        {/* Multispectral Camera */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">📸 Multispectral Cameras</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Capture data in multiple light bands: visible, near-infrared, and red-edge.</li>
            <li>Useful for precision agriculture, forest monitoring, and environmental studies.</li>
            <li>Provides vegetation indices (like NDVI) to assess crop health and stress levels.</li>
            <li>Helps identify irrigation needs, pest attacks, and nutrient deficiencies early.</li>
          </ul>
        </div>

        {/* Thermal Camera */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">🌡️ Thermal Cameras</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Detect temperature differences across surfaces with thermal imaging.</li>
            <li>Ideal for building inspections, solar panel diagnostics, and firefighting.</li>
            <li>Helps locate energy leaks, overheating equipment, and missing insulation.</li>
            <li>Also used in search and rescue and livestock monitoring applications.</li>
          </ul>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Watch These Technologies in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BHhHOLIZKvY?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/-vs31kL-E08?autoplay=0&start=0"
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
          Ready to integrate thermal or multispectral payloads into your drone operations?
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition">
          Contact Our Experts
        </button>
      </div>
    </div>
  );
}
