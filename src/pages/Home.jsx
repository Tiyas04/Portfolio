function Home() {
  return (
    <div className="text-white min-h-screen px-4 py-8 sm:px-6 md:px-10">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <aside className="text-center md:text-left w-full md:max-w-xl space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Welcome...
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300">
            On this end you have{" "}
            <span className="text-blue-300 font-semibold">Tiyas</span>, a
            passionate coder and developer.
          </p>
          <ul className="flex justify-center md:justify-start space-x-6 pt-4">
            <li>
              <a
                href="https://www.instagram.com/tiyas__004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226605/instagram_x5xdrv.png"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tiyas04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226624/github_hfgzs0.png"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tiyas-mandal-a2a014343"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226606/linkedin_ahufts.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Tiyas__004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226607/x_b3bu5k.png"
                  alt="x"
                />
              </a>
            </li>
          </ul>
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1-4XEPomycC_PWC5_nmpbOnUnK1Kvl9yU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg backdrop-blur-md border border-white/10"
            >
              GET RESUME
            </a>
          </div>
        </aside>

        {/* Code Block */}
        <aside className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-6 w-full shadow-lg space-y-4">
          <div className="text-white font-mono text-xs sm:text-sm border border-white/10 rounded-xl px-3 py-1 inline-block shadow">
            Tiyas.info
          </div>
          <pre className="text-white font-mono text-xs sm:text-sm whitespace-pre-wrap overflow-x-auto">
            {`const developer = {
  name: 'Tiyas',
  skills: ['tailwindcss','react','nextjs',
            'firebase','express','mongodb'],
  passion: ['code', 'travel', 'enjoy'],
  isHardWorking: true,
  isPassionate: true,
  hireable: function () {
    return ( this.isHardWorking && 
              this.isPassionate && 
              this.skills.length >= 5
    );
  }
};`}
          </pre>
        </aside>
      </div>

      {/* About Me Section */}

      <h1 className="text-3xl font-bold text-center mt-12 mb-12">About Me</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
        <section className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-2 w-full md:w-1/2 shadow-lg">
          <img
            className="h-72 mx-auto rounded-2xl "
            src="https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226506/profilephoto_ptfjkv.jpg"
            alt="Tiyas"
          />
        </section>
        <section className="w-full space-y-6">
          <div>
            <h2 className="cursor-pointer text-xl font-semibold text-blue-400 ">
              Who am I?
            </h2>

            <p className="text-gray-300 mt-2">
              Hi there, I am Tiyas, a passionate coder and developer working
              with his skills and looking for better opportunities as always.
            </p>
          </div>

          <div>
            <h2 className="cursor-pointer text-xl font-semibold text-blue-400 ">
              Where am I from?
            </h2>

            <p className="text-gray-300 mt-2">
              A professional web developer from Bengal and currently pursuing B.
              Tech from NIT Rourkela.
            </p>
          </div>

          <div>
            <h2 className="cursor-pointer text-xl font-semibold text-blue-400 ">
              What do I do?
            </h2>

            <p className="text-gray-300 mt-2">
              Develop, debug, and deploy websites as well as a hackathon
              enthusiast. Love to work on real-life problems.
            </p>
          </div>
        </section>
      </div>

      {/* Education Section */}
      <div className="w-full mt-12 space-y-6">
        <h1 className="text-4xl font-bold text-center mb-12">Education</h1>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">
            B. Tech Degree
          </h2>
          <p className="text-gray-300">
            National Institute Of Technology, Rourkela
          </p>
          <p className="text-gray-400">2024 - Present</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">
            Higher Secondary Education
          </h2>
          <p className="text-gray-300">Bankura Zilla School, West Bengal</p>
          <p className="text-gray-400">2022 - 2024</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">
            Secondary Education
          </h2>
          <p className="text-gray-300">Bankura Zilla School, West Bengal</p>
          <p className="text-gray-400">2011 - 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
