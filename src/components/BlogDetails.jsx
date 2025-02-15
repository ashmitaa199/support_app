import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Parenting",
    content: "Navigating Parenthood with Support App: A Guide to Effective Parenting in the Digital Age Parenthood, undoubtedly one of life's most rewarding journeys, comes with its fair share of challenges. In an era dominated by digital interactions, the role of technology in parenting has become more significant than ever. Enter the Support App, a revolutionary tool designed to provide invaluable assistance and guidance to parents, ensuring they can navigate the complexities of raising children with confidence and clarity.The Digital Transformation of ParentingParenthood has undergone a digital transformation, and with it, the Support App has emerged as a dependable ally for moms and dads worldwide. This app introduces innovative features like video call support, call or chat support, and a unique focus on clarity in video calls, bringing a new dimension to parenting assistance.Virtual Support: Video Calls Redefined The Support App recognizes the importance of face-to-face interactions, even in the virtual realm. Video call support bridges the gap between physical distance and emotional connection, allowing parents to seek advice, share experiences, and receive guidance from parenting experts—all in real-time. The clarity in video calls ensures that the nuances of non-verbal communication are not lost, providing a more comprehensive support experience. Call or Chat: Tailored Support at Your Fingertips Every parent's journey is unique, and the Support App acknowledges this diversity by offering flexible support options. Whether you prefer the immediacy of a call or the convenience of a chat, the app is designed to cater to your specific needs. This versatility ensures that parents can access support in a way that aligns with their individual preferences and schedules. Clarity in Video Calls: A Window to Understanding Parenting often involves complex situations that demand a nuanced understanding. The Support App's emphasis on clarity in video calls enables parents to communicate effectively with support professionals. Visual cues, facial expressions, and body language become integral elements in these interactions, fostering a deeper level of understanding and guidance. Real-Time Parenting Assistance: Anytime, Anywhere Parenting doesn't follow a 9-to-5 schedule, and neither does the Support App. With 24/7 availability, parents can access real-time assistance whenever they need it. Be it a late-night feeding dilemma or an early morning tantrum, the app ensures that support is just a call or chat away, providing peace of mind to parents. Conclusion: Empowering Parents Through Technology with “Support App” In the ever-evolving landscape of parenting, the Support App emerges as a powerful tool that harnesses the capabilities of technology to empower parents. Video call support, call or chat options, and clarity in video calls redefine the way parents seek guidance, fostering a sense of community and assurance in the challenging yet rewarding journey of parenthood. Download the Support App today and embrace a new era of parenting support—where technology meets compassion for the well-being of both parents and children.",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 2,
    title: "Loneliness",
    content: "This is the full blog content about loneliness...",
    image: "https://via.placeholder.com/400x200",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500">Blog not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg mb-4" />
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
