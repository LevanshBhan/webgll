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
import FluidSimulation from 'fluid-simulation-react';

// Main App Component
function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom configuration for fluid simulation
  const fluidConfig = {
    textureDownsample: 1,
    densityDissipation: 0.95,
    velocityDissipation: 0.98,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 35,
    splatRadius: 0.006,
  };

  // Custom colors for fluid simulation with more vibrant mixing
  const fluidColors = [
    [0.98, 0.96, 0.89], // Cream
    [0.75, 0.75, 0.75], // Silver
    [0.2, 0.6, 0.8],   // Blue
    [0.8, 0.2, 0.4],   // Pink
    [0.4, 0.8, 0.2],   // Green
  ];

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
    <div className="min-h-screen bg-black text-cream font-mono">
      {/* Fluid Simulation Background */}
      <div className="fixed inset-0 z-0">
        <FluidSimulation config={fluidConfig} color={fluidColors} />
      </div>

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
      <main className="container mx-auto px-4 py-8 relative z-10">
        <HomeSection />
        <div className="section-divider-enhanced" />
        <AboutSection />
        <div className="section-divider-enhanced" />
        <EducationSection />
        <div className="section-divider-enhanced" />
        <ProjectsSection />
        <div className="section-divider-enhanced" />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
