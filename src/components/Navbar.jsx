import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaHome, FaUser, FaGraduationCap, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", icon: FaHome },
  { label: "About", href: "#about", icon: FaUser },
  { label: "Education", href: "#education", icon: FaGraduationCap },
  { label: "Projects", href: "#projects", icon: FaBriefcase },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
];

export const NavBar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/levanshbhan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/levanshbhan', label: 'LinkedIn' },
  ];

  return (
    <motion.nav
      className={`navbar fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-cream/20' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ 
        position: 'fixed',
        top: '32px',
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        width: '100%',
        height: '64px',
        background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(245, 245, 220, 0.2)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cream/20 border border-cream/30 flex items-center justify-center">
                <FaCode className="w-6 h-6 text-cream" />
              </div>
              <span className="text-xl font-bold text-cream">Levansh Bhan</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`nav-link flex items-center gap-2 transition-all duration-300 font-medium ${
                    activeSection === item.href.slice(1) ? 'text-cream border-b-2 border-cream' : 'text-silver hover:text-cream'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-black/50 hover:bg-cream/10 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-cream/20 hover:border-cream/40"
                  whileHover={{ y: -2 }}
                >
                  <IconComponent className="w-5 h-5 text-cream" />
                </motion.a>
              );
            })}
            
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-lg bg-black/50 hover:bg-cream/10 flex items-center justify-center transition-all duration-300 border border-cream/20 hover:border-cream/40"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes className="w-5 h-5 text-cream" /> : <FaBars className="w-5 h-5 text-cream" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-cream/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 text-silver hover:text-cream transition-colors duration-300 py-2 ${
                        activeSection === item.href.slice(1) ? 'text-cream border-l-2 border-cream pl-2' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {item.label}
                    </motion.a>
                  );
                })}
                
                <div className="pt-4 border-t border-cream/20">
                  <div className="flex gap-4 mb-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-black/50 hover:bg-cream/10 flex items-center justify-center transition-all duration-300 border border-cream/20 hover:border-cream/40"
                          whileHover={{ scale: 1.1 }}
                        >
                          <IconComponent className="w-5 h-5 text-cream" />
                        </motion.a>
                      );
                    })}
                  </div>
                  
                  <motion.a
                    href="#contact"
                    className="btn btn-primary w-full"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get in Touch
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
