import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Facial Emotion Detection System",
      image: "/Project.jpg",
      description:
        "A real time system that uses computer vision and CNNs torecognize seven basic facial emotions happiness, sadness, anger, fear, surprise, disgust, andneutrality from both images and video streams.",
      technologies: [
        "Python",
        "Machine Learning",
        "Algorithms",
        "Jupyter Notebook",
        "OpenCV",
      ],
      githubLink:
        "https://github.com/AmmaarAnwar/Facial-Emotion-Detection-System",
    },
    {
      id: 2,
      title: "Modular Data Entry PDF Reporting System",
      image: "Project1.jpg",
      description:
        "Modular Data Entry & PDF Reporting System A flexible React.js-based system for managing structured data and generating PDF reports.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      githubLink:
        " https://github.com/AmmaarAnwar/Modular-Data-Entry---PDF-Reporting-System",
    },
    {
      id: 3,
      title: "Branch Communication System",
      image: "/Project2.jpg",
      description:
        "Branch Communication System A React & Tailwind CSS web app for structured communication across multiple branches.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      githubLink: "https://github.com/AmmaarAnwar/Branch-Communication-System",
    },
    {
      id: 4,
      title: "Coffee Shop Management-System",
      image: "/Project3.jpg",
      description:
        "Coffee Shop Management System with A React & Tailwind CSS for managing tables, orders, and payments in real time.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      githubLink:
        " https://github.com/AmmaarAnwar/Coffee-Shop-Management-System",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      image: "Project4.jpg",
      description:
        "Weather Dashboard A React-based weather app with live forecasts, interactive maps, and detailed analytics providing real-time weather insights by location",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Weather API",
      ],
      githubLink: "https://github.com/AmmaarAnwar/Weather-Dashboard",
    },
    {
      id: 6,
      title: "My Portfolio",
      image: "/Project5.jpg",
      description:
        "My Portfolio A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience.",
      technologies: ["React", "Tailwind CSS", "Node.JS", "Chart.JS"],
      githubLink: " https://github.com/AmmaarAnwar/My-Portfolio",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="bg-white section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block mb-3 text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
            My Projects
          </h2>
          <div className="w-24 h-1 mx-auto rounded bg-primary-600"></div>
          <p className="mt-6 text-lg text-gray-600">
            Check out some of my work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: "66.67%" }}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-80" : ""
          }`}
        ></div>

        {/* Project Info */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-100">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs rounded-full bg-primary-500 bg-opacity-40"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex mt-4 space-x-3">
            <a
              href={project.githubLink}
              className="p-2 text-white transition-colors bg-opacity-50 rounded-full bg-dark hover:bg-opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Repository"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
