import React, { useState } from "react";

export default function ReviewGiven() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    profession: "",
    comment: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (star) => {
    setForm({ ...form, rating: star });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, profession, comment, rating } = form;
    if (!name || !profession || !comment || rating === 0) return;

    setReviews([
      ...reviews,
      { ...form, date: new Date().toLocaleDateString() },
    ]);
    setForm({ name: "", profession: "", comment: "", rating: 0 });

    alert("Your review has been submitted!");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] px-4 py-12 sm:px-8 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Share Your Experience
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Let us know how drones helped you!
        </p>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
            <input
              type="text"
              name="profession"
              value={form.profession}
              onChange={handleChange}
              placeholder="Your Profession, State"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              required
            />
          </div>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Write your review..."
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            required
          ></textarea>

          {/* Star Rating */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">Your Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                className={`w-6 h-6 cursor-pointer ${
                  form.rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition"
            >
              Submit Review
            </button>
          </div>
        </form>

        {/* Submitted Reviews */}
        {reviews.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Recent Reviews
            </h3>
            <div className="space-y-6">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="border border-gray-200 bg-gray-50 p-5 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between mb-1">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {rev.name}
                      </h4>
                      <p className="text-sm text-gray-500">{rev.profession}</p>
                    </div>
                    <span className="text-sm text-gray-500">{rev.date}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{rev.comment}</p>
                  <div className="mt-3 flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < rev.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.566-.955L10 0l2.947 5.955 6.566.955-4.757 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
