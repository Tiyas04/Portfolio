function Skills() {
  const skills = [
    {
      title: "HTML",
      desc: "HyperText Markup Language",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      desc: "Cascading Style Sheets",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "JavaScript",
      desc: "A programming language for the web",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "TailwindCSS",
      desc: "A utility-first CSS framework",
      imageurl:
        "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
    },
    {
      title: "React",
      desc: "A JavaScript library for building UIs",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "NextJS",
      desc: "A React framework for production",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Firebase",
      desc: "A platform for building web and mobile apps",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      title: "Express",
      desc: "A Node.js web application framework",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongoose",
      desc: "ODM library for MongoDB & Node.js",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
    },
    {
      title: "MongoDB",
      desc: "A NoSQL database for modern applications",
      imageurl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section className="text-white min-h-screen px-4 py-12 sm:px-6 md:px-10">
      <h1 className="text-4xl sm:text-6xl font-mono font-semibold mb-8 text-center">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ title, desc, imageurl }) => (
          <section
            key={title}
            className="bg-black/30 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl mt-4 p-4 shadow-lg">
              <img className="w-24 h-24" src={imageurl} alt={title} />
            </div>
            <div className="rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-blue-300 mb-2">
                {title}
              </h2>
              <p className="text-gray-300">{desc}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
