import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Replace with actual login function
      const session = await authService.login(formData);

      if (session) {
        const user = await authService.getCurrentUser();
        if (user) {
          // You can store user info in localStorage/sessionStorage if needed
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[28vh] md:h-[36vh] flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200 overflow-hidden mb-[-2rem]">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Login Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-blue-900/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg mb-2">Welcome Back</h1>
          <p className="text-lg md:text-xl font-medium">Sign in to your account</p>
        </div>
      </div>
      {/* SVG Wavy Divider */}
      <div className="-mt-2">
        <svg viewBox="0 0 1440 100" className="w-full h-10 md:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-100 animate-fade-in-up">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-1">Sign In</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Access your account securely</p>

          {error && (
            <div className="flex items-center justify-center mb-4">
              <span className="text-red-500 mr-2">&#9888;</span>
              <p className="text-center text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <button type="button" onClick={handleForgotPassword} className="text-sm font-semibold text-blue-600 hover:text-blue-500 cursor-pointer bg-transparent border-none p-0">Forgot password?</button>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 placeholder-gray-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2.5 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
