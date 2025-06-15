import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaCertificate, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      type: "degree",
      title: "M.Sc. Computer Science",
      institution: "Technische Universität Darmstadt",
      period: "Oct 2024 – Present",
      description: "Focus on AI and Data Science with advanced coursework in machine learning and computer vision",
      skills: ["Machine Learning", "Deep Learning", "Data Mining", "Computer Vision"],
      icon: FaGraduationCap,
      gpa: "1.7 (German scale)",
      status: "In Progress"
    },
    {
      type: "degree",
      title: "B.E. Computer Science",
      institution: "Savitribai Phule Pune University",
      period: "Aug 2019 – Jul 2023",
      description: "First Class with Distinction, specializing in core computer science fundamentals",
      skills: ["Operating Systems", "Data Structures", "Machine Learning", "Algorithms"],
      icon: FaGraduationCap,
      gpa: "1.7 (German scale)",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'degree': return 'border-cream text-cream';
      case 'certification': return 'border-silver text-silver';
      case 'ongoing': return 'border-white text-white';
      default: return 'border-cream text-cream';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      case 'degree': return 'bg-cream/5';
      case 'certification': return 'bg-silver/5';
      case 'ongoing': return 'bg-white/5';
      default: return 'bg-cream/5';
    }
  };

  return (
    <section id="education" className="min-h-screen bg-transparent text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cream"></div>
              <FaGraduationCap className="text-2xl text-cream" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cream"></div>
            </div>
            <h2 className="text-4xl font-bold text-cream mb-2">Education</h2>
            <p className="text-silver/80 max-w-2xl mx-auto">
              My academic journey focused on computer science fundamentals and advanced AI/ML technologies.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            {educationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`futuristic-card p-6 border-l-4 ${getTypeColor(item.type)} ${getTypeBg(item.type)} hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg ${getTypeBg(item.type)} border ${getTypeColor(item.type)} flex items-center justify-center`}>
                        <IconComponent className="text-xl" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-cream mb-1">{item.title}</h3>
                          <p className="text-silver font-medium">{item.institution}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-silver/60">{item.period}</span>
                          {item.gpa && (
                            <div className="text-sm text-cream font-mono mt-1">
                              GPA: {item.gpa}
                            </div>
                          )}
                          {item.status && (
                            <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                              item.status === 'Completed' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {item.status}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-silver/80 leading-relaxed">{item.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-black/30 border border-cream/20 text-cream/80 rounded-full font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants} className="futuristic-card p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-cream mb-4">Learning Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-cream/10 border border-cream/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-cream font-bold">01</span>
                </div>
                <h4 className="text-cream font-semibold">Continuous Growth</h4>
                <p className="text-silver/70 text-sm">Always learning, always evolving with the latest technologies</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-cream/10 border border-cream/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-cream font-bold">02</span>
                </div>
                <h4 className="text-cream font-semibold">Practical Application</h4>
                <p className="text-silver/70 text-sm">Theory meets practice through hands-on projects and real-world applications</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-cream/10 border border-cream/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-cream font-bold">03</span>
                </div>
                <h4 className="text-cream font-semibold">Innovation Focus</h4>
                <p className="text-silver/70 text-sm">Exploring cutting-edge technologies to solve tomorrow's challenges</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 