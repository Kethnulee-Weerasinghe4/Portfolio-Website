import React from "react";
import { motion } from "framer-motion";
import { info } from "autoprefixer";

const projects = [
  {
    id: 1,
    title: "Event Booking Website",
    image: process.env.PUBLIC_URL + "/project1.png",
    github: "https://github.com/Kethnulee-Weerasinghe4/Event-Booking-Website",
  },
  {
    id: 2,
    title: "NEWS Website",
    image: process.env.PUBLIC_URL + "/project2.png",
    github: "https://github.com/Kethnulee-Weerasinghe4/NEWS-Website",
  },
  {
    id: 3,
    title: "Porsche AI Chatbot",
    image: process.env.PUBLIC_URL + "/project3.png",
    github: "https://github.com/Kethnulee-Weerasinghe4/Porsche-AI-Chatbot",
  },
  {
    id: 4,
    title: "Portfolio Website",
    image: process.env.PUBLIC_URL + "/project4.png",
    github: "https://github.com/Kethnulee-Weerasinghe4/Portfolio-Website",
  },
  {
    id: 5,
    title: "Book Management System",
    image: process.env.PUBLIC_URL + "/project5.png",
    github: "https://github.com/Kethnulee-Weerasinghe4/BookHaven-Book-Management-System",
  },
];


function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 right-0 bg-black bg-opacity-0 text-white flex justify-end pr-10 gap-8 py-4 z-50">
        <a href="#home" className="hover:text-yellow-400 transition">Home</a>
        <a href="#about" className="hover:text-yellow-400 transition">About</a>
        <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
        <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
        <a href="#education" className="hover:text-yellow-400 transition">Education</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center"
      >
        <img
          src={process.env.PUBLIC_URL + "/myphoto.jpg"}
          alt="My Photo"
          className="absolute w-full h-full object-cover"
        />

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-yellow-400 text-6xl md:text-8xl font-bold absolute bottom-20"
        >
          Business Analyst
        </motion.h1>
      </section>

      {/* About  */}
      <section
        id="about"
        className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-10 py-20"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-lg leading-8 text-gray-300 text-center"
        >
          Passionate Business Analyst with a strong educational background, focused on
          translating business objectives into actionable requirements and aligning clear
          delivery outcomes. Leverages strong technical fluency, web development
          experience, and Agile methodology expertise to bridge communication gaps,
          optimize workflows, and drive solution clarity.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/Kethnulee-CV.pdf"
          download
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
          mt-8 inline-block 
          px-10 py-3 
          rounded-full
          text-white 
          font-semibold 
          backdrop-blur-md 
          bg-black/40
          border border-gray-300/60 
          shadow-xl
          hover:bg-black/60
          hover:border-gray-200
          transition"
        >
          Download CV
        </motion.a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-black text-white py-20 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
          bg-black 
          border border-gray-300/60
          rounded-xl 
          shadow-lg 
          overflow-hidden 
          hover:scale-105 
          hover:border-gray-100 
          transform 
          transition
          w-full
          max-w-[360px]  
          h-[300px]      
          mx-auto
        "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-300">
                  {project.title}
                </h3>
              </div>

            </motion.a>
          ))}
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-black text-white py-20 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          {[
            { name: "Business Analysis", level: 95 },
            { name: "Agile Methodology", level: 90 },
            { name: "Web Development", level: 80 },
            { name: "Data Analysis", level: 85 },
            { name: "Requirement Gathering", level: 90 },
            { name: "Stakeholder Communication", level: 95 }
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-gray-300 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="min-h-screen bg-black text-white py-20 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-20 text-center text-white"
        >
          Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>

          {/* Education items */}
          {[
            {
              degree: "BEng (Hons) Software Engineering (TOP UP)",
              info: "ULondon Metropolitan University (UK) — 2024–2025",
            },
            {
              degree: "Level 5 Pearson BTEC HND in Computing (General)",
              info: "ESU — 2022–2024",
            },
            {
              degree: "Pearson (DiTech) Diploma in Information and Communication Technology",
              info: "IESU — 2022–2023",
            }
          ].map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative mb-24 w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Connector line from central trunk to card */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 h-1 bg-gray-400 ${isLeft ? "left-1/2 -translate-x-full w-12" : "left-1/2 w-12"}`}
                ></div>

                {/* Card */}
                <div className={`w-1/2 px-6 ${isLeft ? "pr-12" : "pl-12"}`}>
                  <div className={`bg-black border border-gray-400 p-6 rounded-xl shadow-lg ${isLeft ? "text-right" : "text-left"}`}>
                    <h3 className="text-1xl font-semibold text-white">{edu.degree}</h3>
                    <p className="mt-2 text-gray-300">{edu.info}</p>
                  </div>
                </div>

                {/* Circle marker on the center line */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-2 border-black"></div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-black text-white py-20 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center text-white"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-3xl mx-auto">

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* REQUIRED Web3Forms key */}
            <input type="hidden" name="access_key" value="51a525ab-d9aa-41b2-a365-821edc78d58b" />

            {/* Name */}
            <motion.input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="bg-black border border-gray-400 text-white p-4 rounded-xl focus:outline-none focus:border-yellow-400 transition"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Email */}
            <motion.input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="bg-black border border-gray-400 text-white p-4 rounded-xl focus:outline-none focus:border-yellow-400 transition"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="bg-black border border-gray-400 text-white p-4 rounded-xl focus:outline-none focus:border-yellow-400 transition resize-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-black border border-gray-400 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

        </div>
      </section>



      {/* Footer */}
      <footer className="w-full bg-white text-black py-14 px-10 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

          {/* Name or Branding */}
          <h2 className="text-3xl font-bold tracking-wide">
            Kethnulee Weerasinghe
          </h2>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-10 text-lg font-medium">

            <a
              href="mailto:wkethnulee@gmail.com"
              className="hover:text-yellow-600 transition"
            >
              Email
            </a>

            <a
              href="https://github.com/Kethnulee-Weerasinghe4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kethnulee-weerasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 transition"
            >
              LinkedIn
            </a>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 my-6"></div>

          {/* Bottom Note */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Kethnulee — All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
