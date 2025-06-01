import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-primary-600"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
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
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-primary-600">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-gray-600">
                    <strong>Name:</strong> Ammar Anwar
                  </p>
                  <p className="text-gray-600">
                    <strong>Age:</strong> 24
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +201119131252
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Location:</strong> Cairo, Egypt
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> Anwaramar177@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-600">
                My Expertise
              </h3>
              <p className="text-gray-600">
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
                  className="flex items-center gap-2 btn btn-primary"
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
            <div className="p-6 text-center bg-white rounded-lg shadow-lg stats-box">
              <h4 className="mb-2 text-4xl font-bold text-primary-600">1</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-lg stats-box">
              <h4 className="mb-2 text-4xl font-bold text-primary-600">10+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
