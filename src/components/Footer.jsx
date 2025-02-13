import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="bg-gray-800 py-10 text-center px-5">
        <h2 className="text-3xl font-bold max-w-4xl mx-auto leading-tight">
          Support App has helped thousands of people just like you get over their insecurities and find confidence—
          whether by helping them with their relationship problems or by simply making them feel better about themselves.
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
        {/* Left Column - Logo & Description */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400">Support</h3>
          <p className="text-sm mt-4 text-gray-300">
            Navigate life's challenges with ease – whether it's a breakup, relationship hurdles, loneliness, anxiety, 
            depression, career, or family issues. Elevate your emotional well-being through Support App.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-lg">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Column - Important Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Important Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">FAQ's</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Right Column - Download Buttons */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Download</h4>
          <div className="space-y-4">
            <a href="#" className="block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                alt="Google Play" className="w-40" />
            </a>
            <a href="#" className="block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="App Store" className="w-40" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Support App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
