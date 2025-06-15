import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pb-20">
      <div className="text-center space-y-8">
        {/* Greeting */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-lg text-cream font-mono">
              👋 Hello, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="text-gradient">
                Levansh
              </span>
              <br />
              <span className="text-white">Bhan</span>
            </h1>
          </motion.div>
        </RevealOnScroll>

        {/* Role */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-20 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-cream">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Computer Science Student",
                  2000,
                  "AI/ML Enthusiast",
                  2000,
                  "Cloud Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </h2>
          </motion.div>
        </RevealOnScroll>

        {/* Description */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-cream/80 leading-relaxed">
              Passionate Full-Stack Developer with experience in React.js, Node.js, and ASP.NET Core. 
              Currently pursuing Master's in Computer Science at TU Darmstadt, specializing in AI and Data Science.
              Ready to contribute to innovative projects and teams.
            </p>
          </motion.div>
        </RevealOnScroll>

        {/* Status Badge */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="futuristic-card p-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-white font-semibold">Available for Working Student Position</p>
                  <p className="text-cream/60 text-sm">20h/week • TU Darmstadt • German Work Visa Ready</p>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* CTA Buttons */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#projects" 
              className="btn btn-primary group glow"
            >
              <span>View My Work</span>
              <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group glow"
            >
              <FaDownload className="group-hover:scale-110 transition-transform" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </RevealOnScroll>

        {/* Social Links */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/levanshbhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full futuristic-card flex items-center justify-center transition-all duration-300 hover:scale-110 group glow"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl text-cream group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/levansh-bhan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full futuristic-card flex items-center justify-center transition-all duration-300 hover:scale-110 group glow"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl text-cream group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:levanshbhan@gmail.com"
              className="w-12 h-12 rounded-full futuristic-card flex items-center justify-center transition-all duration-300 hover:scale-110 group glow"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl text-cream group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Scroll Indicator - Moved up */}
      <div className="scroll-to-explore" style={{ bottom: '60px' }}>
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-mono mb-2">Scroll to explore</span>
              <FaArrowDown className="text-xl" />
            </motion.button>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Home;
