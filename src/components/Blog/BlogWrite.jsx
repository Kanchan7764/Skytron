import React, { useState } from "react";

export default function BlogWrite() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category, image, content } = form;
    if (!title || !category || !content) return alert("Please fill in all fields.");
    setBlogs([...blogs, { ...form, date: new Date().toLocaleDateString() }]);
    alert("Blog submitted successfully!");
    setForm({
      title: "",
      category: "",
      image: "",
      content: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Share Your Drone Insights
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Publish your article on drone innovation, technology, or trends.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your blog content..."
            rows="6"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>

      {/* Submitted Blogs */}
      {blogs.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Submitted Blogs
          </h3>
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
              )}
              <h4 className="text-2xl font-bold text-blue-800">{blog.title}</h4>
              <p className="text-sm text-gray-500 mb-1">
                {blog.date} | by {blog.category}
              </p>
              <p className="text-gray-700 mt-2">{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
