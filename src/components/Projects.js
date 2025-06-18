import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured online store with cart and payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasts with interactive maps",
      tech: ["JavaScript", "API Integration", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Drag-and-drop task organizer with team collaboration",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48"></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}