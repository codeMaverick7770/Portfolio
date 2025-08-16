import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/codeMaverick7770')
        const data = await response.json()
        if (data.id) {
          setGithubData(data)
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Enhanced GitHub Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">GitHub Stats</h3>
          </div>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=codeMaverick7770&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1f2937&text_color=ffffff&icon_color=7c3aed&title_color=7c3aed"
            alt="GitHub Stats"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Top Languages</h3>
          </div>
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=codeMaverick7770&layout=compact&theme=tokyonight&hide_border=true&bg_color=1f2937&text_color=ffffff&title_color=7c3aed"
            alt="Top Languages"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">GitHub Streak</h3>
          </div>
          <img 
            src="https://streak-stats.demolab.com?user=codeMaverick7770&theme=tokyonight&hide_border=true&background=1f2937&stroke=7c3aed&ring=7c3aed&fire=ef4444&currStreakNum=ffffff&currStreakLabel=7c3aed&sideNums=ffffff&sideLabels=7c3aed&dates=6b7280"
            alt="GitHub Streak"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>

      {/* Contribution Graph */}
      <motion.div 
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">Contribution Graph</h3>
        </div>
        <img 
          src="https://github-readme-activity-graph.vercel.app/graph?username=codeMaverick7770&theme=tokyo-night&hide_border=true&bg_color=1f2937&color=7c3aed&line=7c3aed&point=ffffff&area=true&area_color=7c3aed&area_opacity=0.1"
          alt="Contribution Graph"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Additional GitHub Metrics */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          { label: "Repositories", value: githubData?.public_repos || 'N/A', icon: "📦", color: "from-blue-500 to-cyan-500" },
          { label: "Contributions", value: "500+", icon: "🔥", color: "from-orange-500 to-red-500" },
          { label: "Streak", value: "7 days", icon: "⚡", color: "from-yellow-500 to-orange-500" },
          { label: "Followers", value: githubData?.followers || 'N/A', icon: "👥", color: "from-purple-500 to-pink-500" }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-md rounded-xl p-4 border border-gray-600/30 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <span className="text-2xl">{metric.icon}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-gray-300 text-sm">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default GitHubStats
