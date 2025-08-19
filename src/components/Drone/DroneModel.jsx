import React, { useState } from 'react';
import { useNavigate ,Link} from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../Buy/Cart';




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
        price:'500',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8EWjVL3dOBh90R4kDA1N9LVXTpCJ49xpPg&s',
      },
      {
        name: 'Mavic 3 Pro – Arctic White',
        color: 'Arctic White',
        texture: 'Glossy',
        size: 'Compact',
        payload: '450g',
         price:'500',
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
        price:'500',
        image: 'https://rcdrone.top/cdn/shop/products/14659256832_668160658.jpg?v=1711094626',
      },
      {
        name: 'EVO II – Shadow Black',
        color: 'Shadow Black',
        texture: 'Matte',
        size: 'Pro Max',
        payload: '650g',
        camera: '6K UHD',
        price:'500',
        useCase: 'Military Reconnaissance',
  frameType: 'Foldable Carbon Frame',
  batteryCapacity: '6000mAh',
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
        price:'500',
        useCase: 'Military Reconnaissance',
  frameType: 'Foldable Carbon Frame',
  batteryCapacity: '6000mAh',
        image: 'https://cdn.vox-cdn.com/thumbor/hdR8K7mBpb-G5f-AYrNaIs85i9M=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19249700/vpavic_190930_3698_0022.jpg',
      },
      {
        name: 'Skydio 2+ – Camo',
        color: 'Camo',
        texture: 'Carbon Fiber',
        size: 'Tactical',
        payload: '320g',
        camera: '4K HDR',
        price:'500',
        image: 'https://m.media-amazon.com/images/I/41J9ds6PtRL._UF894,1000_QL80_.jpg',
        useCase: 'Military Reconnaissance',
  frameType: 'Foldable Carbon Frame',
  batteryCapacity: '6000mAh'
      },
    ],
  },
];



const handleNextVariant = (index) => {
  setVariantIndexes((prev) =>
    prev.map((v, i) =>
      i === index ? (v + 1) % droneData[i].variants.length : v
    )
  );
};

const handlePreviousVariant = (index) => {
  setVariantIndexes((prev) =>
    prev.map((v, i) =>
      i === index
        ? (v - 1 + droneData[i].variants.length) % droneData[i].variants.length
        : v
    )
  );
};

const ProductCard = ({ variant }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(variant);
    alert(`Added ${variant.name} to cart`);
  };
}




export default function DroneModel() {
    const navigate = useNavigate();

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
    <>
 <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12 font-sans">
  <h1 className="text-4xl font-bold text-center mb-12 text-white">Models</h1>

  <div className="max-w-6xl mx-auto space-y-8">
    {droneData.map((drone, index) => {
      const variant = drone.variants[variantIndexes[index]];
      return (
       <div
  key={index}
  className="bg-[#1e293b] w-full sm:max-w-3xl mx-auto rounded-xl border border-gray-700 shadow-md p-3 flex flex-col sm:flex-row sm:items-center"
>
  {/* Left Icon */}
   <button
    onClick={() => handlePreviousVariant(index)}
    className="text-white hover:text-blue-400 mr-2 self-center"
  >
    <ChevronLeft size={24} />
  </button>
  <img
    src={variant.image}
    alt={variant.name}
    className="w-60 h-auto object-contain rounded-md shadow-lg mb-4 sm:mb-0"
  />

  {/* Details Section */}
  <div className="flex flex-col sm:ml-5 w-full sm:w-[60%]">
    <h2 className="text-base font-semibold text-blue-400 mb-1">{variant.name}</h2>

    <div className="bg-gray-800 p-2 rounded-md text-sm space-y-0.5">
      {[
        'color',
        'texture',
        'size',
        'payload',
        'camera',
        'useCase',
        'frameType',
        'batteryCapacity'
      ].map((key, idx) => (
        <div key={idx} className="flex justify-between">
          <span className="text-gray-400 capitalize">{key}</span>
          <span className="text-right text-white">{variant[key] || 'N/A'}</span>
        </div>
      ))}

      {'price' in variant && (
        <div className="flex justify-between font-semibold text-base pt-1 border-t border-gray-600 mt-2">
          <span className="text-gray-200">Price</span>
          <span className="text-green-400">${variant.price}</span>
        </div>
      )}
    </div>

    <div className="flex gap-2 mt-2 flex-wrap">
      <Link to="/carts">
      <button
        onClick={() => alert(`Added ${variant.name} to cart`)}
        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-black rounded text-sm transition"
      >
        Add to Cart
      </button>
      </Link>

      <button
        onClick={() => alert(`Proceeding to buy ${variant.name}`)}
        className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition"
      >
        Buy Now
      </button>
    </div>
  </div>

  {/* Right Icon */}
   <button
    onClick={() => handleNextVariant(index)}
    className="text-white hover:text-blue-400 ml-2 self-center"
  >
    <ChevronRight size={24} />
  </button>
</div>


      );
    })}
  </div>
</div>





 <div className="bg-[#0f172a] text-white py-16 px-6 font-sans">
  <h2 className="text-4xl font-bold text-center text-white mb-10">Accessories & Add-ons</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {accessories.map((item, idx) => (
      <div
        key={idx}
        className="bg-[#1e293b] rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col h-full justify-between">
          {/* Title and Price Row */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-blue-400">{item.name}</h3>
            <span className="text-sm font-medium text-white bg-blue-600 px-2 py-1 rounded">
              {item.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm">{item.description}</p>

          {/* Buttons with top margin */}
          <div className="mt-4 flex gap-2 flex-wrap">
            <button
              onClick={() => alert(`Added ${item.name} to cart`)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => alert(`Proceeding to buy ${item.name}`)}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




</>
  );
}


