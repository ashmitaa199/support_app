import React from "react";

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
  return (
    <section className="bg-gray-100 py-5">
      <div className="text-center mb-8">
        <h2 className="text-[16px] font-bold text-sky-700">Experience Our Services</h2>
        <p className="text-gray-500 text-[10px]">Platform—Where Your Success Becomes Our Story</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 text-gray-700 rounded-xl p-6 shadow-xl shadow-[#9ccae5] transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4 ">
              <img src={service.image} alt={service.title} className="w-14 h-14 rounded-full" />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900">{service.title}</h3>
            <p className="text-[13px] mt-2 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
