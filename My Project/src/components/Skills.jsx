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
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 70,
    },
    {
      name: "Responsive Design",
      icon: <FaMobile className="text-slate-400" />,
      level: 85,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-white" />,
      level: 70,
    },
    {
      name: "Python",
      icon: <FaPython className="text-slate-400" />,
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
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900 dark:text-slate-100">
            My Skills
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 rounded bg-cyan-600"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Here are my technical and soft skills that I've developed
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex border rounded-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <button
              className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-colors ${
                activeTab === "technical"
                  ? "bg-cyan-600 text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("technical")}
            >
              Technical Skills
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                activeTab === "soft"
                  ? "bg-cyan-600 text-white"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
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
                className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-slate-900 dark:text-slate-200">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
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
