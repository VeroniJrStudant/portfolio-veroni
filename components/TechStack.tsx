'use client'

import { motion } from 'framer-motion'
import { Wrench, Zap, Shield, Cpu, Database, Globe, Smartphone, Cloud } from 'lucide-react'

const TechStack = () => {
  const categories = [
    {
      id: 'frontend',
              name: 'Frontend',
        icon: Globe,
        color: 'from-primary-600 to-primary-700',
      technologies: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '💚' },
        { name: 'Angular', level: 70, icon: '🅰️' },
      ]
    },
    {
      id: 'backend',
              name: 'Backend',
        icon: Cpu,
        color: 'from-secondary-600 to-secondary-700',
      technologies: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Express.js', level: 90, icon: '⚡' },
        { name: 'Django', level: 80, icon: '🎯' },
        { name: 'FastAPI', level: 75, icon: '🚀' },
        { name: 'GraphQL', level: 78, icon: '📊' },
      ]
    },
    {
      id: 'database',
              name: 'Database',
        icon: Database,
        color: 'from-primary-700 to-primary-800',
      technologies: [
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'MySQL', level: 70, icon: '🐬' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'Supabase', level: 78, icon: '⚡' },
      ]
    },
    {
      id: 'devops',
              name: 'DevOps',
        icon: Cloud,
        color: 'from-secondary-700 to-secondary-800',
      technologies: [
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'CI/CD', level: 75, icon: '🔄' },
        { name: 'Kubernetes', level: 65, icon: '⚓' },
        { name: 'Terraform', level: 70, icon: '🏗️' },
      ]
    },
    {
      id: 'mobile',
              name: 'Mobile',
        icon: Smartphone,
        color: 'from-primary-600 to-primary-700',
      technologies: [
        { name: 'React Native', level: 80, icon: '📱' },
        { name: 'Flutter', level: 70, icon: '🦋' },
        { name: 'Expo', level: 75, icon: '⚡' },
        { name: 'iOS Development', level: 65, icon: '🍎' },
        { name: 'Android Development', level: 68, icon: '🤖' },
        { name: 'PWA', level: 85, icon: '📱' },
      ]
    },
    {
      id: 'tools',
              name: 'Ferramentas',
        icon: Wrench,
        color: 'from-secondary-600 to-secondary-700',
      technologies: [
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 80, icon: '📮' },
        { name: 'Jira', level: 75, icon: '📋' },
        { name: 'Notion', level: 90, icon: '📝' },
        { name: 'Slack', level: 88, icon: '💬' },
      ]
    }
  ]

  return (
    <section id="stack" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack <span className="gradient-text">Tecnológica</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções inovadoras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                      </div>
                      <span className="text-primary-400 text-sm font-mono">{tech.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-dark-700 rounded-full h-3 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-3 rounded-full bg-primary-400 shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Outras <span className="gradient-text">Habilidades</span>
            </h3>
            <p className="text-gray-400">
              Conhecimentos complementares que agregam valor aos projetos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Performance', desc: 'Otimização e métricas' },
              { icon: Shield, title: 'Segurança', desc: 'Boas práticas e auditoria' },
              { icon: Globe, title: 'SEO', desc: 'Otimização para motores de busca' },
              { icon: Cpu, title: 'Arquitetura', desc: 'Design de sistemas escaláveis' },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-effect rounded-lg"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
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
            className="button-primary"
          >
            Ver projetos com essas tecnologias
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 