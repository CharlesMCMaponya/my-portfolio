import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPython, FaServer, FaShieldAlt, FaDocker } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Cybersecurity Vulnerability Scanner",
      description: "Python-based tool to scan for vulnerabilities, check CVEs, and send alerts via Slack",
      tech: ["Python", "Cybersecurity", "CVE"],
      github: "https://github.com/CharlesMCMaponya/Cybersecurity-Vulnerability-Scanner-",
      live: null,
      icon: <FaShieldAlt className="text-4xl mx-auto text-gray-700" />
    },
    {
      title: "Kubernetes DevOps Automator",
      description: "Automation tool for streamlined deployments, scaling, and monitoring in DevOps workflows",
      tech: ["Python", "Bash", "Kubernetes"],
      github: "https://github.com/CharlesMCMaponya/Kubernetes-DevOps-Automator",
      live: null,
      icon: <FaDocker className="text-4xl mx-auto text-gray-700" />
    },
    {
      title: "Server Health Check System",
      description: "Python tool for monitoring server performance and simulating Active Directory checks",
      tech: ["Python", "Monitoring", "Active Directory"],
      github: "https://github.com/CharlesMCMaponya/Server-Health-Check-System",
      live: null,
      icon: <FaServer className="text-4xl mx-auto text-gray-700" />
    },
    {
      title: "PC Cleaner Organizer",
      description: "Python script that automates file organization and cleans temp files to optimize storage",
      tech: ["Python", "Automation", "File Management"],
      github: "https://github.com/CharlesMCMaponya/PC-Cleaner-Organizer",
      live: null,
      icon: <FaPython className="text-4xl mx-auto text-gray-700" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-100 w-full h-48 flex items-center justify-center">
                {project.icon}
              </div>
              
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
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="flex items-center text-gray-700 hover:text-blue-600 transition"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA to view all projects */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/CharlesMCMaponya" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}