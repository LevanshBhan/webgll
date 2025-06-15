import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./index.css";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import HomeSection from "./components/sections/Home";
import AboutSection from "./components/sections/About";
import EducationSection from "./components/sections/Education";
import ProjectsSection from "./components/sections/Projects";
import ContactSection from "./components/sections/Contact";
import Fluid from "./components/Fluid";

// Main App Component
function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    // Calculate scroll progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    // Update active section
    const sections = ["home", "about", "education", "projects", "contact"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="min-h-screen bg-transparent text-cream font-mono">
      {/* Fluid Simulation Background - Full Page, not inside any container */}
      <Fluid />

      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Terminal Header */}
      <div className="terminal-header px-4 py-2 flex items-center justify-between sticky top-0 z-30 bg-black/95 backdrop-blur-md border-b border-cream/20">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>
          </div>
          <span className="text-cream text-sm">Terminal - Levansh Bhan Portfolio</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          <a href="#home" className={`nav-link text-xs transition-all duration-300 ${activeSection === 'home' ? 'text-cream border-b border-cream' : 'text-silver hover:text-cream'}`}>
            Home
          </a>
          <a href="#about" className={`nav-link text-xs transition-all duration-300 ${activeSection === 'about' ? 'text-cream border-b border-cream' : 'text-silver hover:text-cream'}`}>
            About
          </a>
          <a href="#education" className={`nav-link text-xs transition-all duration-300 ${activeSection === 'education' ? 'text-cream border-b border-cream' : 'text-silver hover:text-cream'}`}>
            Education
          </a>
          <a href="#projects" className={`nav-link text-xs transition-all duration-300 ${activeSection === 'projects' ? 'text-cream border-b border-cream' : 'text-silver hover:text-cream'}`}>
            Projects
          </a>
          <a href="#contact" className={`nav-link text-xs transition-all duration-300 ${activeSection === 'contact' ? 'text-cream border-b border-cream' : 'text-silver hover:text-cream'}`}>
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn btn-primary text-xs px-3 py-1">
            Get in Touch
          </a>
          <div className="text-cream/60 text-xs">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-8 bg-transparent">
          <HomeSection />
          <div className="section-divider-enhanced" />
          <AboutSection />
          <div className="section-divider-enhanced" />
          <EducationSection />
          <div className="section-divider-enhanced" />
          <ProjectsSection />
          <div className="section-divider-enhanced" />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;
