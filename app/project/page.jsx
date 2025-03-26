import React from "react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    description: "Developed an AI chatbot to enhance customer support efficiency.",
    image: "/projects/chatbot.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Built a scalable and secure online shopping platform.",
    image: "/projects/ecommerce.jpg",
  },
  {
    id: 3,
    title: "Cloud Management System",
    description: "Designed a cloud-based solution for managing business operations.",
    image: "/projects/cloud.jpg",
  },
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Projects</h1>
        <p className="text-gray-600 mt-2">
          Innovative IT solutions that drive success.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
