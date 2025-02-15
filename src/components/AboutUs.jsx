import React from 'react';
import bg from "../assets/bg.jpg"

const AboutUs = () => {
  return (
    <div className="bg-sky-100 flex flex-col items-center min-h-screen">
      <section className="ml-4 mr-4 mt-4 p-5 mx-auto px-3 py-12 md:py-10 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl md:text-xl font-bold text-gray-800 -mt-7">About Us</h1>
        <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
          <strong>Support App</strong> is the first-ever anonymous, confidential, and completely free emotional support 
          platform in India that connects real people, real stories, with the power of empathy. Our non-judgmental 
          listening ear provides you an opportunity to share your story with someone who is there for you.
        </p>
        <p className="text-gray-700 text-sm md:text-sm leading-relaxed mt-4">
          Feeling lonely, broken, or sad? Want to talk to someone? Our platform allows anonymous chat, calls, and 
          video calls to get emotional support. You can connect with verified listeners anytime to share your thoughts 
          and relieve daily stress. <strong>Connect to Support – Let’s talk Anonymously.</strong>
        </p>
      </section>

      <section className="py-12 px-6 w-full text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-xl font-bold text-gray-900">
            A lonely Smile is better than a thousand tears
          </h2>
          <p className="mt-4 text-sm md:text-sm">
            We are spreading a smile around the world, one simple interaction at a time. Emotional support for those who
            need someone to talk to: We care for you, your feelings, and we are always with you to get over all the issues
            that arise in relationships and life. We also help people find their soulful self and build their relationships.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
  {/* First Image */}
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img
      src={bg}
      alt="Real People"
      className="w-[350px] h-auto object-cover"
    />
    <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
      REAL PEOPLE
    </p>
  </div>

  {/* Second Image */}
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img
      src={bg}
      alt="Real Support"
      className="w-[350px] h-auto object-cover"
    />
    <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
      REAL SUPPORT
    </p>
  </div>
</div>

      </section>

      <section class="text-center py-2">
        <h2 class="text-4xl font-bold">Meet Our Team</h2>
        <p class="text-lg mt-2">These are the people who make the magic of spreading smiles.</p>
        <button class="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Join Now</button>

        <div class="mt-4 space-y-10">
            <div>
                <h3 class="text-2xl font-semibold">Founders</h3>
                <div class="flex justify-center gap-6 mt-6">
                    <div class="text-center">
                        <img class="w-40 h-40 rounded-full mx-auto" src={bg} alt="Aditya"/>
                        <h4 class="mt-2 text-lg font-medium">Aditya</h4>
                        <p class="text-sm">Founder</p>
                    </div>
                    <div class="text-center">
                        <img class="w-40 h-40 rounded-full mx-auto" src={bg} alt="Hemangi"/>
                        <h4 class="mt-2 text-lg font-medium">Hemangi</h4>
                        <p class="text-sm">Co-Founder</p>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 class="text-2xl font-semibold">Pioneer’s Circle</h3>
                <div class="flex justify-center mt-6">
                    <div class="text-center">
                        <img class="w-40 h-40 rounded-full mx-auto" src={bg} alt="Rashika"/>
                        <h4 class="mt-2 text-lg font-medium">Rashika</h4>
                        <p class="text-sm">HR</p>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 class="text-2xl font-semibold">Human Resources Team</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 justify-center">
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Rajshree"/>
                        <h4 class="mt-2 text-lg font-medium">Rajshree</h4>
                        <p class="text-sm">Flutter Developer</p>
                    </div>
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Anant Patel"/>
                        <h4 class="mt-2 text-lg font-medium">Anant Patel</h4>
                        <p class="text-sm">Web Developer</p>
                    </div>
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Shivang"/>
                        <h4 class="mt-2 text-lg font-medium">Shivang</h4>
                        <p class="text-sm">Backend Developer</p>
                    </div>
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Member 1"/>
                        <h4 class="mt-2 text-lg font-medium">Member 1</h4>
                        <p class="text-sm">Role</p>
                    </div>
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Member 2"/>
                        <h4 class="mt-2 text-lg font-medium">Member 2</h4>
                        <p class="text-sm">Role</p>
                    </div>
                    <div class="text-center">
                        <img class="w-32 h-32 rounded-full mx-auto" src={bg} alt="Member 3"/>
                        <h4 class="mt-2 text-lg font-medium">Member 3</h4>
                        <p class="text-sm">Role</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 text-gray-900 text-center">
    <hr className='text-gray-90000'></hr>
        <h2 class="text-2xl font-bold mt-4">Support Let's Talk</h2>
        <p class=" mt-2 max-w-3xl mx-auto">
            Verified Emotional Support available from real trained people 24/7 to help you in your time of need.
            Our verified, trained professionals are here for you day and night to support you emotionally through
            any challenging situation you might be going through.
        </p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div class="p-4 bg-sky-700 text-white rounded-lg relative md:w-80">
                
                <h3 class="text-xl font-bold">Who are we</h3>
                <p class="mt-2 text-sm">Support app is an online counselling platform that provides emotional support to everyone who needs it.</p>
            </div>
            <div class="md:w-80 p-4 bg-sky-700 text-white rounded-lg relative">
                
                <h3 class="text-xl font-bold">Our Vision</h3>
                <p class="mt-2 text-sm">Our vision is to create a platform where everyone's issues can be heard non-judgmentally.</p>
            </div>
            <div class="md:w-80 p-4 bg-sky-700 text-white rounded-lg relative">
                
                <h3 class="text-xl font-bold">Our Mission</h3>
                <p class="mt-2 text-sm">Our mission is to help people worldwide get professional emotional support where they need it.</p>
            </div>
        </div>
    </section>

    </div>
  );
};

export default AboutUs;
