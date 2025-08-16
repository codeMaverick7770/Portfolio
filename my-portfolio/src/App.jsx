import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import LiveStats from './components/LiveStats'
import GitHubStats from './components/GitHubStats'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    if (!formData.email.includes('@')) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you within 24 hours.' })
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' })
    }, 5000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(124, 58, 237, 0.3)",
        "0 0 40px rgba(124, 58, 237, 0.6)",
        "0 0 20px rgba(124, 58, 237, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-white font-bold text-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              MT
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    textShadow: "0 0 8px rgba(255,255,255,0.5)"
                  }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side - Text Content */}
            <motion.div 
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <div className="mb-8">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                  variants={heroVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Mohammad Tauqeer
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-purple-300 mb-8"
                  variants={itemVariants}
                >
                  Competitive Programmer • Full-Stack Developer • AI & ML Enthusiast
                </motion.p>
                <motion.div 
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                  variants={itemVariants}
                >
                  {[
                    { text: "Codeforces Purple (1957)", bg: "bg-purple-600", hover: "hover:bg-purple-700" },
                    { text: "LeetCode Knight (1874)", bg: "bg-yellow-600", hover: "hover:bg-yellow-700" },
                    { text: "ICPC Regionals Finalist", bg: "bg-green-600", hover: "hover:bg-green-700" }
                  ].map((badge, index) => (
                    <motion.span
                      key={badge.text}
                      className={`px-4 py-2 ${badge.bg} ${badge.hover} text-white rounded-full text-sm font-medium transition-colors`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {badge.text}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a 
                  href="#projects" 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="px-8 py-3 border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Picture */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={profileVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="relative group"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50 hover:border-purple-400 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 0 50px rgba(124, 58, 237, 0.6)"
                  }}
                  variants={glowVariants}
                  animate="animate"
                >
                  <img 
                    src="https://i.ibb.co/GvCfnxy2/Tauqeer-DP.png"
                    alt="Mohammad Tauqeer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full items-center justify-center text-white text-lg font-semibold">
                    MT
                  </div>
                </motion.div>
                {/* Enhanced Glowing effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Live Statistics
          </motion.h2>
          <LiveStats />
        </div>
      </motion.section>

      {/* Competitive Programming Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Competitive Programming
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <a href="https://codeforces.com/profile/pedrosa" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://codeforces-readme-stats.vercel.app/api/card?username=pedrosa&theme=github_dark" 
                  alt="Codeforces Stats" 
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <a href="https://leetcode.com/Mtauqeer7770" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://leetcard.jacoblin.cool/Mtauqeer7770?theme=dark&font=Source%20Code%20Pro&ext=contest" 
                  alt="LeetCode Card" 
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🏆 Achievements & Milestones
          </motion.h2>
          
          <div className="space-y-8">
            {/* 2024 Achievements */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/20 to-blue-800/20 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">2024 - Breakthrough Year</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-purple-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Top 250 India - Codeforces Purple</div>
                      <div className="text-purple-300 text-sm">Peak Rating: 1957</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-yellow-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Top 20% - LeetCode Knight</div>
                      <div className="text-yellow-300 text-sm">Peak Rating: 1874</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-green-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Top 52 India - Codeforces Round 1007</div>
                      <div className="text-green-300 text-sm">Div 2 Competition</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-orange-500/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Top 3 India - LeetCode Contest 422</div>
                      <div className="text-orange-300 text-sm">20K+ Participants</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-blue-500/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Rank 2/1000 - All India Graph Contest</div>
                      <div className="text-blue-300 text-sm">Algo University</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-red-500/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-semibold">Rank 2/100 - Array Contest</div>
                      <div className="text-red-300 text-sm">Algo University</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Major Competitions */}
            <motion.div 
              className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 backdrop-blur-md rounded-2xl p-8 border border-green-700/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Major Competitions & Hackathons</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="p-6 bg-white/5 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🏆</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Samsung Solve for Tomorrow</h4>
                  </div>
                  <p className="text-gray-300 mb-3">Finalist among 10,000+ teams</p>
                  <div className="text-green-400 font-semibold">INR 1L Funding Awarded</div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white/5 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">💻</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Smart India Hackathon 2024</h4>
                  </div>
                  <p className="text-gray-300 mb-3">Finalist among 40,000+ teams</p>
                  <div className="text-blue-400 font-semibold">National Level Recognition</div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white/5 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🌍</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">ICPC Regionals - Chennai</h4>
                  </div>
                  <p className="text-gray-300 mb-3">Rank 135 out of 2200+ teams</p>
                  <div className="text-purple-400 font-semibold">International Recognition</div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-white/5 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">👥</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Google Developer Groups</h4>
                  </div>
                  <p className="text-gray-300 mb-3">CP Lead since 2023</p>
                  <div className="text-indigo-400 font-semibold">Community Leadership</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Academic Excellence */}
            <motion.div 
              className="bg-gradient-to-br from-indigo-900/20 to-purple-800/20 backdrop-blur-md rounded-2xl p-8 border border-indigo-700/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Academic Excellence</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-6 bg-white/5 rounded-xl border border-indigo-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-indigo-400 mb-2">91.4%</div>
                  <div className="text-white font-semibold mb-2">Class 10th</div>
                  <div className="text-indigo-300 text-sm">KVS Gomtinagar</div>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6 bg-white/5 rounded-xl border border-purple-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">90.6%</div>
                  <div className="text-white font-semibold mb-2">Class 12th</div>
                  <div className="text-purple-300 text-sm">Physics, Chemistry, Maths, CS</div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-6 text-center p-6 bg-white/5 rounded-xl border border-indigo-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-white mb-2">JEE MAINS 2022</div>
                <div className="text-indigo-400 font-semibold text-lg">AIR 27,814 out of 12,21,624</div>
                <div className="text-gray-300 text-sm mt-2">Top 2.3% among 1.2M+ candidates</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate competitive programmer and full-stack developer from Lucknow, India. 
                Currently pursuing Mechanical Engineering at HBTU Kanpur, I've achieved remarkable success 
                in competitive programming and built scalable applications used by thousands of users.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Top 250 India - Codeforces Purple (Peak: 1957)", color: "bg-purple-500" },
                  { text: "Top 20% - LeetCode Knight (Peak: 1874)", color: "bg-yellow-500" },
                  { text: "ICPC Regionals Chennai 2024 - Rank 135/2200+", color: "bg-green-500" },
                  { text: "Finalist - Samsung Solve for Tomorrow (₹1L Funding)", color: "bg-blue-500" }
                ].map((achievement, index) => (
                  <motion.div 
                    key={achievement.text}
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className={`w-3 h-3 ${achievement.color} rounded-full`}
                      whileHover={{ scale: 2, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "HBTU KANPUR (HBTI)",
                    degree: "Mechanical Engineering",
                    period: "Aug 2022 - Present | Kanpur, UP"
                  },
                  {
                    title: "KVS GOMTINAGAR",
                    degree: "Physics, Chemistry, Maths, Computer Science",
                    period: "Graduated April 2021 | Lucknow, UP",
                    details: "10th: 91.4% | 12th: 90.6%"
                  }
                ].map((edu, index) => (
                  <motion.div 
                    key={edu.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-purple-300">{edu.degree}</p>
                    <p className="text-gray-400">{edu.period}</p>
                    {edu.details && <p className="text-gray-400">{edu.details}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          {/* kickDSA Project */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">🏆 kickDSA — AI-Powered Online Judge</h3>
                <p className="text-gray-300 mb-6">
                  Online Judge used by 5,000+ learners with real-time code execution and LLM-powered hints. 
                  Built with Node.js, Express, MongoDB, Docker, and deployed on AWS EC2.
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: "Node.js", bg: "bg-green-600" },
                    { name: "Express", bg: "bg-gray-600" },
                    { name: "MongoDB", bg: "bg-green-700" },
                    { name: "Docker", bg: "bg-blue-600" },
                    { name: "AWS EC2", bg: "bg-orange-600" }
                  ].map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className={`px-3 py-1 ${tech.bg} text-white rounded-full text-sm font-medium`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/codeMaverick7770/kickDSA" 
                    className="text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗 GitHub
                  </motion.a>
                  <motion.a 
                    href="https://kickdsa.online/" 
                    className="text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🌐 Live Demo
                  </motion.a>
                </div>
              </div>
              <motion.div 
                className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://i.postimg.cc/W43mbg32/image.png"
                  alt="kickDSA Preview"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-48 rounded-lg items-center justify-center text-white text-lg font-semibold">
                  kickDSA Preview
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Aagaz'25 Project */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="order-2 lg:order-1 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-4"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://i.postimg.cc/L8yf75VG/image.png"
                  alt="Aagaz'25 Preview"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-48 rounded-lg items-center justify-center text-white text-lg font-semibold">
                  Aagaz'25 Preview
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-white mb-4">🎯 Aagaz'25 — Sports Fest Platform</h3>
                <p className="text-gray-300 mb-6">
                  MERN-based platform for sports fest management, handling registrations, payments, and sponsors. 
                  Served 5,000+ users across 20+ colleges with ₹22L+ in merchandise sales.
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: "React", bg: "bg-blue-600" },
                    { name: "Node.js", bg: "bg-green-600" },
                    { name: "MongoDB", bg: "bg-yellow-600" },
                    { name: "OAuth2", bg: "bg-purple-600" }
                  ].map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className={`px-3 py-1 ${tech.bg} text-white rounded-full text-sm font-medium`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/codeMaverick7770/aagaz25" 
                    className="text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗 GitHub
                  </motion.a>
                  <motion.a 
                    href="https://aagaz25.online/" 
                    className="text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🌐 Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AquaAlert Project */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">💧 AquaAlert — IoT + ML Leak Detection</h3>
                <p className="text-gray-300 mb-6">
                  IoT system with LSTM and AutoEncoder models for real-time water leakage detection. 
                  Finalist in Samsung Solve for Tomorrow 2024 with ₹1L funding.
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: "Python", bg: "bg-blue-600" },
                    { name: "TensorFlow", bg: "bg-orange-600" },
                    { name: "Streamlit", bg: "bg-red-600" },
                    { name: "Docker", bg: "bg-blue-500" }
                  ].map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className={`px-3 py-1 ${tech.bg} text-white rounded-full text-sm font-medium`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech.name}
                  </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/codeMaverick7770/aquaalert" 
                    className="text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗 GitHub
                  </motion.a>
                </div>
              </div>
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-4"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://i.postimg.cc/50yzbVsj/image.png"
                  alt="AquaAlert Preview"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-48 rounded-lg items-center justify-center text-white text-lg font-semibold">
                  AquaAlert Preview
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          {/* Tech Stack Icons */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Technology Stack</h3>
            <div className="flex justify-center">
              <motion.img 
                src="https://skillicons.dev/icons?i=java,python,javascript,nodejs,express,mongodb,react,tailwind,docker,aws,nginx,linux,git,githubactions,postman,figma"
                alt="Tech Stack"
                className="h-16 md:h-20 lg:h-24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Programming Languages",
                skills: [
                  { name: "Java", level: "Advanced" },
                  { name: "Python", level: "Advanced" },
                  { name: "C++", level: "Advanced" },
                  { name: "JavaScript", level: "Advanced" }
                ]
              },
              {
                title: "Backend Development",
                skills: [
                  { name: "Node.js", level: "Advanced" },
                  { name: "Express.js", level: "Advanced" },
                  { name: "MongoDB", level: "Advanced" },
                  { name: "REST APIs", level: "Advanced" }
                ]
              },
              {
                title: "Frontend & Cloud",
                skills: [
                  { name: "React.js", level: "Advanced" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "AWS", level: "Intermediate" },
                  { name: "Docker", level: "Advanced" }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* GitHub Stats Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            GitHub Statistics
          </motion.h2>
          <GitHubStats />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Connect & Collaborate! 🚀
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm passionate about building innovative solutions and sharing knowledge. Whether you're looking to hire, 
              seeking mentorship, or want to discuss exciting projects - I'd love to hear from you!
            </motion.p>
            
            {/* Call to Action Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 backdrop-blur-md rounded-xl p-6 border border-green-700/30 hover:border-green-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-lg font-bold text-white mb-2">Hire Me</h3>
                <p className="text-gray-300 text-sm">Looking for a competitive programmer & full-stack developer? Let's build something amazing together!</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-900/20 to-indigo-800/20 backdrop-blur-md rounded-xl p-6 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-lg font-bold text-white mb-2">Mentorship</h3>
                <p className="text-gray-300 text-sm">Want to improve your competitive programming skills? I can guide you through algorithms and problem-solving!</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-900/20 to-pink-800/20 backdrop-blur-md rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-lg font-bold text-white mb-2">Collaborate</h3>
                <p className="text-gray-300 text-sm">Have an exciting project idea? Let's discuss how we can bring it to life with cutting-edge technology!</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form and Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-gray-700/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                             <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
               <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300">
                    <option value="">Select a subject</option>
                    <option value="hiring">Job Opportunity / Hiring</option>
                    <option value="mentorship">Competitive Programming Mentorship</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or how I can help you..."
                  ></textarea>
                </div>
                
                                 <motion.button 
                   type="submit"
                   className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                   whileHover={{ y: -2 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   📤 Send Message
                 </motion.button>
              </form>
              {formStatus.message && (
                <motion.div 
                  className={`mt-4 p-3 rounded-lg text-center ${
                    formStatus.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </motion.div>

            {/* Contact Methods */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              {/* Direct Contact Methods */}
              <div className="space-y-4">
                <motion.a 
                  href="mailto:Mtauqeer7770@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-red-300 transition-colors">Email</div>
                    <div className="text-gray-300 text-sm">Mtauqeer7770@gmail.com</div>
                    <div className="text-purple-300 text-xs">Fastest response time</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/mohammad-tauqeer-ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-300 transition-colors">LinkedIn</div>
                    <div className="text-gray-300 text-sm">Professional networking</div>
                    <div className="text-blue-300 text-xs">View my experience</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/codeMaverick7770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🐙</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-gray-300 transition-colors">GitHub</div>
                    <div className="text-gray-300 text-sm">View my projects</div>
                    <div className="text-gray-300 text-xs">Open source contributions</div>
                  </div>
                </motion.a>
              </div>

              {/* Quick Response Info */}
              <motion.div 
                className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 backdrop-blur-md rounded-xl p-6 border border-green-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <h4 className="text-white font-semibold">Quick Response Guarantee</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out on multiple platforms!
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-4">
                {[
                  { href: "https://codeforces.com/profile/pedrosa", icon: "🏆", label: "Codeforces" },
                  { href: "https://leetcode.com/Mtauqeer7770", icon: "⚡", label: "LeetCode" }
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                    <span className="text-xs text-center">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mohammad Tauqeer. Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
