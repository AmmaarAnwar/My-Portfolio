import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaMobile,
  FaPython,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 80 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#38B2AC]" />,
      level: 85,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-[#F7DF1E]" />,
      level: 80,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 70,
    },
    {
      name: "Responsive Design",
      icon: <FaMobile className="text-gray-700" />,
      level: 85,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-gray-900" />,
      level: 70,
    },
    {
      name: "Python",
      icon: <FaPython className="text-gray-700" />,
      level: 65,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500" />,
      level: 70,
    },
    {
      name: "Java ",
      icon: <FaJava trap className="text-orange-700" />,
      level: 60,
    },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 95 },
    { name: "Creativity", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-primary-600"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Here are my technical and soft skills that I've developed
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-lg">
            <button
              className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-colors ${
                activeTab === "technical"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("technical")}
            >
              Technical Skills
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                activeTab === "soft"
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("soft")}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {activeTab === "technical" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "soft" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-secondary-500 to-secondary-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
