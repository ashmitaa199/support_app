import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-gray-200">
      {/* Top Section */}
      <div className="py-10 text-center px-5 border-8">
        <div className="text-xl font-semibold max-w-4xl mx-auto leading-tight">
          Support App has helped thousands of people just like you get over their insecurities and find confidence—
          whether by helping them with their relationship problems or by simply making them feel better about themselves.
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto py-10 px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
      {/* Left Column - Logo & Description */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-2xl font-semibold text-white">Support</h3>
        <p className="text-sm mt-4 text-gray-300">
          Navigate life's challenges with ease – whether it's a breakup, relationship hurdles, loneliness, anxiety, 
          depression, career, or family issues. Elevate your emotional well-being through the Support App.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-5">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-lg"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-pink-400 text-lg"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-lg"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-400 hover:text-red-500 text-lg"><FaYoutube /></a>
        </div>
      </div>

      {/* Middle Column - Important Links */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-xl font-semibold mb-4">Important Links</h4>
        <ul className="text-gray-400 space-y-2">
          {["FAQ's", "About Us", "Contact Us", "Refund Policy", "Privacy Policy", "Shipping Policy", "Cancellation Policy", "Terms and Conditions"].map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column - Download Buttons */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-xl font-semibold mb-4">Download</h4>
        <div className="space-y-4">
          <a href="#" className="block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
              alt="Google Play" className="w-40 mx-auto md:mx-0" />
          </a>
          <a href="#" className="block">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="App Store" className="w-40 mx-auto md:mx-0" />
          </a>
        </div>
      </div>
    </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-300 py-4 border-t border-gray-700 text-xs">
        © {new Date().getFullYear()} Support App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
