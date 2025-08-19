import React from "react";
import AgriDrone from "../ExplorePage/AgriDrone";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const droneUses = [
  {
    title: "Agriculture",
    description:
      "Drones are revolutionizing agriculture by increasing efficiency and productivity.",
    points: [
      "Crop Monitoring",
      "Fertilizer & Pesticide Spraying",
      "Aerial Seeding",
      "Soil & Field Analysis",
      "Irrigation Management",
      "Livestock Monitoring",
    ],
    image:
      "https://www.azolifesciences.com/images/Article_Images/ImageForArticle_757_1646406361936784.jpg",
    link: "/use/agridrone",
  },
  {
    title: "Construction & Infrastructure",
    description:
      "Drones streamline construction through advanced surveying and inspection.",
    points: [
      "Topographic Surveying & 3D Mapping",
      "Progress Monitoring",
      "Structural Inspections",
      "Volumetric Calculations",
      "Safety Inspections",
    ],
    link: "/use/condrone",
    image:
      "https://www.dartdrones.com/wp-content/uploads/2021/05/shutterstock_685922518.jpg",
  },
  {
    title: "Surveying & Mapping",
    description: "Achieve accurate mapping with drone-powered aerial surveys.",
    points: [
      "Land Mapping",
      "Contour Mapping",
      "Terrain Modeling",
      "Cadastral Surveys",
      "Coastal & River Mapping",
    ],
    link: "/use/surdrone",
    image:
      "https://garudsurvey.com/wp-content/uploads/2024/08/land-surveying-with-drones.jpg",
  },
  {
    title: "Disaster Management",
    description:
      "Enhance disaster response with real-time aerial data and rapid deployment.",
    points: [
      "Search & Rescue Operations",
      "Flood Monitoring",
      "Landslide Detection",
      "Firefighting Assistance",
      "Aid & Medicine Delivery",
    ],
    link: "/use/disdrone",
    image:
      "https://www.innovationnewsnetwork.com/wp-content/uploads/2023/12/shutterstockAndy-Dean-Photography_1427855816.jpg",
  },
  {
    title: "Environmental Monitoring",
    description:
      "Track ecosystems and climate change with real-time drone insights.",
    points: [
      "Wildlife Monitoring",
      "Forest Health Assessment",
      "Climate Change Research",
      "Glacier Tracking",
      "Marine Observation",
    ],
    link: "/use/envdrone",
    image:
      "https://geonadir.com/wp-content/uploads/2022/05/20190323_162725-1024x768.jpg",
  },
  {
    title: "Defense & Military",
    description:
      "Drones provide strategic advantages in modern defense systems.",
    points: [
      "Reconnaissance & Surveillance",
      "Border Patrol",
      "Combat Support Missions",
      "Mine Detection",
      "Target Tracking",
    ],
    link: "/use/defdrone",
    image:
      "https://media.defense.gov/2024/Jul/15/2003503603/1920/1080/0/240715-M-HL692-0015.JPG",
  },
];

export default function Use() {
  return (
    <>
      <div className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Uses of Drones</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover how drones are transforming industries across the globe.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
          {droneUses.map((use, idx) => (
            <div key={idx} className="flex justify-center">
              <div className="w-[85%] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[450px]">
                {/* Image */}
                <div className="h-1/2 w-full bg-gray-100">
                  <img
                    src={use.image}
                    alt={use.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="h-1/2 p-3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {use.title}
                    </h2>
                    <p className="text-gray-700 text-sm mb-1 line-clamp-2">
                      {use.description}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-1 max-h-[60px] overflow-hidden">
                      {use.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={use.link}
                    className="mt-2 inline-flex items-center bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Explore More <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
