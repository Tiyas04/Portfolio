import { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("personal");

  const personalProjects = [
    {
      title: "Rohit Sharma Article",
      description: "A blog article about Rohit Sharma's career.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752266703/Screenshot_2025-07-12_021350_comfvr.png",
      liveUrl: "https://tiyas04.github.io/Webwiz-Induction/",
      githubUrl: "https://github.com/Tiyas04/Webwiz-Induction",
    },
    {
      title: "Tic-Tac-Toe",
      description: "A simple Tic-Tac-Toe game built with React.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752266975/Screenshot_2025-07-12_021916_angzoo.png",
      liveUrl: "https://tiyas04.github.io/Tic-Tac-Toe-Game/",
      githubUrl: "https://github.com/Tiyas04/Tic-Tac-Toe-Game",
    },
    {
      title: "Music Player",
      description: "A music player application with a sleek interface.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267141/Screenshot_2025-07-12_022153_avmiup.png",
      liveUrl: "https://tiyas04.github.io/Music-player/",
      githubUrl: "https://github.com/Tiyas04/Music-player",
    },
    {
      title: "CinePCX",
      description:
        "Movie discovery platform that allows users to explore and find information about their favorite films.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267865/Screenshot_2025-06-18_110721_yfhysd.png",
      liveUrl: "https://search-movie-web-app.vercel.app/",
      githubUrl: "https://github.com/Tiyas04/Search-Movie-Web-App",
    },
    {
      title: "Portfolio",
      description: "My personal portfolio showcasing my skills and projects.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752268065/Screenshot_2025-07-12_023725_qi3a4j.png",
      liveUrl: "https://tiyas.vercel.app",
      githubUrl: "https://github.com/Tiyas04/Portfolio",
    },
  ];

  const collabProjects = [
    {
      title: "HectoClash",
      description:
        "Battle game where players can practice and improve their skills in a dynamic environment.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267376/Screenshot_2025-07-12_022554_kpulmh.png",
      liveUrl: "https://hackfest2025-project.vercel.app/",
      githubUrl: "https://github.com/Tiyas04/HectoClash",
    },
    {
      title: "CRM Dashboard",
      description: "A CRM dashboard for managing customer relationships.",
      imageUrl:
        "https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267605/Screenshot_2025-07-12_022943_itwdbn.png",
      liveUrl: "https://ilnb-hackathon.vercel.app/",
      githubUrl: "https://github.com/Tiyas04/ILNB-Hackathon",
    },
  ];

  const renderProject = (data) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((e, index) => (
        <div
          key={index}
          className="bg-black/30 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={e.imageUrl}
            alt={e.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {e.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{e.description}</p>
            </div>
            <div className="mt-auto flex space-x-4">
              <a
                href={e.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-950 hover:bg-gradient-to-br px-4 py-2 rounded-md text-sm transition"
              >
                Live
              </a>
              <a
                href={e.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-950 hover:bg-gradient-to-br px-4 py-2 rounded-md text-sm transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-16 px-4 md:px-12 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 font-mono">
        My Projects
      </h2>

      {/* Toggle Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-5 py-2 rounded-2xl cursor-pointer transition ${
            activeTab === "personal"
              ? "bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 hover:bg-gradient-to-br text-white"
              : "bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br text-gray-300"
          }`}
        >
          Personal Projects
        </button>
        <button
          onClick={() => setActiveTab("collab")}
          className={`px-5 py-2 rounded-2xl cursor-pointer transition ${
            activeTab === "collab"
              ? "bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 hover:bg-gradient-to-br text-white"
              : "bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br text-gray-300"
          }`}
        >
          Collaborative Projects
        </button>
      </div>

      {/* Rendered Projects */}
      {activeTab === "personal"
        ? renderProject(personalProjects)
        : renderProject(collabProjects)}
    </div>
  );
}

export default Projects;
