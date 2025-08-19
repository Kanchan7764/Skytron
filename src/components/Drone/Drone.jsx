import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Zap, Shield, Target, Camera, Wifi, Battery, MapPin, Clock, Users, TrendingUp } from "lucide-react";
import Pilot from "../Service/Pilot";
import DroneModel from "./DroneModel";

export default function Drone() {
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?cs=srgb&dl=pexels-inmortal-producciones-108299-336232.jpg&fm=jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg",
    "https://cdn.mos.cms.futurecdn.net/WG4PDRB6z6mqfpyGyueH8Q.jpg",
    "https://m.economictimes.com/thumb/msid-119694647,width-1200,height-1200,resizemode-4,imgsize-23530/bengaluru-drone-deliveries.jpg",
  ];

  const stats = [
    { icon: Target, value: "99.9%", label: "Accuracy Rate" },
    { icon: Clock, value: "24/7", label: "Operation Time" },
    { icon: Users, value: "1000+", label: "Happy Farmers" },
    { icon: TrendingUp, value: "40%", label: "Cost Reduction" },
  ];

  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8">
          {/* Enhanced Title */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Agricultural Drones
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing farming with precision technology and AI-powered insights
            </p>
          </div>

          {/* Enhanced Image Carousel */}
          <div className={`w-full max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                pagination={{ clickable: true }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-full bg-cover bg-center relative group"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Advanced Drone Technology</h3>
                        <p className="text-blue-100">Precision agriculture at its finest</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/drone-model"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              Explore Drones
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20 flex items-center">
              <Play className="mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transition-all duration-700 hover:scale-105"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Description Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Future of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smart Farming</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of agricultural technology designed specifically for Indian farming conditions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Precision Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    At AgriDronix, our agricultural drones represent the next generation of smart farming tools. 
                    Designed to meet the unique challenges of Indian agriculture, our drones are engineered for 
                    precision, efficiency, and sustainability. Equipped with advanced features such as GPS-based 
                    autonomous navigation, multispectral imaging, and AI-powered analytics, they help farmers 
                    monitor crop health, optimize inputs, and improve yield outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Spraying System</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One of the core advantages of our drone system is its ability to perform targeted spraying. 
                    Using precision nozzles and automated flight paths, our drones reduce pesticide and fertilizer 
                    wastage by up to 40%. This not only lowers input costs for farmers but also promotes 
                    environmentally responsible farming by minimizing chemical runoff into the soil and water systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Camera className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Crop Surveillance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In addition to spraying, our drones provide real-time crop surveillance through high-resolution 
                    and multispectral cameras. These images are analyzed using AI-driven software to detect plant 
                    stress, nutrient deficiencies, and pest infestations early. Farmers receive actionable insights 
                    through an intuitive mobile dashboard, enabling them to take timely decisions that directly 
                    impact yield quality and quantity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rugged & Reliable Design</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AgriDronix drones are built for rugged field conditions. They feature weather-resistant bodies, 
                    long battery life, and can cover large acreages efficiently—making them ideal for smallholder 
                    plots as well as commercial farms. The drones are capable of autonomous take-off, landing, and 
                    obstacle avoidance, ensuring safe operation even in complex field environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced How It Works Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Drones Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple 5-step process from planning to actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mission Planning",
                description: "Define the area, type of task (spraying/survey), and flight path using our intuitive digital interface.",
                icon: MapPin,
                color: "blue"
              },
              {
                title: "Autonomous Flight",
                description: "The drone autonomously takes off and navigates using GPS and onboard sensors for obstacle avoidance.",
                icon: Wifi,
                color: "green"
              },
              {
                title: "Data Collection",
                description: "Captures imagery or performs precise spraying with calibrated nozzles based on the mission type.",
                icon: Camera,
                color: "purple"
              },
              {
                title: "AI Processing",
                description: "Collected data is processed through cloud platforms using AI to extract actionable insights.",
                icon: Zap,
                color: "orange"
              },
              {
                title: "Smart Reports",
                description: "Operators and farmers receive detailed reports and maps to assist in informed decisions.",
                icon: TrendingUp,
                color: "pink"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-${item.color}-100 p-3 rounded-full mr-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology engineered for maximum efficiency and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 - GPS Navigation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-4 rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">GPS & RTK/PPK Navigation</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Autonomous, accurate route planning
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      RTK/PPK improves GPS precision to centimeter level
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Real-time position tracking and correction
                    </li>
                  </ul>
                  <Link
                    to="/gps"
                    className="inline-flex items-center mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2 - Multispectral Cameras */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-4 rounded-xl">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Multispectral & Thermal Cameras</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      RGB, Multispectral, and Thermal Imaging
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Crop health, moisture, and heat detection
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Advanced NDVI and vegetation analysis
                    </li>
                  </ul>
                  <Link
                    to="/mul"
                    className="inline-flex items-center mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3 - Automated Spraying */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-4 rounded-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Automated Spraying System</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Precision chemical application
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Multiple nozzle types and adjustable tanks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Variable rate application technology
                    </li>
                  </ul>
                  <Link
                    to="/auto"
                    className="inline-flex items-center mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 4 - Real-Time Telemetry */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-4 rounded-xl">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Telemetry & Live Feed</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Live data tracking and control
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Flight metrics, tank level, and video feedback
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Cloud-based data storage and analytics
                    </li>
                  </ul>
                  <Link
                    to="/real"
                    className="inline-flex items-center mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have already revolutionized their agricultural practices with our advanced drone technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/drone-model"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore Our Drones
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <DroneModel/>
      <Pilot/>
    </>
  );
}
