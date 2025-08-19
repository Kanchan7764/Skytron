import React, { useState } from 'react';



const accessories = [
  {
    name: "High-Capacity Battery Pack",
    description: "Extend your flight time with a powerful LiPo battery.",
    price: "$59.99",
    image: "https://i.ebayimg.com/images/g/42gAAOSwRpthX92n/s-l400.jpg"
  },
  {
    name: "Carbon Fiber Propeller Set",
    description: "Durable and lightweight for improved stability.",
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/61hhbHFOmZL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Drone Carrying Case",
    description: "Custom-fit protective case for travel and storage.",
    price: "$39.99",
    image: "https://i.ebayimg.com/images/g/s1MAAOSw3wRkITHf/s-l1200.jpg"
  },
  {
    name: "FPV Goggles Pro",
    description: "Experience real-time first-person flight visuals.",
    price: "$149.00",
    image: "https://www.quadkart.in/wp-content/uploads/2024/04/skyzonesky04oblack.webp"
  },
  {
    name: "Landing Gear Extension",
    description: "Improves landing stability on uneven terrain.",
    price: "$14.95",
    image: "https://aero-space.us/wp-content/uploads/types-of-landing-gear.jpg"
  },
  {
    name: "Propeller Guards",
    description: "Enhance safety for indoor or beginner flights.",
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/416tDAFOkvL.jpg"
  }
];


const droneData = [
  {
    name: 'DJI Mavic 3 Pro',
    variants: [
      {
        name: 'Mavic 3 Pro – Carbon Black',
        color: 'Carbon Black',
        texture: 'Matte',
        size: 'Standard',
        payload: '500g',
        camera: '5.1K Hasselblad',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8EWjVL3dOBh90R4kDA1N9LVXTpCJ49xpPg&s',
      },
      {
        name: 'Mavic 3 Pro – Arctic White',
        color: 'Arctic White',
        texture: 'Glossy',
        size: 'Compact',
        payload: '450g',
        camera: '5.1K Hasselblad',
        image: 'https://djinyc.com/cdn/shop/products/b4da9ea7-63a3-45c7-aed7-5639b70365de.jpg?v=1652734611&width=200',
      },
    ],
  },
  {
    name: 'Autel EVO II Pro',
    variants: [
      {
        name: 'EVO II – Flame Red',
        color: 'Flame Red',
        texture: 'Glossy',
        size: 'Standard',
        payload: '600g',
        camera: '6K UHD',
        image: 'https://rcdrone.top/cdn/shop/products/14659256832_668160658.jpg?v=1711094626',
      },
      {
        name: 'EVO II – Shadow Black',
        color: 'Shadow Black',
        texture: 'Matte',
        size: 'Pro Max',
        payload: '650g',
        camera: '6K UHD',
        image: 'https://shop.autelrobotics.com/cdn/shop/files/16_eaf44523-5d03-4915-94d6-0c4d029850dc_1100x.jpg?v=1737066745',
      },
    ],
  },
  {
    name: 'Skydio 2+',
    variants: [
      {
        name: 'Skydio 2+ – Navy',
        color: 'Navy',
        texture: 'Matte',
        size: 'Compact',
        payload: '300g',
        camera: '4K HDR',
        image: 'https://cdn.vox-cdn.com/thumbor/hdR8K7mBpb-G5f-AYrNaIs85i9M=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19249700/vpavic_190930_3698_0022.jpg',
      },
      {
        name: 'Skydio 2+ – Camo',
        color: 'Camo',
        texture: 'Carbon Fiber',
        size: 'Tactical',
        payload: '320g',
        camera: '4K HDR',
        image: 'https://m.media-amazon.com/images/I/41J9ds6PtRL._UF894,1000_QL80_.jpg',
      },
    ],
  },
];

export default function Compare() {
  const [variantIndexes, setVariantIndexes] = useState(
    droneData.map(() => 0) // start with first variant for each model
  );

  const handleNextVariant = (modelIndex) => {
    setVariantIndexes((prev) =>
      prev.map((val, i) =>
        i === modelIndex
          ? (val + 1) % droneData[i].variants.length
          : val
      )
    );
  };

  return (
 <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12 font-sans">
  <h1 className="text-4xl font-bold text-center mb-12 text-white">
    Drone Model Showcase
  </h1>

  <div className="max-w-6xl mx-auto space-y-8">
    {droneData.map((drone, index) => {
      const variant = drone.variants[variantIndexes[index]];
      return (
        <div
          key={index}
          className="bg-[#1e293b] w-full sm:max-w-3xl mx-auto rounded-xl border border-gray-700 shadow-md p-3 flex flex-col sm:flex-row sm:items-center"
        >
          {/* Drone Image */}
          <img
            src={variant.image}
            alt={variant.name}
            className="w-60 h-auto object-contain rounded-md shadow-lg mb-4 sm:mb-0"
          />

          {/* Info */}
          <div className="flex flex-col sm:ml-5 w-full sm:w-[60%]">
            <h2 className="text-base font-semibold text-blue-400 mb-1">{variant.name}</h2>

            <div className="bg-gray-800 p-2 rounded-md text-sm space-y-0.5">
              {Object.entries(variant).filter(([key]) =>
                ['color', 'texture', 'size', 'payload', 'camera'].includes(key)
              ).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between"
                >
                  <span className="text-gray-400 capitalize">{key}</span>
                  <span className="text-right text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Variant Switcher */}
            <button
              onClick={() => handleNextVariant(index)}
              className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition self-start"
            >
              Next Variant →
            </button>
          </div>
        </div>
      );
    })}
  </div>

  <div className="bg-[#0f172a] text-white py-16 px-6 font-sans">
  <h2 className="text-4xl font-bold text-center text-white mb-10">Accessories & Add-ons</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {accessories.map((item, idx) => (
      <div key={idx} className="bg-[#1e293b] rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition duration-300">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-blue-400 mb-1">{item.name}</h3>
          <p className="text-gray-300 text-sm mb-3">{item.description}</p>
          <span className="text-sm font-medium text-white bg-blue-600 px-2 py-1 rounded">
            {item.price}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

</div>







  );
}


