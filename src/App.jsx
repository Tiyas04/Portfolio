import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes,Route ,Link } from "react-router-dom";
import { useState } from "react";

function App(){
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects"},
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dajgjkv5h/image/upload/v1752226584/bgimg_o4ib82.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 backdrop-blur-lg bg-black/40 z-10" />

      {/* Main Layout */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/10 backdrop-blur-xl shadow-md font-mono">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-5xl text-blue-100 tracking-wide font-sans-bold ">
              Tiyas
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-lg font-medium">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="relative text-white hover:text-blue-300 transition duration-300 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 hover:after:w-full after:transition-all after:duration-350"
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/50 backdrop-blur-md px-6 py-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-white hover:text-blue-300 transition"
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow overflow-y-auto scroll-smooth px-6 py-8 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-300 py-4 text-sm bg-white/10 backdrop-blur-sm shadow-inner">
          Made by Tiyas
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/ios-filled/50/hearts.png"
            alt="hearts"
            className="inline"
          />
        </footer>
      </div>
    </div>
  );
}

export default App;