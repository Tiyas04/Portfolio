function Projects(){
    const projects = [
        {
            title:"Rohit Sharma Artical",
            description:"A blog article about Rohit Sharma's career.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752266703/Screenshot_2025-07-12_021350_comfvr.png",
            liveUrl:"https://tiyas04.github.io/Webwiz-Induction/",
            githubUrl:"https://github.com/Tiyas04/Webwiz-Induction"
        },
        {
            title:"Tic-Tac-Toe",
            description:"A simple Tic-Tac-Toe game built with React.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752266975/Screenshot_2025-07-12_021916_angzoo.png",
            liveUrl:"https://tiyas04.github.io/Tic-Tac-Toe-Game/",
            githubUrl:"https://github.com/Tiyas04/Tic-Tac-Toe-Game"
        },
        {
            title:"Music Player",
            description:"A music player application with a sleek interface.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267141/Screenshot_2025-07-12_022153_avmiup.png",
            liveUrl:"https://tiyas04.github.io/Music-player/",
            githubUrl:"https://github.com/Tiyas04/Music-player"
        },
        {
            title:"HectoClash",
            description:"Hectoclash is an engaging battle game where players can practice and improve their skills in a dynamic environment.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267376/Screenshot_2025-07-12_022554_kpulmh.png",
            liveUrl:"https://hackfest2025-project.vercel.app/",
            githubUrl:"https://github.com/Tiyas04/HectoClash"
        },
        {
            title:"CRM Dashboard",
            description:"A CRM dashboard for managing customer relationships.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267605/Screenshot_2025-07-12_022943_itwdbn.png",
            liveUrl:"https://ilnb-hackathon.vercel.app/",
            githubUrl:"https://github.com/Tiyas04/ILNB-Hackathon"
        },
        {
            title:"CinePCX",
            description:"CinePCX is a movie discovery platform that allows users to explore and find information about their favorite films.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752267865/Screenshot_2025-06-18_110721_yfhysd.png",
            liveUrl:"https://search-movie-web-app.vercel.app/",
            githubUrl:"https://github.com/Tiyas04/Search-Movie-Web-App"
        },
        {
            title:"Portfolio",
            description:"My personal portfolio showcasing my skills and projects.",
            imageUrl:"https://res.cloudinary.com/dajgjkv5h/image/upload/v1752268065/Screenshot_2025-07-12_023725_qi3a4j.png",
            liveUrl:"https://portfolio-indol-alpha-38.vercel.app/",
            githubUrl:"https://github.com/Tiyas04/Portfolio"
        }
    ]

     return (
    <div className=" py-12 px-4 md:px-12">
      <h2 className="text-5xl font-semibold text-center mb-12 text-white font-mono">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" bg-black/30 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              </div>
              <div className="mt-auto flex space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gradient-to-tr from-blue-700 via-blue-800 to-blue-950 hover:bg-gradient-to-br px-4 py-2 rounded-md text-sm transition"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
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
    </div>
  );
}

export default Projects;