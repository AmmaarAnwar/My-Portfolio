import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="mb-2 text-xl text-gray-600 md:text-2xl">
              Hello, I'm
            </h2>
            <h1 className="mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              Ammar
            </h1>
            <div className="h-20 mb-6">
              <TypeAnimation
                sequence={[
                  "Creating beautiful, functional, and user-friendly digital experiences with modern web technologies.",
                  2000,
                  "",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
                className="text-xl text-gray-700 md:text-2xl"
              />
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/AmmaarAnwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition-colors hover:text-primary-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-anwar-761849253"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition-colors hover:text-primary-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ammaranwr_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition-colors hover:text-primary-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/mero.anwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 transition-colors hover:text-primary-600"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="/Resume.pdf" target="_blank" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-5/6 overflow-hidden border-8 border-white rounded-full shadow-2xl aspect-square">
              <img
                src="/Ammar.JPG"
                alt="Profile"
                className="object-cover w-full "
              />
            </div>

            <motion.div
              className="absolute p-4 bg-white rounded-lg shadow-lg -bottom-4 -right-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-bold text-primary-600">1 Years Of Experience</p>
              <p className="text-sm text-gray-600">Web Development</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
