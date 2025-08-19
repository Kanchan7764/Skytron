import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "The Future of Agricultural Drones",
    date: "June 10, 2025",
    author: "Dr. A.K. Verma",
    summary:
      "Discover how drones are transforming modern farming practices through AI-driven crop monitoring and precision spraying.",
    image: "https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2024/05/Future-of-drone-technology-in-agriculture-1.png",
  },
  {
    title: "Military drones",
    date: "May 28, 2025",
    author: "Anjali Sharma",
    summary:
      "A breakdown of the most advanced and efficient drones available this year, with use-case comparisons.",
    image: "https://www.aerotime.aero/images/2025/04/Best-military-drones-1500x1000-1.jpg",
  },
  {
    title: "How Drones are Enhancing Logistics",
    date: "May 15, 2025",
    author: "Ravi Nair",
    summary:
      "Explore how drone fleets are reshaping the logistics landscape by cutting delivery times and reducing costs.",
    image: "https://www.rasmussen.edu/images/rasmussenlibraries/admissions/drone-logistics-article-960-(1).jpg",
  },
];

export default function BlogPage() {
  return (
    <>
    <div className="min-h-screen bg-[#f1f5f9] py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-[#1e293b] text-center mb-12">
        Drone Insights & News
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#0f172a] mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {blog.date} | {blog.author}
              </p>
              <p className="text-gray-700 text-base mb-4">{blog.summary}</p>
              <button className="text-sm font-medium text-blue-600 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

       <div className="flex justify-center mt-10 mb-10">
        <Link
          to="/blogwrite"
          className="mt-2 inline-flex items-center bg-green-500 text-white text-sm px-4 py-2 rounded-md transition hover:bg-green-600"
        >
          Write Your Own Blog
        </Link>
      </div>
    </div>

    
     
    </>
  );
}
