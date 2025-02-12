import './App.css'

import { useState, useEffect, useRef } from "react";
import Services from "./components/Services";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo1.jpg";
import support from "./assets/support_logo.jpg"

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [rotatingText, setRotatingText] = useState("Story");
  const textOptions = ["Story", "People", "Support"];
  const downloadRef = useRef(null);

  // Rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close download dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setDownloadOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className=" flex justify-between items-center h-16 px-3">
          {/* Logo*/}
          <div className="flex items-center ">
            <img src={logo} className="h-16 cursor-pointer" alt="Logo" />
          </div>

          {/* Navigation & Download */}
          <div className="hidden md:flex items-center space-x-6 text-sky-700 font-normal">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Experts</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
            <a href="#" className="hover:text-blue-500">Be a Listener</a>
            <a href="#" className="hover:text-blue-500">About Us</a>

            {/* Download Button Dropdown */}
            <div className="relative" ref={downloadRef}>
              <button
                onClick={() => setDownloadOpen(!downloadOpen)}
                className="border-[1.5px] px-4 py-1 rounded-md border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
              >
                Download Now
              </button>

              {/* Dropdown Options */}
              {downloadOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg ">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-[14px]"
                  >
                    📱for Android
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-[14px]"
                  >
                    🍏 for iOS
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-500">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white w-full py-4 flex flex-col items-center space-y-4 text-sky-700 font-semibold">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Experts</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
            <a href="#" className="hover:text-blue-500">Be a Listener</a>
            <a href="#" className="hover:text-blue-500">About Us</a>

            {/* Mobile Download Dropdown */}
            <div className="relative" ref={downloadRef}>
              <button
                onClick={() => setDownloadOpen(!downloadOpen)}
                className="border-[1.5px] px-4 py-1 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Download Now
              </button>
              {downloadOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    📱 Download for Android
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    🍏 Download for iOS
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section className="h-screen flex flex-col mt-7 md:mt-0 md:flex-row items-center justify-center md:justify-between bg-gradient-to-b from-sky-700 to-blue-200 text-white text-center md:text-left px-6 md:px-16 md:gap-2">
  {/* Left Side - Text Content */}
  <div className="w-full md:w-1/2">
    <h1 className="text-3xl md:text-5xl font-bold">
      Real <span className="text-black">{rotatingText}</span>
    </h1>
    <p className="text-lg italic mt-4">
      "Supporting Minds, Uplifting Hearts"
    </p>
    <p className="mt-6 text-gray-200">
      "Feeling down? Let’s turn those blues into a brighter hue—reach out and let’s talk.
      Sometimes, the best support starts with just one conversation."
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
    <img src={support} className="w-2/3 md:w-80 max-w-xs md:max-w-none" alt="Support"/>
  </div>
</section>


      <section className="py-4 px-6">
      <div className="text-center">
        <span className="bg-white px-4 py-1 rounded-full shadow-sm text-sky-700 font-semibold">
          🔆 Features
        </span>
        <h2 className="text-xl font-bold mt-4 text-sky-700">What Makes Support App Different?</h2>
        <p className="text-lg text-gray-600 mt-2 font-semibold">
          A product of <span className="text-sky-700 text-[20px]">NEXUSCARE TECH SERVICES PVT LTD</span>
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center ">
          <div className="text-blue-500 text-3xl mb-4">📚</div>
          <h3 className="font-bold text-lg text-sky-700">Anonymous</h3>
          <p className="text-gray-600 mt-2">
            The Support App is 100% anonymous for users. Experts can never know who they are talking to on the Support App.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-md shadow-sky-300 p-6 text-center">
          <div className="text-red-500 text-3xl mb-4">💬</div>
          <h3 className="font-bold text-lg text-sky-700">Live Session</h3>
          <p className="text-gray-600 mt-2">
            Support App is an emotional wellness platform where you can freely talk to experts about your feelings in private over chat, call, or video sessions.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-purple-500 text-3xl mb-4">🔒</div>
          <h3 className="font-bold text-lg text-sky-700">100% Privacy</h3>
          <p className="text-gray-600 mt-2">
            Your sensitive information is fully safe and secure, and you can feel comfortable sharing it with listeners.
          </p>
        </div>
      </div>
    </section>
    <div>
      <Services/>
    </div>

    <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center">Pricing Details</h2>
        <p class="text-center text-gray-500 mt-2">Find the Right Option for You</p>

        <div class="grid md:grid-cols-3 gap-6 mt-10">
            
          
            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="text-xl font-bold">Chat</h3>
                <p class="text-gray-700 text-lg font-medium mt-2">₹6 per minute</p>
                <p class="text-gray-500 mt-4">
                    Engage in meaningful text conversations with our qualified experts. Whether you need someone to talk to, seek advice, or simply vent, our chat service is available to provide you with the support you need.
                </p>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700">
                    Start Chat
                </button>
            </div>

           
            <div class="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-600 relative">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-md">
                    Most Popular
                </span>
                <h3 class="text-xl font-bold">Audio Call</h3>
                <p class="text-gray-700 text-lg font-medium mt-2">₹6 per minute</p>
                <p class="text-gray-500 mt-4">
                    Connect with our experts through voice calls, allowing for a more personal and interactive experience. Discuss your concerns, share your thoughts, and receive real-time verbal feedback.
                </p>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700">
                    Start Call
                </button>
            </div>

           
            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="text-xl font-bold">Video Call</h3>
                <p class="text-gray-700 text-lg font-medium mt-2">₹18 per minute</p>
                <p class="text-gray-500 mt-4">
                    For those who prefer face-to-face communication, our video call service offers a more intimate and empathetic way to connect.
                </p>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700">
                    Start Video
                </button>
            </div>

        </div>
    </div>
  

    </>
  );
};

export default App;


