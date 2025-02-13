import React from "react";



const blogs = [
  {
    title: "Depression",
    subtitle: "Sadness",
    description:
      "Identifying depression can be challenging, but understanding the signs and symptoms is crucial for seeking help and support.",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FBlogs%2F021123_LS_depression_feat.jpg?alt=media&token=97ad26b0-d551-4495-8e74-a3aa700bc36d",
  },
  {
    title: "Fear",
    subtitle: "Afraid of Parents",
    description:
      "Coming out to your parents about your sexual orientation can be a deeply personal and important step in your journey of self-discovery and acceptance.",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FBlogs%2Flgb.jpg?alt=media&token=6a1a8169-4310-413e-bd42-7f33550d1ce7",
  },
  {
    title: "Toxicity",
    subtitle: "Path to Healing",
    description:
      "Being trapped in a toxic relationship can be emotionally draining and harmful to your well-being. However, there is a way out.",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FBlogs%2Ftoxic-relationship-quiz.jpg?alt=media&token=3c91f9c3-c53f-4c49-8f43-abc48300e8f55",
  },
  {
    title: "Jobs",
    subtitle: "Not Getting Jobs",
    description:
      "The job search can be frustrating and we all have gone through this phase at least once in our life.",
    image: "https://firebasestorage.googleapis.com/v0/b/support-stress-free.appspot.com/o/SupportWebImages%2FBlogs%2Fdunn-blank-cover-art.jpg?alt=media&token=ef47d438-e5a1-40cb-8571-0b70f9457db7",
  },
];

const Blogs = () => {
  return (
    <div className="mt-9 ">
    <span className="text-sky-700 p-2 border font-bold rounded-xl h-7">Some Of Our Blogs</span>
    <div className="blogs-container mt-2">
      
      <div className="blogs-slider">
        <div className="blogs-track">
          {blogs.concat(blogs).map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <h3 className="font-medium text-gray-800">{blog.title}</h3>
              <p className="subtitle">{blog.subtitle}</p>
              <p className="text-gray-800">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-sky-700 mt-4 p-2 text-white rounded-sm text-[14px]">Read More</button>
    </div>
    </div>
  
  );

};

export default Blogs;
