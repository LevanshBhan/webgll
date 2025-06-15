import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Star, GitBranch, Zap, Target, Award } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI product recommendations, real-time inventory management, and advanced analytics dashboard.",
      image: "/project1.jpg",
      category: "fullstack",
      tech: ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/levanshbhan/project1",
      features: ["AI Recommendations", "Real-time Analytics", "Microservices", "CI/CD Pipeline"],
      complexity: "High",
      performance: "98/100",
      stars: 156,
      forks: 23
    },
    {
      id: 2,
      title: "Machine Learning Model Deployment",
      description: "End-to-end ML pipeline with automated model training, deployment, and monitoring using Kubernetes and Docker.",
      image: "/project2.jpg",
      category: "ai-ml",
      tech: ["Python", "TensorFlow", "Docker", "Kubernetes", "Flask", "PostgreSQL", "Redis"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/levanshbhan/project2",
      features: ["AutoML Pipeline", "Model Versioning", "A/B Testing", "Monitoring"],
      complexity: "High",
      performance: "95/100",
      stars: 89,
      forks: 15
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Scalable chat application with WebSocket connections, file sharing, and end-to-end encryption.",
      image: "/project3.jpg",
      category: "fullstack",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis", "Docker"],
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/levanshbhan/project3",
      features: ["Real-time Messaging", "File Sharing", "E2E Encryption", "Group Chats"],
      complexity: "Medium",
      performance: "92/100",
      stars: 234,
      forks: 45
    },
    {
      id: 4,
      title: "Cloud-Native Microservices",
      description: "Distributed system with microservices architecture, service mesh, and cloud-native deployment.",
      image: "/project4.jpg",
      category: "devops",
      tech: ["Go", "Docker", "Kubernetes", "Istio", "Prometheus", "Grafana", "AWS"],
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/levanshbhan/project4",
      features: ["Service Mesh", "Auto-scaling", "Monitoring", "Load Balancing"],
      complexity: "High",
      performance: "96/100",
      stars: 178,
      forks: 32
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with real-time updates and advanced filtering capabilities.",
      image: "/project5.jpg",
      category: "frontend",
      tech: ["React", "D3.js", "TypeScript", "Express", "PostgreSQL", "Chart.js"],
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/levanshbhan/project5",
      features: ["Interactive Charts", "Real-time Data", "Advanced Filters", "Export Options"],
      complexity: "Medium",
      performance: "94/100",
      stars: 123,
      forks: 28
    },
    {
      id: 6,
      title: "Mobile App with React Native",
      description: "Cross-platform mobile application with offline capabilities, push notifications, and native performance.",
      image: "/project6.jpg",
      category: "mobile",
      tech: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Jest"],
      liveUrl: "https://project6.com",
      githubUrl: "https://github.com/levanshbhan/project6",
      features: ["Offline Support", "Push Notifications", "Native Performance", "Cross-platform"],
      complexity: "Medium",
      performance: "91/100",
      stars: 145,
      forks: 19
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Target },
    { id: 'fullstack', label: 'Full-Stack', icon: Zap },
    { id: 'ai-ml', label: 'AI/ML', icon: Award },
    { id: 'frontend', label: 'Frontend', icon: Eye },
    { id: 'devops', label: 'DevOps', icon: GitBranch },
    { id: 'mobile', label: 'Mobile', icon: Star }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world projects. Each project demonstrates 
            problem-solving skills, modern technologies, and production-ready code quality.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-black shadow-lg'
                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-sm" />
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                layout
                className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm card-cyber"
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-cyan-400">{project.title.charAt(0)}</div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Stats */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-slate-300">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-300">{project.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                        {project.complexity}
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                        {project.performance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Complexity Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/levanshbhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="text-xl" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 