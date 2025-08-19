import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Video,
  CheckCircle,
  BookOpenCheck,
} from "lucide-react";

const courses = [
  {
    title: "Beginner Drone Pilot Training",
    icon: <GraduationCap className="w-7 h-7 text-blue-500" />,
    description:
      "Learn the fundamentals of drone operation, safety, and aerial basics. Perfect for new pilots.",
    duration: "4 Weeks",
    level: "Beginner",
    link: "/beginner",
  },
  {
    title: "Advanced Aerial Cinematography",
    icon: <Video className="w-7 h-7 text-purple-500" />,
    description:
      "Master cinematic drone shots, camera angles, and editing workflows for film and commercial use.",
    duration: "6 Weeks",
    level: "Intermediate",
    link: "/intermedi",
  },
  {
    title: "Drone Mapping & Survey Certification",
    icon: <BookOpenCheck className="w-7 h-7 text-green-500" />,
    description:
      "Get certified in drone-based photogrammetry, LiDAR mapping, and terrain analysis.",
    duration: "8 Weeks",
    level: "Professional",
    link: "/mapcerti",
  },
  {
    title: "DGCA Certification Prep (India)",
    icon: <CheckCircle className="w-7 h-7 text-yellow-400" />,
    description:
      "Prepare for India’s DGCA Remote Pilot certification with theory, flight hours, and mock tests.",
    duration: "4–6 Weeks",
    level: "Certification",
    link: "/dgca",
  },
];

export default function Training() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Drone Academy & Training Courses
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-16">
        Whether you're just starting or looking to become a certified drone
        operator, our academy offers step-by-step guidance, live sessions, and
        expert mentorship.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {course.icon}
                <h3 className="text-xl font-semibold text-blue-400">
                  {course.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300 mb-5">{course.description}</p>

              <div className="flex justify-between text-xs text-gray-400 mb-6">
                <span>🕒 Duration: {course.duration}</span>
                <span>📘 Level: {course.level}</span>
              </div>
            </div>

            <Link to={course.link}>
              <button className="w-full mt-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition">
                Start Learning
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-20 text-center">
        <p className="text-gray-300 mb-4">
          🎓 <strong>Live Classes</strong> & <strong>Hands-On Practice</strong> included.
        </p>
        <Link to="/enroll">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded transition">
            Enroll Now
          </button>
        </Link>
      </div>
    </section>
  );
}
