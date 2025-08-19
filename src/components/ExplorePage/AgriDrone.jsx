import React from "react";

export default function AgriDrone() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800">
          How to Use Drones in Agriculture
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Discover how modern drones are revolutionizing farming practices to
          boost productivity, monitor crops, and make smarter decisions.
        </p>
      </div>

      {/* Steps Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-6">
          Steps to Use Agricultural Drones:
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-800 text-base leading-relaxed">
          <li>
            <span className="font-semibold">Step 1:</span> Choose a drone with
            GPS, HD camera, and agricultural spraying or imaging tools.
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> Use mapping software
            to outline the farm field and set the drone’s flight path.
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> Upload the map into
            the drone app and configure the mission settings.
          </li>
          <li>
            <span className="font-semibold">Step 4:</span> Launch the drone and
            monitor the flight. Always keep backup batteries ready.
          </li>
          <li>
            <span className="font-semibold">Step 5:</span> Download aerial data
            like NDVI or thermal maps and assess crop health.
          </li>
          <li>
            <span className="font-semibold">Step 6:</span> Take actionable
            decisions based on data — improve irrigation, fertilization, and
            pest management.
          </li>
        </ul>
      </section>

      {/* Multiple YouTube Videos Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-6">
          Watch It in Action:
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Video 1 */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/kl3ZOS7zNHY?autoplay=0&start=0"
              title="Drone Agriculture Demo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video 2 */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/RC8uUGecjYM?autoplay=0&start=0"
              title="Drone Spraying Crops"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video 3 */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              className="w-full h-full"
              
              src="https://www.youtube.com/embed/fiOBJf9YorE?autoplay=0&start=0"
              title="Drone Mapping Fields"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Add more videos here as needed */}
        </div>
        <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-4">
          Want to integrate drone tech into your environmental monitoring projects?
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition">
          Get in Touch
        </button>
      </div>
      </section>
    </div>
  );
}
