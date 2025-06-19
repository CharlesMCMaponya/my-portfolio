import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaLinux, FaShieldAlt, FaServer, FaDocker, FaGitAlt, FaTerminal,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiKubernetes, SiFirebase, 
  SiPostgresql, SiJira
} from 'react-icons/si';

export default function Skills() {
  const coreSkills = [
    { name: "Python", icon: <FaPython className="text-blue-600 text-2xl" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" />, level: 85 },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, level: 75 },
    { name: "Bash Scripting", icon: <FaTerminal className="text-gray-800 text-2xl" />, level: 85 },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-2xl" />, level: 75 },
  ];

  const secondarySkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-2xl" />, level: 85 },
    { name: "Docker", icon: <FaDocker className="text-blue-500 text-2xl" />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" />, level: 70 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-2xl" />, level: 65 },
    { name: "Azure", icon: <FaMicrosoft className="text-sky-500 text-2xl" />, level: 70 },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" />, level: 65 },
    { name: "Linux", icon: <FaLinux className="text-yellow-700 text-2xl" />, level: 90 },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" />, level: 85 },
  ];

  const expertise = [
    "Cybersecurity", "Vulnerability Scanning", "CVE Analysis", 
    "Server Security", "Automation", "DevOps", 
    "CTF Challenges", "System Hardening", "Active Directory",
    "Server Monitoring", "Compliance", "Incident Response"
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Core Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreSkills.map((skill, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-md font-medium mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Additional Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {secondarySkills.map((skill, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-md font-medium mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-700">Cybersecurity Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {expertise.map((skill, i) => (
              <span 
                key={i} 
                className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transition hover:bg-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}