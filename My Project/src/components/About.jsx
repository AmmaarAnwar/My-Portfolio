import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 rounded bg-cyan-600"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            I'm a passionate web developer with expertise in creating beautiful
            and functional websites. My journey in web development started 3
            years ago, and I've been loving every moment of it.
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <h3 className="mb-4 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      Name:
                    </strong>{" "}
                    Ammar Anwar
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      Age:
                    </strong>{" "}
                    26
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      Phone:
                    </strong>{" "}
                    +201001799244
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      Location:
                    </strong>{" "}
                    Cairo, Egypt
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200">
                      Email:
                    </strong>{" "}
                    anwaramar177@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                My Expertise
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                I specialize in building modern web applications using React and
                Tailwind CSS. My focus is on creating responsive, user-friendly
                interfaces that provide excellent user experiences. I also
                worked as a web designer for one year during my military
                service, which enhanced my skills in design and front-end
                development.
              </p>
              <div className="flex gap-4">
                <a
                  href="/Resume.pdf"
                  className="flex items-center gap-2 text-white btn btn-primary bg-cyan-600 hover:bg-cyan-700"
                >
                  <FaDownload /> Download CV
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 text-center rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 stats-box transition-colors duration-300">
              <h4 className="mb-2 text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                2
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Years Experience
              </p>
            </div>
            <div className="p-6 text-center rounded-lg shadow-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 stats-box transition-colors duration-300">
              <h4 className="mb-2 text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                20+
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Projects Completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
