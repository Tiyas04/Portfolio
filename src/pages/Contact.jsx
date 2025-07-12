import { useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://portfolio-backend-d313.onrender.com/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
      console.error(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded bg-black/10 border border-gray-600 focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-900 text-white p-3 cursor-pointer rounded hover:opacity-90 transition"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-center mt-2">{status}</p>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
