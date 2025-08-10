import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Section - Logo + Mission */}
        <div className="flex flex-col items-start max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="ShareBite Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-green-800">ShareBite</span>
          </div>
          <p className="text-gray-600 text-sm">
            ShareBite connects communities to reduce food waste and nourish lives.  
            Donate surplus food, find meals, and make a real difference—one bite at a time.
          </p>
        </div>

        {/* Right Section - Links + Social */}
        <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium">
            <Link to="/about" className="hover:text-green-700 transition">About</Link>
            <Link to="/available-foods" className="hover:text-green-700 transition">Find Food</Link>
            <Link to="/addfood" className="hover:text-green-700 transition">Donate Food</Link>
            <Link to="/contact" className="hover:text-green-700 transition">Contact</Link>
          </div>

          <div className="flex gap-4 mt-2">
            <a href="#" className="text-[#F4B400] hover:text-[#E9A800] transition" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-[#F4B400] hover:text-[#E9A800] transition" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-[#F4B400] hover:text-[#E9A800] transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ShareBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
