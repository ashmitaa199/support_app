import React from "react";
import { useParams } from "react-router-dom";
import bg from "../assets/bg.jpg"

const blogs = [
  {
    id: 1,
    title: "Parenting",
    content: `<section id="blog" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

            <!-- Blog Content -->
            <div class="p-6">
                <!-- Meta Info -->
                <div class="flex justify-between items-center border-b pb-4 mb-4">
                    <span class="text-sm text-gray-500">Published on February 15, 2025</span>
                    <!-- Social Icons -->
                    <div class="flex space-x-3">
                        <a href="#" class="text-blue-600 hover:text-blue-800 transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-blue-400 hover:text-blue-600 transition">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-red-500 hover:text-red-700 transition">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </div>
                </div>

                <!-- Blog Details -->
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">
                    Navigating Parenthood with Support App: A Guide to Effective Parenting in the Digital Age
                </h2>
                <p class="text-gray-700 leading-relaxed">
                    Parenthood, undoubtedly one of life's most rewarding journeys, comes with its fair share of challenges.
                    In an era dominated by digital interactions, the role of technology in parenting has become more
                    significant than ever...
                </p>

                <!-- Sections -->
                <div class="mt-6 space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">The Digital Transformation of Parenting</h3>
                        <p class="text-gray-600 mt-2">
                            Parenthood has undergone a digital transformation, and with it, the Support App has emerged
                            as a dependable ally for moms and dads worldwide...
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">Virtual Support: Video Calls Redefined</h3>
                        <p class="text-gray-600 mt-2">
                            The Support App recognizes the importance of face-to-face interactions, even in the virtual realm...
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">Call or Chat: Tailored Support at Your Fingertips</h3>
                        <p class="text-gray-600 mt-2">
                            Every parent's journey is unique, and the Support App acknowledges this diversity by offering
                            flexible support options...
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">Real-Time Parenting Assistance: Anytime, Anywhere</h3>
                        <p class="text-gray-600 mt-2">
                            Parenting doesn't follow a 9-to-5 schedule, and neither does the Support App. With 24/7 availability...
                        </p>
                    </div>
                    <div class="border-t pt-6">
                        <h3 class="text-2xl font-bold text-gray-800">Conclusion: Empowering Parents Through Technology</h3>
                        <p class="text-gray-700 mt-2">
                            In the ever-evolving landscape of parenting, the Support App emerges as a powerful tool...
                        </p>
                    </div>
                </div>
                <div class="mt-6">
                    <a href="#" class="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
                        Download the Support App
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
,
    image: bg,
  },
  {
    id: 2,
    title: "Loneliness",
    content:  `
    <p><strong>Navigating Parenthood with Support App:</strong> A Guide to <em>Effective Parenting</em> in the Digital Age.</p>
    <p>Parenthood, undoubtedly one of life's <b>most rewarding journeys</b>, comes with its fair share of challenges.</p>
    <p>In an era dominated by digital interactions, the role of <i>technology</i> in parenting has become more significant than ever.</p>
    <ul>
      <li><b>Video Call Support</b> – Connect with experts.</li>
      <li><i>24/7 Assistance</i> – Get help anytime.</li>
      <li><u>Real-Time Chat</u> – Flexible support options.</li>
    </ul>
    <p>Download the <b>Support App</b> today and embrace a new era of parenting!</p>
  `,
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
      <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;
