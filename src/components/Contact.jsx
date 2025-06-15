import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Mail, Phone, MapPin, Calendar, Clock, 
  Github, Linkedin, ExternalLink, Send,
  CheckCircle, AlertCircle, Download
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Update time every minute
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setSubmitSuccess(true);
    reset();
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  const availabilityStatus = () => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay();
    
    if (day === 0 || day === 6) return { status: 'Weekend', color: 'text-yellow-400' };
    if (hour >= 9 && hour <= 17) return { status: 'Available', color: 'text-green-400' };
    if (hour >= 18 && hour <= 22) return { status: 'Evening', color: 'text-blue-400' };
    return { status: 'Offline', color: 'text-slate-400' };
  };

  const status = availabilityStatus();

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm available for working student positions, 
            freelance projects, and exciting collaborations. Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Availability Status */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Current Status</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${status.color.replace('text-', 'bg-')} animate-pulse`} />
                  <span className={`text-sm font-medium ${status.color}`}>{status.status}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">
                    {currentTime.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">
                    {currentTime.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      timeZone: 'Europe/Berlin'
                    })} CET
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:levansh.bhan@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-400 text-sm">levansh.bhan@example.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+49123456789"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-400 text-sm">+49 123 456 789</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-400 text-sm">Darmstadt, Germany</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Connect Online</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/levanshbhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <div>
                    <p className="text-white font-medium text-sm">GitHub</p>
                    <p className="text-slate-400 text-xs">@levanshbhan</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/levanshbhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <div>
                    <p className="text-white font-medium text-sm">LinkedIn</p>
                    <p className="text-slate-400 text-xs">@levanshbhan</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Download Resume</h3>
              <p className="text-slate-400 mb-4">
                Get my detailed resume with complete work history, skills, and achievements.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="/resume-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  English
                </motion.a>
                <motion.a
                  href="/resume-de.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  German
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            {submitSuccess ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register("firstName", { required: "First name is required" })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register("lastName", { required: "Last name is required" })}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <select
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="working-student">Working Student Position</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      }
                    })}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 