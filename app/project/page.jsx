import React from "react";

const projects = [
  {
    id: 1,
    title: "System",
    description: "Developed an Software system for a local business.",
    image: "/imageProject/project1.jpg",
  },
  {
    id: 2,
    title: "Hardware",
    description: "Repaired and upgraded hardware components for clients.",
    image: "/imageProject/project2.jpg",
  },
  {
    id: 3,
    title: "Design",
    description: "Created a modern design and user-friendly for a startup.",
    image: "/imageProject/project3.jpg",
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
