import React, { useState } from "react";
import { Camera, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";


const demoPosts = [
  {
    id: 1,
    username: "SkyPilot99",
    media: "https://www.youtube.com/embed/hjvwsHhFGg0?autoplay=0&start=0",
    description: "Captured sunrise over Himalayan peaks with my new 4K drone!",
    likes: 24,
    comments: 3,
  },
  {
    id: 2,
    username: "DroneFarmer",
    media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UB23OUidmKkVrWBZB2njYFtIgBL4Vb1x1g&s",
    description: "Crop health mapping in Punjab using NDVI.",
    likes: 41,
    comments: 6,
  },
];

export default function Community() {
  const [posts] = useState(demoPosts);

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 font-sans">
      
      <h2 className="text-4xl font-bold text-center mb-10">Community Form</h2>
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-14">
        Explore drone footage from our global community. Share your experiences, ask questions, and get feedback.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#1e293b] rounded-xl p-4 border border-gray-700">
            <div className="mb-2 text-sm text-blue-400 font-semibold flex items-center gap-2">
              <Camera className="w-4 h-4" /> @{post.username}
            </div>

            <div className="aspect-video rounded overflow-hidden mb-3">
              {post.media.includes("youtube.com") ? (
                <iframe
                  src={post.media}
                  title={post.description}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <img src={post.media} alt="User Upload" className="w-full h-full object-cover" />
              )}
            </div>

            <p className="text-sm text-gray-300 mb-4">{post.description}</p>

            <div className="flex items-center justify-between text-gray-400 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" /> {post.comments}
                </span>
              </div>
              <button className="text-blue-400 hover:underline">Comment</button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-400">Want to share your flight experience?</p>
        <Link
                to="/upload"
              >
                <button className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition">
          Upload Your Post
        </button>
               
              </Link>
        
      </div>
    </section>
  );
}
