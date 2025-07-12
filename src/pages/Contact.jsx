import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";

function Contact() {
  return (
    <div className="py-16 px-6 md:px-12 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white font-mono">
        Contact Me
      </h2>

      <section className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        {/* Contact Info */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 w-full max-w-lg shadow-xl border border-gray-600 space-y-5 text-white">
          <p className="text-lg text-center">
            I'm always open to discussing new projects or opportunities.
          </p>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span>Bankura, West Bengal, India</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:mandaltiyas2410@gmail.com"
              className="hover:text-blue-300 transition-colors break-all"
            >
              mandaltiyas2410@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>+91 9851704362</span>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5" />
            <a
              href="https://www.linkedin.com/in/tiyas-mandal-a2a014343"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors break-all"
            >
              linkedin.com/in/tiyas-mandal-a2a014343
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Instagram className="w-5 h-5" />
            <a
              href="https://www.instagram.com/tiyas__004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors break-all"
            >
              instagram.com/tiyas__004
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 w-full max-w-lg shadow-xl border border-gray-600 text-white">
          <form action="">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-900 text-white p-3 cursor-pointer rounded hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
