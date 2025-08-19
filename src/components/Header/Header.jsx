import { label } from "framer-motion/client";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import  { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; 
import { useCart } from '../Buy/Cart';

export default function Header() {
   const [showMenu, setShowMenu] = useState(false);
   const { getCartCount } = useCart();

   const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/use", label: "Use" },
    { path: "/contact", label: "Contact" },
    { path: "/review", label: "Testimonial" },
    { path: "/service", label: "Service" },
    { path: "/support", label: "Support" },
    { path: "/login", label: "Login" },
  ];
  return (
    <header className="shadow sticky z-50 top-0 w-full">
      <nav className="bg-black w-full    px-7 py-4">
        <div className="flex flex-wrap justify-between items-center w-full text-white">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIe2JLENFWnXyhpk_QNWbbfygCBAJdLNXSMiP16T7Z0Ke3CFjnIx1AKH_qu_VuhlQBHk&usqp=CAU"            
              alt=""
              className="h-18 w-14"
            />
            <h2 className="text-xl font-bold">SkyTron</h2>
          </div>

          {/* Navigation Links */}
          <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-white focus:outline-none lg:hidden"
      >
        {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={({ isActive }) =>
                  `block py-2 px-3 transition-all duration-200 ${
                    isActive ? "text-orange-500" : "text-white"
                  } hover:text-orange-500`
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Cart Button Desktop */}
        <Link to="/carts" className="relative ml-4 flex items-center group">
          <ShoppingCart className="w-7 h-7 text-white group-hover:text-orange-500 transition" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-12 right-0 bg-[#1e293b] z-50 shadow-lg rounded-lg w-48 p-4 lg:hidden">
          <ul className="space-y-3">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setShowMenu(false)}
                  className="block text-white hover:text-orange-500 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Cart Button Mobile */}
          <Link to="/carts" onClick={() => setShowMenu(false)} className="mt-4 flex items-center gap-2 text-white hover:text-orange-500 transition">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart</span>
            {getCartCount() > 0 && (
              <span className="ml-1 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      )}
        </div>
        </div>
      </nav>
    </header>
  );
}
