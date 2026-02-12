import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Guilherme Barbosa Ferrarezi
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '#projects'}>
            Ver Projetos
          </button>
          <button className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '#contact'}>
            Contato
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8"
        >
          <ArrowDown className="mx-auto text-purple-400 opacity-60 w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
