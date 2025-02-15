import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Parenting",
    description:
      "Parenthood, undoubtedly one of life’s most rewarding journeys, comes with its fair share of challenges.",
    content: "This is the full blog content about parenting. Here you can describe parenting challenges and solutions...",
    image: "https://via.placeholder.com/400x200",
    overlayText: "The Creative Adult is The Child Who Survived",
  },
  {
    id: 2,
    title: "Loneliness",
    description:
      "Unlocking Clarity and Connection: Navigating Loneliness with the help of Support App.",
    content: "This is the full blog content about loneliness. It explains how loneliness affects mental health...",
    image: "https://via.placeholder.com/400x200",
    overlayText: "Feeling Isolated, Lonely?",
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
        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
        >
          Read More
        </Link>
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
