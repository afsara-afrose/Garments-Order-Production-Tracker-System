import React from "react";
import { Link } from "react-router";
import logo from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <h2 className="text-xl font-bold text-white">
              GarmentTracker
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            Smart solution for managing garment production workflow,
            tracking orders, monitoring inventory, and ensuring timely delivery.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/all-product" className="hover:text-blue-400 transition">All Products</Link></li>
            <li><Link to="/about-us" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a className="hover:text-blue-500 transition">Facebook</a>
            <a className="hover:text-blue-500 transition">LinkedIn</a>
            <a className="hover:text-blue-500 transition">X</a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} GarmentTracker. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
