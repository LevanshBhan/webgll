import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaExternalLinkAlt, FaGithub, FaEye, FaEyeSlash, FaStar, FaUsers, FaRocket, FaChartLine } from "react-icons/fa";
import { SiExpress, SiMongodb, SiVite, SiTailwindcss, SiTypescript, SiNextdotjs, SiAmazonwebservices, SiDocker, SiKubernetes, SiPostgresql, SiRedis, SiNginx } from "react-icons/si";

const projects = [
  {
    title: "QKART - E-COMMERCE PLATFORM",
    desc: "Developed full-stack platform (React.js + Node.js + MongoDB) with login, search, cart, and filters. Reduced API latency by 30% through optimized Node.js Express routing and MongoDB indexing. Achieved 99.9% test pass rate with Jest and Postman API test suites.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Jest", "REST APIs", "CI/CD", "Testing", "Netlify"],
    live: "https://qkart.netlify.app/",
    source: "https://github.com/levanshbhan/qkart-frontend",
    features: ["Full-stack e-commerce", "User authentication", "Shopping cart", "Product search", "Optimized APIs", "Automated testing"],
    stats: { performance: "30% faster", coverage: "99.9%", rating: "4.8" },
    category: "fullstack",
    year: "2023",
    complexity: "High",
    impact: "Production ready",
    icon: "🛒"
  },
  {
    title: "XFLIX - VIDEO SHARING APP",
    desc: "Created YouTube-like app using React + Redux and Node.js backend. Improved page load speed by 40% with pagination, lazy loading, and memoization techniques. Added like/dislike features with MongoDB-based real-time counter and analytics.",
    tags: ["React.js", "Redux", "Node.js", "MongoDB", "REST APIs", "Video Upload", "Lazy Loading", "Pagination", "Real-time", "Netlify"],
    live: "https://xflix.netlify.app/",
    source: "https://github.com/levanshbhan/xflix-frontend",
    features: ["Video sharing platform", "User authentication", "Like/dislike system", "Real-time counters", "Performance optimization", "Analytics"],
    stats: { performance: "40% faster", videos: "5K+", rating: "4.7" },
    category: "fullstack",
    year: "2022",
    complexity: "High",
    impact: "Video platform",
    icon: "🎬"
  },
  {
    title: "XBOARD - NEWS FEED WEBSITE",
    desc: "Built mobile-first RSS news site using HTML, CSS, jQuery, and Flipboard API. Achieved 100% Lighthouse accessibility score by following semantic markup and ARIA roles. Deployed via Netlify; 1.2s average TTI (Time to Interactive).",
    tags: ["HTML", "CSS", "jQuery", "Bootstrap", "REST APIs", "RSS Feed", "Accessibility", "Semantic HTML", "ARIA", "Netlify"],
    live: "https://xboard-news-site.netlify.app/",
    source: "https://github.com/levanshbhan/xboard",
    features: ["News feed aggregation", "Topic-based filtering", "Responsive design", "RSS feed integration", "Accessibility compliance", "Fast loading"],
    stats: { accessibility: "100%", performance: "1.2s TTI", rating: "4.9" },
    category: "frontend",
    year: "2022",
    complexity: "Medium",
    impact: "News platform",
    icon: "📰"
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTagIcon = (tag) => {
    const iconMap = {
      'React.js': FaReact,
      'Node.js': FaNodeJs,
      'MongoDB': SiMongodb,
      'Express.js': SiExpress,
      'TypeScript': SiTypescript,
      'Next.js': SiNextdotjs,
      'AWS': SiAmazonwebservices,
      'Docker': SiDocker,
      'Kubernetes': SiKubernetes,
      'PostgreSQL': SiPostgresql,
      'Redis': SiRedis,
      'Nginx': SiNginx,
      'Vite': SiVite,
      'Tailwind CSS': SiTailwindcss,
    };
    return iconMap[tag] || FaCode;
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'High': return 'text-cream';
      case 'Medium': return 'text-silver';
      case 'Low': return 'text-white';
      default: return 'text-silver';
    }
  };

  return (
    <motion.div 
      className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl overflow-hidden group cursor-pointer hover:border-cream/40 transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/5 via-transparent to-silver/5"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cream/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-silver/10 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* Futuristic Project Icon/Block */}
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-black via-cream/5 to-black overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 border border-cream/20 rounded-t-xl group-hover:border-cream/40 transition-colors duration-500"></div>
        
        {/* Main icon container */}
        <motion.div 
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-cream/40 bg-black/80 shadow-lg group-hover:border-cream/60 group-hover:shadow-cream/20 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="text-4xl transition-transform duration-500">
            {project.icon}
          </span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cream/20 to-silver/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-4 right-4 w-2 h-2 bg-cream/60 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-4 left-4 w-1 h-1 bg-silver/60 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-cream group-hover:text-white transition-colors duration-500 leading-tight">
            {project.title}
          </h3>
          <div className="flex flex-col items-end gap-1">
            <span className="text-silver text-sm">{project.year}</span>
            <span className={`text-xs px-2 py-1 rounded-full border transition-colors duration-500 ${
              project.complexity === 'High' ? 'border-cream/40 text-cream bg-cream/10' :
              project.complexity === 'Medium' ? 'border-silver/40 text-silver bg-silver/10' :
              'border-white/40 text-white bg-white/10'
            }`}>
              {project.complexity}
            </span>
          </div>
        </div>

        <p className="text-silver/80 mb-4 line-clamp-3 leading-relaxed">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => {
            const Icon = getTagIcon(tag);
            return (
              <motion.span 
                key={tag} 
                className="inline-flex items-center gap-1 px-3 py-1 bg-black/50 border border-cream/20 rounded-full text-xs text-silver hover:text-cream hover:border-cream/40 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Icon className="w-3 h-3" />
                {tag}
              </motion.span>
            );
          })}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 bg-black/50 border border-cream/20 rounded-full text-xs text-silver">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Stats and Impact */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-silver/60">Impact:</span>
            <span className="text-cream font-semibold">{project.impact}</span>
          </div>
          
          {/* Performance stats */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-cream/10">
              {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xs text-silver/60 uppercase tracking-wide">{key}</div>
                  <div className="text-sm font-semibold text-cream">{value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cream/10 border border-cream/30 rounded-lg text-cream hover:bg-cream/20 hover:border-cream/50 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span className="text-sm font-medium">Live Demo</span>
          </motion.a>
          <motion.a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black/50 border border-cream/20 rounded-lg text-silver hover:text-cream hover:border-cream/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-4 h-4" />
            <span className="text-sm font-medium">Source</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cream">Key</span>
              <span className="text-white"> Projects</span>
            </h2>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
              Here are some of my key projects that showcase my full-stack development skills, 
              from e-commerce platforms to video sharing applications and news aggregators.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll>
          <div className="flex justify-center mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-2xl p-2 flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-500 ${
                    activeCategory === category.id
                      ? 'bg-cream text-black shadow-lg'
                      : 'text-silver hover:text-white hover:bg-cream/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <RevealOnScroll>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
