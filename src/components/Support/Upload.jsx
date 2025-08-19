import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Upload() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [submittedPosts, setSubmittedPosts] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let mediaSource = "";
    if (mediaType === "upload") mediaSource = imagePreview;
    if (mediaType === "url") mediaSource = imageUrl;
    if (mediaType === "youtube") mediaSource = youtubeUrl;

    const newPost = {
      id: Date.now(),
      username,
      description,
      mediaType,
      media: mediaSource,
    };

    setSubmittedPosts([newPost, ...submittedPosts]);
    setSubmitted(true);

    // Reset form
    setUsername("");
    setDescription("");
    setMediaType("");
    setImageFile(null);
    setImagePreview(null);
    setImageUrl("");
    setYoutubeUrl("");

    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12 font-sans">
      
      <div className="max-w-3xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg border border-gray-700">
        <div className="mb-6">
          <Link to="/comm">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm">
              ← Back to Community
            </button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Drone Post</h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-700 rounded text-sm text-white text-center">
            ✅ Your post has been submitted!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
              placeholder="@yourname"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded resize-none h-24"
              placeholder="Describe your drone flight, location, gear, etc."
            ></textarea>
          </div>

          {/* Media Type */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Media Type <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mediaType"
                  value="upload"
                  checked={mediaType === "upload"}
                  onChange={() => setMediaType("upload")}
                />
                Upload Image
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mediaType"
                  value="url"
                  checked={mediaType === "url"}
                  onChange={() => setMediaType("url")}
                />
                Image URL
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mediaType"
                  value="youtube"
                  checked={mediaType === "youtube"}
                  onChange={() => setMediaType("youtube")}
                />
                YouTube Video
              </label>
            </div>
          </div>

          {/* Upload Image */}
          {mediaType === "upload" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Upload Image <span className="text-gray-400">(optional)</span>
              </label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-4 w-full max-h-64 object-cover rounded"
                />
              )}
            </div>
          )}

          {/* Image URL */}
          {mediaType === "url" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
                placeholder="https://example.com/drone-image.jpg"
              />
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Image Preview"
                  className="mt-4 w-full max-h-64 object-cover rounded"
                />
              )}
            </div>
          )}

          {/* YouTube Video */}
          {mediaType === "youtube" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                YouTube Video Link <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
                placeholder="https://www.youtube.com/embed/..."
              />
              {youtubeUrl && (
                <div className="aspect-video mt-4 rounded overflow-hidden">
                  <iframe
                    src={youtubeUrl}
                    title="Video Preview"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold"
            disabled={!mediaType}
          >
            Submit Post
          </button>
        </form>
      </div>

      {/* Submitted Posts */}
      {submittedPosts.length > 0 && (
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">📬 Recent Posts</h2>
          {submittedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 shadow-md"
            >
              <div className="mb-2 text-blue-400 font-semibold">@{post.username}</div>
              <p className="text-sm text-gray-300 mb-4">{post.description}</p>

              {post.mediaType === "youtube" ? (
                <div className="aspect-video rounded overflow-hidden">
                  <iframe
                    src={post.media}
                    title="Drone Video"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <img
                  src={post.media}
                  alt="Drone Media"
                  className="w-full max-h-96 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
