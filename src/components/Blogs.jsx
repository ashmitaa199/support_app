import React from "react";


const blogs = [
  {
    title: "Depression",
    subtitle: "Sadness",
    description:
      "Identifying depression can be challenging, but understanding the signs and symptoms is crucial for seeking help and support.",
    image: "path_to_depression_image",
  },
  {
    title: "Fear",
    subtitle: "Afraid of Parents",
    description:
      "Coming out to your parents about your sexual orientation can be a deeply personal and important step in your journey of self-discovery and acceptance.",
    image: "path_to_fear_image",
  },
  {
    title: "Toxicity",
    subtitle: "Path to Healing",
    description:
      "Being trapped in a toxic relationship can be emotionally draining and harmful to your well-being. However, there is a way out.",
    image: "path_to_toxicity_image",
  },
  {
    title: "Jobs",
    subtitle: "Not Getting Jobs",
    description:
      "The job search can be frustrating and we all have gone through this phase at least once in our life.",
    image: "path_to_jobs_image",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2>Some Of Our Blogs</h2>
      <div className="blogs-slider">
        <div className="blogs-track">
          {blogs.concat(blogs).map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p className="subtitle">{blog.subtitle}</p>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
};

export default Blogs;
