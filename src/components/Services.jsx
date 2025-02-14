import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "Real People",
    description:
      "We make sure that everyone who comes on the Support App is real and verified against their identity. We use the Aadhaar card as verification process. You can feel better and happier with our listeners. They have seen tough times in their lives and they can actively listen to your problems and feelings, making you feel better and happier!",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2F56209.jpg?alt=media&token=7aed8cc2-9a6c-47b2-a5af-caa3859697c4",
  },
  {
    title: "Real Support",
    description:
      "The world is full of insecurities, and the only way to get over your insecurities is to talk about them. Support App can help you do exactly that. You can talk to a listener in private over chat, call or video call. Your identity is hidden, so you'll feel free to share your deepest, darkest secrets with someone who will make you feel better—and who might even be able to help you find a good partner!",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2F5114855.jpg?alt=media&token=e929e66a-3816-4751-9b0b-9d6a807b2fef",
  },
  {
    title: "Real Story",
    description:
      "We're the first and only app that allows you to find someone who has faced the same issue as you. We've made sure that all pictures and stories on our app are real, verified, and 100% true. So if you've ever felt that there was no one out there who could understand what you're going through, this is your chance! You can share your story freely and confidently, knowing that it's being heard by people who will support you.",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2F7066574.jpg?alt=media&token=ea8fe126-0017-4f2b-9989-3cfd631ab67a",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-sky-700">Our Services</h2>
        <p className="text-gray-600 text-xs">Discover how we can help you find real support and comfort.</p>
      </div>

      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Desktop View */}
        <div className="hidden md:grid gap-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-6">
              <img src={service.image} alt={service.title} className="w-28 h-28 object-cover rounded-md shadow-md" />
              <div className="text-left">
                <h3 className="font-bold text-gray-700">{service.title}</h3>
                <p className="text-gray-600 text-xs mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={services[currentIndex].image} alt={services[currentIndex].title} className="w-28 h-28 object-cover rounded-md shadow-md" />
            <h3 className="font-bold text-gray-700 mt-4">{services[currentIndex].title}</h3>
            <p className="text-gray-600 text-xs mt-2 text-center">{services[currentIndex].description}</p>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
