import './App.css';
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import BeAListener from "./components/BeAListener";
import Experts from "./components/Experts";
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo1.jpg";
import support from "./assets/support_logo.jpg";
import Features from "./components/Features";
import Pricing from './components/Pricing';
import FullBlogs from './components/FullBlogs';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [rotatingText, setRotatingText] = useState("Story");
  const textOptions = ["Story", "People", "Support"];
  const downloadRef = useRef(null);
  const mobileDownloadRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <nav className="bg-white shadow-lg w-full top-0 z-50">
        <div className="flex justify-between items-center h-16 px-3">
          {/* Logo*/}
          <div className="flex items-center">
            <img src={logo} className="h-16 cursor-pointer" alt="Logo" />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sky-700 font-medium">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/experts" className="hover:text-blue-500">Experts</Link>
            <Link to="/all-blogs" className="hover:text-blue-500">Blog</Link>
            <Link to="/be-a-listener" className="hover:text-blue-500">Be a Listener</Link>
            <Link to="/about-us" className="hover:text-blue-500">About Us</Link>
          </div>

          {/* Download Button Dropdown (Hidden on small screens) */}
          <div className="relative hidden md:block" ref={downloadRef}>
            <button
              onClick={() => setDownloadOpen(!downloadOpen)}
              className="border-[1.5px] px-4 py-1 rounded-md border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
            >
              Download Now
            </button>

            {/* Dropdown Options */}
            {downloadOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                    alt="Google Play" className="w-40" />
                </a>
                <a href="#" className="block">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store" className="w-40" />
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-sky-700">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white w-full py-4 flex flex-col items-center space-y-4 text-sky-700 font-semibold">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/experts" className="hover:text-blue-500">Experts</Link>
            <Link to="/all-blogs" className="hover:text-blue-500">Blog</Link>
            <Link to="/be-a-listener" className="hover:text-blue-500">Be a Listener</Link>
            <Link to="/about-us" className="hover:text-blue-500">About Us</Link>
            <button
              onClick={() => setDownloadOpen(!downloadOpen)}
              className="border-[1.5px] px-4 py-1 rounded-md border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
            >
              Download Now
            </button>
            {downloadOpen && (
              <div className="absolute mt-60 bg-white border border-gray-200 rounded-md shadow-lg text-center">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                    alt="Google Play" className="w-40" />
                </a>
                <a href="#" className="block">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store" className="w-40" />
                </a>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Define Routes Here */}
      <Routes>
        <Route path="/" element={
          <>
            <section className="h-screen flex flex-col md:mt-0 md:flex-row items-center justify-center md:justify-between bg-gradient-to-b from-blue-50 to-[#9ccae5] text-white text-center md:text-left px-6 md:px-16 md:gap-2">
              <div className="w-full md:w-1/2 md:-mt-36">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Real <span className="text-sky-700">{rotatingText}</span>
                </h1>
                <p className="text-sm italic mt-4 text-sky-700">
                  "Supporting Minds, Uplifting Hearts"
                </p>
                <p className="mt-6 text-gray-600">
                  "Feeling down? Let’s turn those blues into a brighter hue—reach out and let’s talk.
                  Sometimes, the best support starts with just one conversation."
                </p>
              </div>
              <div className="w-full md:w-1/2 md:-mt-28 flex justify-center md:justify-end mt-10">
                <img src={support} className="w-2/3 md:w-80 max-w-xs md:max-w-none" alt="Support"/>
              </div>
            </section>
            <Features />
            <Services />
            <Pricing />
            <Blogs />
            <Footer />
          </>
        } />
        <Route path="/experts" element={<Experts />} />
        <Route path="/all-blogs" element={<FullBlogs />} />
        <Route path="/be-a-listener" element={<BeAListener />}/>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      
    </>
  );
};

export default App;