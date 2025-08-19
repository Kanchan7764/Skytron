import React from 'react'

export default function ConDrone() {
  return (
    <>
      
    <div className="min-h-screen bg-white px-4 py-12 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-500">
          Using Drones in Construction & Infrastructure
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
          Explore how drones are reshaping the construction industry—from site surveying to project monitoring and safety inspections.
        </p>
      </div>

      {/* Steps Section */}
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Applications in Construction:</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-800 leading-relaxed">
            <li>
              <strong>Site Surveying & Mapping:</strong> Capture aerial data to generate accurate 2D and 3D maps for planning and design.
            </li>
            <li>
              <strong>Progress Monitoring:</strong> Regular drone flyovers offer visual updates on construction progress with timestamps.
            </li>
            <li>
              <strong>Safety Inspections:</strong> Identify hazards in hard-to-reach or dangerous areas without endangering workers.
            </li>
            <li>
              <strong>Inventory & Equipment Tracking:</strong> Keep an eye on on-site materials, assets, and deliveries using drone visuals.
            </li>
            <li>
              <strong>Project Documentation:</strong> Maintain consistent aerial photo/video logs for stakeholders and clients.
            </li>
          </ul>
        </div>

        {/* YouTube Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            Watch How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/YwkZrWZfQ5s?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
           <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/dnV66k2DvJM?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-4">
          Want to integrate drone tech into your environmental monitoring projects?
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition">
          Get in Touch
        </button>
      </div>
        </div>
      </div>
    </div>


    </>
  )
}
