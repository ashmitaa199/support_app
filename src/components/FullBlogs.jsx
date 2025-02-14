import React from "react";

const blogs = [
  {
    id: 1,
    title: "Parenting",
    description:
      "Parenthood, undoubtedly one of life’s most rewarding journeys, comes with its fair share of challenges.",
    image: "https://via.placeholder.com/400x200",
    overlayText: "The Creative Adult is The Child Who Survived",
  },
  {
    id: 2,
    title: "Loneliness",
    description:
      "Unlocking Clarity and Connection: Navigating Loneliness with the help of Support App.",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Feeling Isolated, Lonely?",
  },
  {
    id: 3,
    title: "How to remove shyness in talking with Girls",
    description:
      "Unveiling Confidence: How the Support App Breaks the Shyness Barrier, Empowering Connections...",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Try Support App Now",
  },
  {
    id: 4,
    title: "How to overcome rejection",
    description:
      "Navigating Rejections in Love and Life: Your Guide to Clarity of mind and Emotional Support.",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Let's reject rejection.",
  },
  {
    id: 5,
    title: "How to overcome Financial crisis",
    description:
      "Navigating Financial Crisis with Support App: Clarity Live Video Calls, and Connection for a Brighter Future.",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Support Helps Financial Crisis",
  },
  {
    id: 6,
    title: "Social Injustice",
    description:
      "In a world grappling with social injustice, the fight for equality requires more than just awareness.",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Empowerment and Change",
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-48">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-start p-4">
          <p className="text-white font-semibold text-sm">{blog.overlayText}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>
        <a
          href="#"
          className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const FullBlogs = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullBlogs;
