import { motion } from 'motion/react';
import { Github, Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-purple-400/20 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Guilherme
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Desenvolvedor full stack criando experiências digitais incríveis com as melhores tecnologias.
            </p>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Projetos', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Guilhermeb-ferrarezi' },
                { Icon: Instagram, href: 'https://instagram.com/guilherme38_38' },
                { Icon: Mail, href: 'mailto:guibferrarezi@gmail.com' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/40 transition-all duration-300 border border-purple-400/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Dev Portfolio. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com{' '}
            <span className="text-pink-400">♥</span> usando React, Tailwind CSS e Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
