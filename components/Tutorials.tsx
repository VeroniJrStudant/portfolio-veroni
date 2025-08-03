'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Play, Calendar, Clock, Tag, ExternalLink, ArrowRight } from 'lucide-react'

const Tutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'react', name: 'React' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'devops', name: 'DevOps' },
  ]

  const tutorials = [
    {
      id: 1,
      title: 'Como criar um projeto React com TypeScript do zero',
      description: 'Guia completo para configurar um projeto React moderno com TypeScript, ESLint, Prettier e outras ferramentas essenciais.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial1.mp4',
      category: 'react',
      duration: '15 min',
      date: '2024-01-15',
      tags: ['React', 'TypeScript', 'Setup'],
      featured: true,
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Construindo APIs RESTful com Node.js e Express',
      description: 'Aprenda a criar APIs robustas e escaláveis usando Node.js, Express e boas práticas de desenvolvimento.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial2.mp4',
      category: 'nodejs',
      duration: '25 min',
      date: '2024-01-10',
      tags: ['Node.js', 'Express', 'API'],
      featured: true,
      readTime: '12 min',
    },
    {
      id: 3,
      title: 'TypeScript Avançado: Generics e Utility Types',
      description: 'Explore recursos avançados do TypeScript para escrever código mais seguro e reutilizável.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial3.mp4',
      category: 'typescript',
      duration: '20 min',
      date: '2024-01-05',
      tags: ['TypeScript', 'Generics', 'Advanced'],
      featured: false,
      readTime: '10 min',
    },
    {
      id: 4,
      title: 'Deploy de aplicações com Docker e AWS',
      description: 'Guia prático para containerizar e fazer deploy de aplicações web na nuvem da Amazon.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial4.mp4',
      category: 'devops',
      duration: '30 min',
      date: '2023-12-28',
      tags: ['Docker', 'AWS', 'Deploy'],
      featured: false,
      readTime: '15 min',
    },
    {
      id: 5,
      title: 'Hooks personalizados no React: Padrões e boas práticas',
      description: 'Aprenda a criar hooks reutilizáveis e organizar melhor a lógica dos seus componentes React.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial5.mp4',
      category: 'react',
      duration: '18 min',
      date: '2023-12-20',
      tags: ['React', 'Hooks', 'Custom'],
      featured: false,
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'Autenticação JWT com Node.js e React',
      description: 'Implemente um sistema completo de autenticação usando JWT tokens no backend e frontend.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/tutorial6.mp4',
      category: 'nodejs',
      duration: '22 min',
      date: '2023-12-15',
      tags: ['JWT', 'Auth', 'Security'],
      featured: false,
      readTime: '11 min',
    },
  ]

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="tutorials" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tutoriais</span> & Blog
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compartilhando conhecimento e experiências através de tutoriais práticos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Tutorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {filteredTutorials.filter(t => t.featured).map((tutorial) => (
                          <div key={tutorial.id} className="glass-effect rounded-xl overflow-hidden hover-lift p-1">
              <div className="grid lg:grid-cols-2 gap-8">
                                  <div className="relative h-48 lg:h-full bg-primary-500/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                                          <BookOpen className="w-20 h-20 text-primary-400" />
                  </div>
                                      <div className="absolute top-6 left-6 px-4 py-2 bg-custom-brown text-white text-sm rounded-full">
                    Destaque
                  </div>
                </div>
                
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                                         <span className="px-3 py-1 bg-primary-500/20 text-primary-200 text-sm rounded-full">
                      {tutorial.category.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(tutorial.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tutorial.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tutorial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{tutorial.readTime} leitura</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-primary flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Assistir</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tutorials Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-8"
        >
          <AnimatePresence mode="wait">
            {filteredTutorials.filter(t => !t.featured).map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group mb-8"
              >
                <div className="glass-effect rounded-xl overflow-hidden card-hover hover-lift h-full flex flex-col p-1">
                  {/* Tutorial Image */}
                  <div className="relative h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary-400" />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
                      >
                        <Play className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Tutorial Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded">
                        {tutorial.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-3 flex-1">
                      {tutorial.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {tutorial.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {tutorial.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                          +{tutorial.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-1 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(tutorial.date)}</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <span className="text-sm">Ler mais</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary"
          >
            Ver todos os tutoriais
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Tutorials 