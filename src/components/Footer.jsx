import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Brand + Mission */}
        <div className="lg:w-2/5">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="ShareBite Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-green-800">ShareBite</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            ShareBite connects communities to reduce food waste and nourish
            lives. Donate surplus food, find meals, and make a real
            difference—one bite at a time.
          </p>
        </div>

        {/* Navigation + Quick Links + Social Media */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-green-700 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-green-700 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/available-foods"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-green-700 transition"
                >
                  Find Food
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-green-700 transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-green-700 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-green-700 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-green-700 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Follow Us
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay connected and join our community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full text-green-700 hover:bg-green-200 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} ShareBite. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with ❤️ by the ShareBite Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
