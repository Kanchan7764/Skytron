import React from 'react';

export default function DisDrone() {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-4 py-12 sm:px-10 lg:px-24">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold text-black">
          Drone Applications in Disaster Management
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Explore how drone technology enhances emergency response, risk assessment, and recovery efforts during natural and man-made disasters.
        </p>
      </div>

      {/* Applications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-black mb-6">Key Applications</h2>
        <ul className="space-y-4 text-base leading-relaxed text-gray-700 list-disc list-inside">
          <li>
            <strong>Search and Rescue:</strong> Use thermal imaging and aerial views to locate missing persons in remote or dangerous areas.
          </li>
          <li>
            <strong>Damage Assessment:</strong> Quickly assess affected zones for collapsed structures, flood zones, and infrastructure damage.
          </li>
          <li>
            <strong>Real-Time Monitoring:</strong> Stream live footage to emergency command centers for decision-making and coordination.
          </li>
          <li>
            <strong>Logistics and Aid Delivery:</strong> Transport emergency supplies to inaccessible or isolated regions.
          </li>
          <li>
            <strong>Mapping Disaster Areas:</strong> Capture geospatial data for post-disaster analysis and recovery planning.
          </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-black mb-6 text-center">Drones in Action: Disaster Relief</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/Izk2dBs3asU?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/N2B9ypm6PCY?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-600">
          Looking to deploy drones in your disaster response program?
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">
          Contact Our Experts
        </button>
      </div>
    </div>
  );
}
