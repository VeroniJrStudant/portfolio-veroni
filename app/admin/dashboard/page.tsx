'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  FolderOpen, 
  BookOpen, 
  Settings, 
  LogOut, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Upload,
  BarChart3,
  Users,
  FileText
} from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const stats = [
    { title: 'Total de Projetos', value: '12', icon: FolderOpen, color: 'text-blue-500' },
    { title: 'Tutoriais Publicados', value: '8', icon: BookOpen, color: 'text-green-500' },
    { title: 'Visualizações', value: '2.4k', icon: Eye, color: 'text-purple-500' },
    { title: 'Contatos', value: '45', icon: Users, color: 'text-orange-500' },
  ]

  const recentProjects = [
    { id: 1, title: 'E-commerce Platform', status: 'Ativo', views: 156, date: '2024-01-15' },
    { id: 2, title: 'Task Management App', status: 'Ativo', views: 89, date: '2024-01-10' },
    { id: 3, title: 'Fitness Tracker', status: 'Em desenvolvimento', views: 0, date: '2024-01-05' },
  ]

  const recentTutorials = [
    { id: 1, title: 'React com TypeScript', views: 234, date: '2024-01-15' },
    { id: 2, title: 'Node.js APIs', views: 189, date: '2024-01-10' },
    { id: 3, title: 'Docker Basics', views: 145, date: '2024-01-05' },
  ]

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/login' })
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="bg-dark-800 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <LayoutDashboard className="w-8 h-8 text-primary-500" />
              <h1 className="text-xl font-bold text-white">Painel Administrativo</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Olá, {session.user?.username}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-dark-800 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', name: 'Visão Geral', icon: BarChart3 },
            { id: 'projects', name: 'Projetos', icon: FolderOpen },
            { id: 'tutorials', name: 'Tutoriais', icon: BookOpen },
            { id: 'techstack', name: 'Tech Stack', icon: FileText },
            { id: 'settings', name: 'Configurações', icon: Settings },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-custom-brown text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-dark-700 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Projects */}
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Projetos Recentes</h3>
                  <motion.button
                    onClick={() => router.push('/admin/projects')}
                    className="flex items-center space-x-2 px-3 py-1 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Gerenciar</span>
                  </motion.button>
                </div>
                
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{project.title}</h4>
                        <p className="text-gray-400 text-sm">{project.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400 text-sm">{project.views} views</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Ativo' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Tutorials */}
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Tutoriais Recentes</h3>
                  <motion.button
                    onClick={() => router.push('/admin/tutorials')}
                    className="flex items-center space-x-2 px-3 py-1 bg-custom-brown text-white rounded-lg hover:bg-brown-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Gerenciar</span>
                  </motion.button>
                </div>
                
                <div className="space-y-4">
                  {recentTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{tutorial.title}</h4>
                        <p className="text-gray-400 text-sm">{tutorial.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400 text-sm">{tutorial.views} views</span>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-green-400 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gerenciar Projetos</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/admin/projects')}
                className="button-primary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Gerenciar Projetos</span>
              </motion.button>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="text-center py-12">
                <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Gerenciamento de Projetos</h3>
                <p className="text-gray-400 mb-6">Gerencie seus projetos, adicione vídeos e atualize informações</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/admin/projects')}
                  className="button-primary"
                >
                  Acessar Gerenciador
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tutorials Tab */}
        {activeTab === 'tutorials' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gerenciar Tutoriais</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/admin/tutorials')}
                className="button-primary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Gerenciar Tutoriais</span>
              </motion.button>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Gerenciamento de Tutoriais</h3>
                <p className="text-gray-400 mb-6">Crie e edite tutoriais, artigos e conteúdo educacional</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/admin/tutorials')}
                  className="button-primary"
                >
                  Acessar Gerenciador
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tech Stack Tab */}
        {activeTab === 'techstack' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gerenciar Tech Stack</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/admin/techstack')}
                className="button-primary flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Gerenciar Tech Stack</span>
              </motion.button>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Gerenciamento de Tech Stack</h3>
                <p className="text-gray-400 mb-6">Adicione, edite e organize suas tecnologias e habilidades</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/admin/techstack')}
                  className="button-primary"
                >
                  Acessar Gerenciador
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">Configurações</h2>
            
            <div className="glass-effect rounded-xl p-6">
              <p className="text-gray-400">Configurações do painel administrativo serão implementadas aqui.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 