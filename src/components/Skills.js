import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" />, level: 85 },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: 80 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-3xl" />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" />, level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 mt-1">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}