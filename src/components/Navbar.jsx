import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
    <div className=" flex justify-between items-center h-16 px-3">
      {/* Logo*/}
      <div className="flex items-center ">
        <img src={logo} className="h-16 cursor-pointer" alt="Logo" />
      </div>

      {/* Navigation & Download */}
      <div className="hidden md:flex items-center space-x-6 text-sky-700 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/experts" className="hover:text-blue-500">Experts</Link>
        <Link to="/blog" className="hover:text-blue-500">Blog</Link>
        <Link to="/be-a-listener" className="hover:text-blue-500">Be a Listener</Link>
        <Link to="/about-us" className="hover:text-blue-500">About Us</Link>

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
        <Link to="/blog" className="hover:text-blue-500">Blog</Link>
        <Link to="/be-a-listener" className="hover:text-blue-500">Be a Listener</Link>
        <Link to="/about-us" className="hover:text-blue-500">About Us</Link>

        {/* Mobile Download Dropdown */}
        <div className="relative" ref={downloadRef}>
          <button
            onClick={() => setDownloadOpen(!downloadOpen)}
            className="border-[1.5px] px-4 py-1 rounded-md border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
          >
            Download Now
          </button>
          {downloadOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              
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
      </div>
    )}
  </nav>
      
   
  )
}

export default Navbar
