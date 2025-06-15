import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { RevealOnScroll } from '../RevealOnScroll';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Download, 
  Github, 
  Linkedin,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Zap,
  AlertCircle
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const availabilityStatus = {
    "Current Status": "Available for Working Student Positions",
    "Start Date": "Immediate",
    "Work Type": "Remote/Hybrid",
    "Time Commitment": "20-30 hours/week"
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "levanshbhan@gmail.com",
      href: "mailto:levanshbhan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 176 12345678",
      href: "tel:+4917612345678"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Berlin, Germany"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/levanshbhan"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/levansh-bhan"
    }
  ];

  const skills = [
    {
      icon: Code,
      label: "Full Stack Development",
      description: "Proficient in React, Node.js, and modern web technologies"
    },
    {
      icon: Database,
      label: "Database Management",
      description: "Experience with SQL and NoSQL databases"
    },
    {
      icon: Server,
      label: "Backend Development",
      description: "Strong in API design and server-side programming"
    },
    {
      icon: Cloud,
      label: "Cloud Services",
      description: "Familiar with AWS and cloud deployment"
    },
    {
      icon: Shield,
      label: "Security Best Practices",
      description: "Knowledge of web security and data protection"
    },
    {
      icon: Zap,
      label: "Performance Optimization",
      description: "Expertise in optimizing application performance"
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Let's</span>
              <span className="text-white"> Connect</span>
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto">
              Ready to discuss working student opportunities and collaborations. Let's build something amazing together.
            </p>
          </motion.div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <RevealOnScroll>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Availability Status */}
              <motion.div 
                className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-cream text-xl" />
                  <h3 className="text-xl font-bold text-cream">Availability Status</h3>
                </div>
                
                <div className="space-y-3">
                  {Object.entries(availabilityStatus).map(([key, value]) => (
                    <motion.div 
                      key={key} 
                      className="flex items-center justify-between group"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <span className="text-silver group-hover:text-cream transition-colors duration-300">{key}:</span>
                      <span className="text-cream font-semibold group-hover:text-white transition-colors duration-300">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-cream mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="form-group"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <label className="block text-sm font-medium text-silver mb-2 group-hover:text-cream transition-colors duration-300">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                        className="w-full px-4 py-3 bg-black/50 border border-cream/20 rounded-lg text-white placeholder-silver focus:outline-none focus:border-cream/40 transition-all duration-300 hover:border-cream/30"
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName.message}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="form-group"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <label className="block text-sm font-medium text-silver mb-2 group-hover:text-cream transition-colors duration-300">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                        className="w-full px-4 py-3 bg-black/50 border border-cream/20 rounded-lg text-white placeholder-silver focus:outline-none focus:border-cream/40 transition-all duration-300 hover:border-cream/30"
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div 
                    className="form-group"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <label className="block text-sm font-medium text-silver mb-2 group-hover:text-cream transition-colors duration-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 bg-black/50 border border-cream/20 rounded-lg text-white placeholder-silver focus:outline-none focus:border-cream/40 transition-all duration-300 hover:border-cream/30"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p 
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div 
                    className="form-group"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    <label className="block text-sm font-medium text-silver mb-2 group-hover:text-cream transition-colors duration-300">
                      Message *
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-cream/20 rounded-lg text-white placeholder-silver focus:outline-none focus:border-cream/40 transition-all duration-300 hover:border-cream/30 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && (
                      <motion.p 
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Success/Error Messages */}
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                      >
                        <p className="text-green-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Message sent successfully! I'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                      >
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {submitError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cream to-cream/80 text-black font-semibold rounded-lg hover:from-cream/90 hover:to-cream/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </RevealOnScroll>

          {/* Right Column - Contact Info & Skills */}
          <RevealOnScroll>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Contact Information */}
              <motion.div 
                className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-cream mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-cream/10 border border-cream/20 rounded-lg flex items-center justify-center group-hover:bg-cream/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <info.icon className="text-cream text-xl group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <p className="text-silver text-sm group-hover:text-cream transition-colors duration-300">{info.label}</p>
                        {info.href ? (
                          <motion.a
                            href={info.href}
                            className="text-cream hover:text-white transition-colors duration-300"
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <p className="text-cream group-hover:text-white transition-colors duration-300">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-cream/20">
                  <h4 className="text-lg font-semibold text-cream mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black/50 border border-cream/20 rounded-lg flex items-center justify-center text-silver hover:text-cream hover:border-cream/40 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <link.icon className="text-xl" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Skills & Expertise */}
              <motion.div 
                className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-cream mb-6">What I Bring</h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-cream/10 border border-cream/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cream/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <skill.icon className="text-cream text-lg group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-semibold mb-1 group-hover:text-cream transition-colors duration-300">{skill.label}</h4>
                        <p className="text-silver text-sm group-hover:text-white/80 transition-colors duration-300">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold text-cream mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  {[
                    { href: "/resume.pdf", icon: Download, text: "Download Resume" },
                    { href: "https://github.com/levanshbhan", icon: Github, text: "View GitHub Profile" },
                    { href: "https://www.linkedin.com/in/levansh-bhan", icon: Linkedin, text: "Connect on LinkedIn" }
                  ].map((action, index) => (
                    <motion.a
                      key={index}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-black/30 border border-cream/20 rounded-lg text-silver hover:text-cream hover:border-cream/40 transition-all duration-300"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <action.icon className="text-cream" />
                      <span>{action.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
