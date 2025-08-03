'use client'

import { motion } from 'framer-motion'
import { User, Calendar, MapPin, Award, Code, Coffee } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projetos' },
    { icon: Calendar, value: '3+', label: 'Anos de Experiência' },
    { icon: Award, value: '100%', label: 'Satisfação' },
    { icon: Coffee, value: '∞', label: 'Café' },
  ]

  const skills = [
    'React/Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB',
    'Docker', 'AWS', 'Git', 'Figma', 'Tailwind CSS', 'GraphQL'
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções inovadoras e experiências únicas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-10"></div>
                <div className="relative w-full h-full glass-effect rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary-500 flex items-center justify-center">
                    <User className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 glass-effect rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Olá! Sou Veroni 👋
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. 
                Com mais de 3 anos de experiência, tenho trabalhado em diversos projetos 
                desafiadores que me permitiram desenvolver habilidades sólidas em frontend, 
                backend e DevOps.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Minha jornada na programação começou com a curiosidade de entender como 
                as coisas funcionam na web. Hoje, transformo essa paixão em soluções 
                digitais que impactam positivamente a vida das pessoas.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Disponível para novos projetos</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Tecnologias Principais</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm text-primary-200 hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              Baixar Currículo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 