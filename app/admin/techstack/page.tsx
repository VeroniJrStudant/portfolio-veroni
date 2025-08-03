'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ArrowLeft, Save, X, Globe, Cpu, Database, Cloud, Smartphone, Wrench } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Technology {
  id: string
  name: string
  level: number
  icon: string
  category: string
}

interface Category {
  id: string
  name: string
  icon: any
  technologies: Technology[]
}

const TechStackManager = () => {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Globe,
      technologies: [
        { id: '1', name: 'React', level: 95, icon: '⚛️', category: 'frontend' },
        { id: '2', name: 'Next.js', level: 90, icon: '▲', category: 'frontend' },
        { id: '3', name: 'TypeScript', level: 88, icon: '📘', category: 'frontend' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Cpu,
      technologies: [
        { id: '4', name: 'Node.js', level: 92, icon: '🟢', category: 'backend' },
        { id: '5', name: 'Python', level: 85, icon: '🐍', category: 'backend' },
        { id: '6', name: 'Express.js', level: 90, icon: '⚡', category: 'backend' },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: Database,
      technologies: [
        { id: '7', name: 'PostgreSQL', level: 85, icon: '🐘', category: 'database' },
        { id: '8', name: 'MongoDB', level: 80, icon: '🍃', category: 'database' },
        { id: '9', name: 'Redis', level: 75, icon: '🔴', category: 'database' },
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: Cloud,
      technologies: [
        { id: '10', name: 'Docker', level: 85, icon: '🐳', category: 'devops' },
        { id: '11', name: 'AWS', level: 80, icon: '☁️', category: 'devops' },
        { id: '12', name: 'Git', level: 90, icon: '📝', category: 'devops' },
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: Smartphone,
      technologies: [
        { id: '13', name: 'React Native', level: 80, icon: '📱', category: 'mobile' },
        { id: '14', name: 'Flutter', level: 70, icon: '🦋', category: 'mobile' },
        { id: '15', name: 'Expo', level: 75, icon: '⚡', category: 'mobile' },
      ]
    },
    {
      id: 'tools',
      name: 'Ferramentas',
      icon: Wrench,
      technologies: [
        { id: '16', name: 'Figma', level: 85, icon: '🎨', category: 'tools' },
        { id: '17', name: 'VS Code', level: 95, icon: '💻', category: 'tools' },
        { id: '18', name: 'Postman', level: 80, icon: '📮', category: 'tools' },
      ]
    }
  ])

  const [editingTech, setEditingTech] = useState<Technology | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('frontend')
  const [formData, setFormData] = useState<Partial<Technology>>({
    name: '',
    level: 50,
    icon: '',
    category: 'frontend'
  })

  const categoryIcons = {
    frontend: Globe,
    backend: Cpu,
    database: Database,
    devops: Cloud,
    mobile: Smartphone,
    tools: Wrench
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingTech) {
      // Update existing technology
      setCategories(categories.map(cat => ({
        ...cat,
        technologies: cat.technologies.map(tech => 
          tech.id === editingTech.id 
            ? { ...formData, id: editingTech.id } as Technology
            : tech
        )
      })))
    } else {
      // Add new technology
      const newTech: Technology = {
        ...formData,
        id: Date.now().toString()
      } as Technology
      
      setCategories(categories.map(cat => 
        cat.id === selectedCategory 
          ? { ...cat, technologies: [...cat.technologies, newTech] }
          : cat
      ))
    }
    
    setFormData({
      name: '',
      level: 50,
      icon: '',
      category: 'frontend'
    })
    setEditingTech(null)
    setShowForm(false)
  }

  const handleEdit = (tech: Technology) => {
    setEditingTech(tech)
    setFormData(tech)
    setSelectedCategory(tech.category)
    setShowForm(true)
  }

  const handleDelete = (techId: string, categoryId: string) => {
    if (confirm('Tem certeza que deseja excluir esta tecnologia?')) {
      setCategories(categories.map(cat => 
        cat.id === categoryId 
          ? { ...cat, technologies: cat.technologies.filter(t => t.id !== techId) }
          : cat
      ))
    }
  }

  const addCategory = () => {
    const name = prompt('Digite o nome da nova categoria:')
    if (name) {
      const newCategory: Category = {
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        icon: Wrench,
        technologies: []
      }
      setCategories([...categories, newCategory])
    }
  }

  const deleteCategory = (categoryId: string) => {
    if (confirm('Tem certeza que deseja excluir esta categoria? Todas as tecnologias serão perdidas.')) {
      setCategories(categories.filter(cat => cat.id !== categoryId))
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
            <h1 className="text-3xl font-bold text-white">Gerenciar Tech Stack</h1>
          </div>
          
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addCategory}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Nova Categoria</span>
            </motion.button>
            
                          <motion.button
                onClick={() => setShowForm(true)}
                                      className="flex items-center space-x-2 px-4 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Nova Tecnologia</span>
            </motion.button>
          </div>
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
                {editingTech ? 'Editar Tecnologia' : 'Nova Tecnologia'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingTech(null)
                  setFormData({
                    name: '',
                    level: 50,
                    icon: '',
                    category: 'frontend'
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
                    Nome da Tecnologia
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Categoria
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value)
                      setFormData({...formData, category: e.target.value})
                    }}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ícone (emoji)
                  </label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    className="w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="⚛️"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nível de Proficiência: {formData.level}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
  
                                          className="flex items-center space-x-2 px-6 py-2 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingTech ? 'Atualizar' : 'Salvar'}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                                          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>
                
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-dark-800 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="font-medium text-white">{tech.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(tech)}
                          className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(tech.id, category.id)}
                          className="p-1 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Proficiência</span>
                        <span className="text-blue-400 font-mono">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackManager 