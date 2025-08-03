'use client'

import { motion } from 'framer-motion'
import { Code, Loader2 } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-6"
        >
          <Code className="w-16 h-16 gradient-text mx-auto" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold gradient-text mb-4"
        >
          Veroni
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center space-x-2"
        >
          <Loader2 className="w-5 h-5 gradient-text animate-spin" />
          <span className="text-gray-400">Carregando portfólio</span>
                      <span className="loading-dots gradient-text"></span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen 