"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Online Repair Service Management System",
    description:
      "Developed using HTML, CSS, JavaScript, and PHP for the backend.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    demoLink: "https://your-online-repair-service.com",
    githubLink: "https://github.com/your-username/online-repair-service",
  },
  {
    title: "Hotel Booking Website",
    description:
      "Built using HTML, CSS, JavaScript, PHP, and AJAX for the backend.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "AJAX"],
    demoLink: "https://your-hotel-booking-website.com",
    githubLink: "https://github.com/your-username/hotel-booking-website",
  },
  {
    title: "Drug Discovery with Graph Neural Network",
    description:
      "Research project involving Graph Neural Networks for drug discovery.",
    tags: ["Graph Neural Network", "Machine Learning", "Python"],
    demoLink: "", // No demo link for research project
    githubLink: "https://github.com/your-username/drug-discovery-gnn",
  },
  // Add more projects here
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="min-h-screen py-12 bg-gray">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-accent">
            My Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="flex flex-col p-6 bg-gray-200 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-amber-300">
                Projects
              </h3>
              <div className="flex flex-col space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedProject(index)}
                    className={`p-4 rounded-md cursor-pointer ${
                      selectedProject === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center mr-2">
                        {index + 1}
                      </div>
                      <span>{project.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 text-accent">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {projects[selectedProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[selectedProject].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <a
                  href={projects[selectedProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-300"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                {projects[selectedProject].demoLink && (
                  <a
                    href={projects[selectedProject].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
