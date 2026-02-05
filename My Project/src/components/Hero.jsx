import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import AntigravityHero from "./3d/AntigravityHero";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          eventSource={document.body}
          eventPrefix="client"
        >
          <AntigravityHero />
        </Canvas>
      </div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="mb-2 text-xl font-medium text-cyan-600 dark:text-cyan-400 md:text-2xl">
              Hello, I'm
            </h2>
            <h1 className="mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text">
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
                className="text-xl text-slate-600 dark:text-slate-300 md:text-2xl"
              />
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/AmmaarAnwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-500 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-anwar-761849253"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-500 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ammaranwr_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-500 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/mero.anwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-500 dark:text-slate-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn btn-primary bg-cyan-600 hover:bg-cyan-500 border-none text-white shadow-lg shadow-cyan-500/20"
              >
                View Projects
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                className="btn btn-outline border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
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
            <div className="relative w-5/6 overflow-hidden border-4 rounded-full shadow-2xl border-cyan-500/30 aspect-square ring-4 ring-purple-500/20">
              <img
                src="/Ammar.JPG"
                alt="Profile"
                className="object-cover w-full "
              />
            </div>

            <motion.div
              className="absolute p-4 rounded-lg shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 -bottom-4 -right-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-bold text-cyan-600 dark:text-cyan-400">
                2 Years Of Experience
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Web Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
