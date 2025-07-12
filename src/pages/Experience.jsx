import React, { useState } from "react";
import { Briefcase, Users } from "lucide-react";

function Experience() {
  const [activeTab, setActiveTab] = useState("developer");

  const developerExperience = [
    {
      role: "Web Developer",
      company: "Webwiz, NIT Rourkela",
      duration: "January 2025 - Present",
      description:
        "Developing and maintaining web applications using React and Node.js. Collaborating with designers to create user-friendly interfaces.",
    },
    {
      role: "Web Developer",
      company: "Self-employed",
      duration: "January 2025 - Present",
      description:
        "Building and deploying web applications for various clients using modern web technologies.",
    },
  ];

  const volunteerExperience = [
    {
      role: "Organizer",
      company: "HackOdisha 5.0",
      Work:"Worked in sponsorship and publicity team along with community management.",
      duration: "May 2025 - Present",
      description:
        "Coordinating and managing hackathon events, ensuring smooth execution and participant engagement.",
    },
  ];

  const renderExperience = (data) => (
    <div className="flex flex-col lg:flex-row gap-6">
      {data.map((exp, index) => (
        <div
          key={index}
          className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-gray-600 shadow-md flex-1 hover:scale-105 transition-all ease-in-out duration-300"
        >
          <h4 className="text-xl font-semibold">{exp.role}</h4>
          <p className="text-sm text-gray-300">{exp.company}</p>
        {exp.Work && <p className="text-sm text-gray-300">{exp.Work}</p>}
          <p className="text-sm text-gray-400 italic">{exp.duration}</p>
          <p className="mt-3 text-gray-200">{exp.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-16 px-6 md:px-12 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-mono">
        Experience
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("developer")}
          className={`flex items-center gap-2 px-5 py-2 rounded-2xl transition cursor-pointer ${
            activeTab === "developer"
              ? "bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 hover:bg-gradient-to-br text-white"
              : "bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br text-gray-300"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          Developer
        </button>

        <button
          onClick={() => setActiveTab("volunteer")}
          className={`flex items-center gap-2 px-5 py-2 rounded-2xl transition cursor-pointer ${
            activeTab === "volunteer"
              ? "bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 hover:bg-gradient-to-br text-white"
              : "bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br text-gray-300"
          }`}
        >
          <Users className="w-5 h-5" />
          Volunteer
        </button>
      </div>

      {/* Content */}
      <div className="transition-all duration-300">
        {activeTab === "developer"
          ? renderExperience(developerExperience)
          : renderExperience(volunteerExperience)}
      </div>
    </div>
  );
}

export default Experience;

