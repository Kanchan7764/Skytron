import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import CompanyIntro from "../About/CompanyIntro";

export default function Home() {
  const swiperRef = useRef(null);

  const images = [
    "https://kj1bcdn.b-cdn.net/media/43679/drone.png",
    "https://pilotinstitute.com/wp-content/uploads/2023/02/How-Drones-Can-Be-Used-as-Educational-Tools.jpg",
    "https://i0.wp.com/thedronelifenj.com/wp-content/uploads/2021/02/AdobeStock_185032703-scaled.jpg?fit=2560%2C1440&ssl=1",
    "https://calcuttadroneacademy.com/wp-content/uploads/2024/09/DroneMappingSoftware.jpeg.large_.1024x1024.jpg",
    "https://cdn.prod.website-files.com/634db544173ac11907b1da8b/635f6b44f5142716559899c0_6350fce58146462d6df9cf40_disaster-relief-drones-featured.jpeg",
  ];

  return (
  <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full absolute inset-0 z-0"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content over the image */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Revolutionizing Agriculture & Industry with Intelligent Drone
          Solutions
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Precision. Performance. Productivity — From sky to soil and beyond.
        </p>

        {/* Main Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link to="/book">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
              Book a Drone
            </button>
          </Link>
          <Link to="/drone">
            <button className="bg-white text-green-700 hover:bg-green-100 font-semibold px-6 py-3 rounded-full">
              Explore Our Drones
            </button>
          </Link>
          <Link to="/consultation">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
              Get Consultation
            </button>
          </Link>
        </div>

        {/* Prev/Next Buttons */}
     <div className="flex gap-2">
  {/* Left Arrow */}
  <button
    onClick={() => swiperRef.current?.slidePrev()}
    aria-label="Previous Slide"
    className="absolute top-1/2 left-4 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50  transition-all flex items-center justify-center"
  >
    <span className="text-white text-lg font-bold leading-[1]">&lt;</span>
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => swiperRef.current?.slideNext()}
    aria-label="Next Slide"
    className="absolute top-1/2 right-4 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50  transition-all flex items-center justify-center"
  >
    <span className="text-white text-lg font-bold leading-[1]">&gt;</span>
  </button>
</div>






           




        
      </div>
    </div>
    
  </>
  );
}
