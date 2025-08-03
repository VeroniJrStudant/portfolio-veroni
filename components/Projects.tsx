'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Eye, Code, Smartphone, Globe, X } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'fullstack', name: 'Full Stack' },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamentos, gestão de estoque e painel administrativo.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video1.mp4',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com interface moderna e funcionalidades avançadas como drag & drop e colaboração em tempo real.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video2.mp4',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile',
      description: 'App mobile para rastreamento de atividades físicas com integração de wearables e análise de dados personalizada.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video3.mp4',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'Assistente virtual inteligente com integração de IA para atendimento ao cliente e automação de processos.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video4.mp4',
      category: 'web',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'Vue.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Plataforma imobiliária com busca avançada, tours virtuais e sistema de agendamento de visitas.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video5.mp4',
      category: 'fullstack',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Dashboard para análise de redes sociais com métricas em tempo real e relatórios personalizados.',
      image: '/api/placeholder/400/250',
      videoUrl: 'https://example.com/video6.mp4',
      category: 'web',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ]

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-effect rounded-xl overflow-hidden card-hover hover-lift">
                  {/* Project Image */}
                  <div className="relative h-48 bg-primary-500/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                                              <Code className="w-16 h-16 text-primary-400" />
                    </div>
                    
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-custom-brown rounded-full text-white hover:bg-brown-900 transition-colors"
                      >
                        <Play className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-custom-brown text-white text-xs rounded-full">
                        Destaque
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-2">
                        {project.category === 'mobile' && <Smartphone className="w-4 h-4 text-primary-400" />}
                        {project.category === 'web' && <Globe className="w-4 h-4 text-primary-400" />}
                        {project.category === 'fullstack' && <Code className="w-4 h-4 text-primary-400" />}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-500/20 text-primary-200 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Código</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl bg-dark-800 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-dark-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-dark-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <p className="text-gray-400">Vídeo do projeto será exibido aqui</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">{selectedProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  videoUrl: string
  category: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export default Projects 