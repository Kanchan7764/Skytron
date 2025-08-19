import { useState } from "react";

const useCases = ["Photography", "Racing", "Delivery"];
const frames = [
  { name: "Lightweight", price: 100 },
  { name: "Carbon Fiber", price: 150 },
  { name: "Heavy Duty", price: 200 },
];
const cameras = [
  { name: "4K Ultra HD", price: 120 },
  { name: "Thermal Vision", price: 250 },
  { name: "No Camera", price: 0 },
];
const batteries = [
  { name: "2000mAh", price: 30 },
  { name: "3500mAh", price: 50 },
  { name: "5000mAh", price: 75 },
];
const payloads = [
  { name: "1kg", price: 40 },
  { name: "2kg", price: 70 },
  { name: "5kg", price: 120 },
];
const textures = [
  { name: "Matte", price: 10 },
  { name: "Glossy", price: 15 },
  { name: "Carbon Finish", price: 25 },
];
const colors = [
  { name: "Red", price: 5 },
  { name: "Black", price: 5 },
  { name: "White", price: 5 },
];
const addons = [
  { name: "FPV Goggles", price: 140 },
  { name: "Propeller Guards", price: 15 },
  { name: "Carrying Case", price: 35 },
];

export default function BuildPage() {
  const [selected, setSelected] = useState({
    useCase: "Photography",
    frame: frames[0],
    camera: cameras[0],
    battery: batteries[0],
    payload: payloads[0],
    texture: textures[0],
    color: colors[0],
    addonList: [],
  });

  const handleAddonToggle = (addon) => {
    const exists = selected.addonList.includes(addon);
    setSelected((prev) => ({
      ...prev,
      addonList: exists
        ? prev.addonList.filter((a) => a !== addon)
        : [...prev.addonList, addon],
    }));
  };

  const total =
    selected.frame.price +
    selected.camera.price +
    selected.battery.price +
    selected.payload.price +
    selected.texture.price +
    selected.color.price +
    selected.addonList.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white py-12 px-6 font-sans">
      <h2 className="text-4xl font-bold text-center mb-10">Build Your Drone</h2>

      <div className="max-w-4xl mx-auto space-y-8 bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700">
        {/* Use Case */}
        <div>
          <label className="block mb-1 font-medium text-blue-400">Select Use Case</label>
          <select
            className="w-full p-2 rounded bg-gray-800 text-white"
            value={selected.useCase}
            onChange={(e) =>
              setSelected((prev) => ({ ...prev, useCase: e.target.value }))
            }
          >
            {useCases.map((useCase) => (
              <option key={useCase}>{useCase}</option>
            ))}
          </select>
        </div>

        {/* Dropdowns for all properties */}
        {[{ label: "Frame Type", key: "frame", options: frames },
          { label: "Camera Option", key: "camera", options: cameras },
          { label: "Battery Capacity", key: "battery", options: batteries },
          { label: "Payload Capacity", key: "payload", options: payloads },
          { label: "Texture Finish", key: "texture", options: textures },
          { label: "Color Option", key: "color", options: colors }].map(({ label, key, options }) => (
          <div key={key}>
            <label className="block mb-1 font-medium text-blue-400">{label}</label>
            <select
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={selected[key].name}
              onChange={(e) => {
                const selectedOption = options.find((o) => o.name === e.target.value);
                setSelected((prev) => ({ ...prev, [key]: selectedOption }));
              }}
            >
              {options.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name} – ${option.price}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Add-ons */}
        {/* <div>
          <label className="block mb-1 font-medium text-blue-400">Add-ons</label>
          <div className="space-y-2">
            {addons.map((addon) => (
              <label key={addon.name} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selected.addonList.includes(addon)}
                  onChange={() => handleAddonToggle(addon)}
                  className="accent-blue-500"
                />
                <span>
                  {addon.name} – ${addon.price}
                </span>
              </label>
            ))}
          </div>
        </div> */}

        {/* Summary */}
        <div className="mt-6 bg-gray-900 p-4 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">Configuration Summary</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Use Case: {selected.useCase}</li>
            <li>Frame: {selected.frame.name}</li>
            <li>Camera: {selected.camera.name}</li>
            <li>Battery: {selected.battery.name}</li>
            <li>Payload: {selected.payload.name}</li>
            <li>Texture: {selected.texture.name}</li>
            <li>Color: {selected.color.name}</li>
            
          </ul>
          <p className="mt-4 text-lg font-bold text-white">
            Total Price: ${total}
          </p>
        </div>
      </div>
    </div>
  );
}
