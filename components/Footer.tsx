'use client'

import { motion } from 'framer-motion'
import { Code, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Tutoriais', href: '#tutorials' },
        { name: 'Stack', href: '#stack' },
        { name: 'Contato', href: '#contact' },
      ]
    },
    {
      title: 'Projetos',
      links: [
        { name: 'Web Apps', href: '#projects' },
        { name: 'Mobile Apps', href: '#projects' },
        { name: 'Full Stack', href: '#projects' },
        { name: 'Open Source', href: '#' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '#tutorials' },
        { name: 'Tutoriais', href: '#tutorials' },
        { name: 'Currículo', href: '#' },
        { name: 'Portfólio', href: '#projects' },
      ]
    }
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contato@veroni.dev', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-max">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <Code className="w-8 h-8 text-primary-500" />
                  <span className="text-2xl font-bold gradient-text">Veroni</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Desenvolvedor full stack apaixonado por criar experiências digitais 
                  incríveis e soluções inovadoras que fazem a diferença.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-dark-600 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Veroni. Todos os direitos reservados.
            </motion.p>
            

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 