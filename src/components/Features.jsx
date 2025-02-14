import React, { useState, useEffect } from 'react';

const Features = () => {
  // State to track the current card index
  const [currentCard, setCurrentCard] = useState(0);

  // Array of features data
  const features = [
    {
      title: "Anonymous",
      description: "The Support App is 100% anonymous for users. Experts can never know who they are talking to on the Support App.",
      image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2Flayers.png?alt=media&token=86995e36-17d3-46b4-95b7-7bfedd151367"
    },
    {
      title: "Live Session",
      description: "Support App is an emotional wellness platform where you can freely talk to experts about your feelings in private over chat, call, or video sessions.",
      image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2Fspeak.png?alt=media&token=69eea055-5d06-476e-90dc-bc209229ee01"
    },
    {
      title: "100% Privacy",
      description: "Your sensitive information is fully safe and secure, and you can feel comfortable sharing it with listeners.",
      image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FIcons%2Flock.png?alt=media&token=8bea5672-fdd3-4da7-a5af-01e00daec5be"
    }
  ];

  // Effect to automatically rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prevCard => (prevCard + 1) % features.length);  // Rotate through the cards
    }, 5000);

    return () => clearInterval(interval);  // Cleanup on component unmount
  }, [features.length]);

  // Function to go to the next card
  const nextCard = () => {
    setCurrentCard((currentCard + 1) % features.length);
  };

  // Function to go to the previous card
  const prevCard = () => {
    setCurrentCard((currentCard - 1 + features.length) % features.length);
  };

  return (
    <section className="py-6 px-6">
      <div className="text-center">
        <span className="bg-white px-4 p-2 rounded-full shadow-md text-sky-700 font-semibold">
          🔆 Features
        </span>
        <h2 className="text-sm font-bold mt-4 text-sky-700">What Makes Support App Different?</h2>
        <p className="text-sm text-gray-600 mt-2 font-semibold">
          A product of <span className="text-sky-700 text-[12px]">NEXUSCARE TECH SERVICES PVT. LTD. </span>
        </p>
      </div>

      <div className="mt-12 relative">
        {/* Card container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-xs">
          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-500 ease-in-out 
                          ${index === currentCard ? "block" : "hidden md:block"} 
                          ${index !== currentCard ? "md:transform md:scale-95" : ""}`}
            >
              <div className="featured-img mb-3 w-[50px] mx-auto">
                <img className="avatar-sm" src={feature.image} alt={feature.title} />
              </div>
              <h3 className="font-bold text-lg text-sky-700">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Arrow buttons for manual card navigation */}
        <button
          onClick={prevCard}
          className="md:hidden absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-700 text-white p-2 rounded-full focus:outline-none"
        >
          &#60;
        </button>
        <button
          onClick={nextCard}
          className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-700 text-white p-2 rounded-full focus:outline-none"
        >
          &#62;
        </button>
      </div>
    </section>
  );
};

export default Features;
