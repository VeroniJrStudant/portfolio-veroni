'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ArrowLeft, Save, X, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Tutorial {
  id: string
  title: string
  description: string
  content: string
  category: string
  featured: boolean
  image: string
  videoUrl: string
  readTime: number
  publishedAt: string
}

const TutorialsManager = () => {
  const router = useRouter()
  const [tutorials, setTutorials] = useState<Tutorial[]>([
    {
      id: '1',
      title: 'React com TypeScript',
      description: 'Guia completo para usar React com TypeScript',
      content: '# React com TypeScript\n\nEste é um tutorial completo...',
      category: 'Frontend',
      featured: true,
      image: '/api/placeholder/400/300',
      videoUrl: 'https://example.com/video1.mp4',
      readTime: 15,
      publishedAt: '2024-01-15'
    }
  ])

  const [editingTutorial, setEditingTutorial] = useState<Tutorial | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Tutorial>>({
    title: '',
    description: '',
    content: '',
    category: '',
    featured: false,
    image: '',
    videoUrl: '',
    readTime: 5,
    publishedAt: new Date().toISOString().split('T')[0]
  })

  const categories = ['Frontend', 'Backend', 'DevOps', 'Mobile', 'Database', 'Ferramentas']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingTutorial) {
      // Update existing tutorial
      setTutorials(tutorials.map(t => 
        t.id === editingTutorial.id 
          ? { ...formData, id: editingTutorial.id } as Tutorial
          : t
      ))
    } else {
      // Add new tutorial
      const newTutorial: Tutorial = {
        ...formData,
        id: Date.now().toString()
      } as Tutorial
      setTutorials([...tutorials, newTutorial])
    }
    
    setFormData({
      title: '',
      description: '',
      content: '',
      category: '',
      featured: false,
      image: '',
      videoUrl: '',
      readTime: 5,
      publishedAt: new Date().toISOString().split('T')[0]
    })
    setEditingTutorial(null)
    setShowForm(false)
  }

  const handleEdit = (tutorial: Tutorial) => {
    setEditingTutorial(tutorial)
    setFormData(tutorial)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este tutorial?')) {
      setTutorials(tutorials.filter(t => t.id !== id))
    }
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
            <h1 className="text-3xl font-bold text-white">Gerenciar Tutoriais</h1>
          </div>
          
                        <motion.button
                onClick={() => setShowForm(true)}
                                  className="flex items-center space-x-2 px-4 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Novo Tutorial</span>
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
                {editingTutorial ? 'Editar Tutorial' : 'Novo Tutorial'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingTutorial(null)
                  setFormData({
                    title: '',
                    description: '',
                    content: '',
                    category: '',
                    featured: false,
                    image: '',
                    videoUrl: '',
                    readTime: 5,
                    publishedAt: new Date().toISOString().split('T')[0]
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
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
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
                    Tempo de Leitura (minutos)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.readTime}
                    onChange={(e) => setFormData({...formData, readTime: parseInt(e.target.value)})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Data de Publicação
                  </label>
                  <input
                    type="date"
                    value={formData.publishedAt}
                    onChange={(e) => setFormData({...formData, publishedAt: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Conteúdo (Markdown)
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={10}
                  className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none font-mono text-sm"
                  placeholder="# Título\n\nConteúdo do tutorial em Markdown..."
                  required
                />
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
                  Tutorial em Destaque
                </label>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
  
                                          className="flex items-center space-x-2 px-6 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingTutorial ? 'Atualizar' : 'Salvar'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Tutorials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-effect rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{tutorial.title}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(tutorial)}
                    className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(tutorial.id)}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{tutorial.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                                        <span className="px-2 py-1 bg-custom-brown/20 text-brown-300 text-xs rounded">
                  {tutorial.category}
                </span>
                <span className="text-gray-500 text-xs">{tutorial.readTime} min</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{tutorial.publishedAt}</span>
                {tutorial.featured && (
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

export default TutorialsManager 