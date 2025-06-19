import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img
              src={process.env.PUBLIC_URL + "/profile.png"}
              alt="Profile"
              className="rounded-xl w-full h-64 object-cover shadow-md border-2 border-dashed"
            />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">
              Hi, I’m Charles Maponya — an IT Systems & Cybersecurity Specialist with a passion for making infrastructure secure, automated, and efficient.
              <br /><br />
              I work with Microsoft 365, Windows Server, and cybersecurity tools to build systems that are not just functional, but resilient and easy to manage. I also train others in cybersecurity best practices (CompTIA, Microsoft), bridging the gap between theory and real-world implementation.
              <br /><br />
              Whether you need help securing networks, automating system tasks, or simplifying IT operations — I’m here to deliver.
            </p>
            <p>
              When I'm not coding, I enjoy hiking, brand design, photography, and learning new technologies. I believe in clean code and user-friendly designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
