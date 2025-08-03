'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ArrowLeft, Save, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Project {
  id: string
  title: string
  description: string
  image: string
  videoUrl: string
  githubUrl: string
  liveUrl: string
  technologies: string[]
  featured: boolean
  category: string
}

const ProjectsManager = () => {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React e Node.js',
      image: '/api/placeholder/400/300',
      videoUrl: 'https://example.com/video1.mp4',
      githubUrl: 'https://github.com/user/project1',
      liveUrl: 'https://project1.com',
      technologies: ['React', 'Node.js', 'MongoDB'],
      featured: true,
      category: 'Full Stack'
    }
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    image: '',
    videoUrl: '',
    githubUrl: '',
    liveUrl: '',
    technologies: [],
    featured: false,
    category: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...formData, id: editingProject.id } as Project
          : p
      ))
    } else {
      // Add new project
      const newProject: Project = {
        ...formData,
        id: Date.now().toString()
      } as Project
      setProjects([...projects, newProject])
    }
    
    setFormData({
      title: '',
      description: '',
      image: '',
      videoUrl: '',
      githubUrl: '',
      liveUrl: '',
      technologies: [],
      featured: false,
      category: ''
    })
    setEditingProject(null)
    setShowForm(false)
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData(project)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este projeto?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const addTechnology = () => {
    const tech = prompt('Digite o nome da tecnologia:')
    if (tech && !formData.technologies?.includes(tech)) {
      setFormData({
        ...formData,
        technologies: [...(formData.technologies || []), tech]
      })
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies?.filter(t => t !== tech) || []
    })
  }

  return (
    <div className="min-h-screen bg-dark-950 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
                          <motion.button
                onClick={() => router.push('/admin/dashboard')}
                                      className="p-2 bg-custom-brown rounded-lg text-white hover:bg-brown-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <h1 className="text-3xl font-bold text-white">Gerenciar Projetos</h1>
          </div>
          
                        <motion.button
                onClick={() => setShowForm(true)}
                                  className="flex items-center space-x-2 px-4 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Novo Projeto</span>
          </motion.button>
        </div>

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 glass-effect rounded-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                {editingProject ? 'Editar Projeto' : 'Novo Projeto'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingProject(null)
                  setFormData({
                    title: '',
                    description: '',
                    image: '',
                    videoUrl: '',
                    githubUrl: '',
                    liveUrl: '',
                    technologies: [],
                    featured: false,
                    category: ''
                  })
                }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Categoria
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descrição
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    URL da Imagem
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    URL do Vídeo
                  </label>
                  <input
                    type="url"
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tecnologias
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.technologies?.map((tech, index) => (
                    <span
                      key={index}
                                              className="px-3 py-1 bg-custom-brown/20 text-brown-300 rounded-full text-sm flex items-center space-x-1"
                    >
                      <span>{tech}</span>
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
                        className="ml-1 hover:text-red-400"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addTechnology}
                                          className="px-4 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                >
                  Adicionar Tecnologia
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="w-4 h-4 text-blue-600 bg-dark-800 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="featured" className="text-sm text-gray-300">
                  Projeto em Destaque
                </label>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
  
                                          className="flex items-center space-x-2 px-6 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProject ? 'Atualizar' : 'Salvar'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-effect rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                                            className="px-2 py-1 bg-custom-brown/20 text-brown-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{project.category}</span>
                {project.featured && (
                  <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded">
                    Destaque
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsManager 