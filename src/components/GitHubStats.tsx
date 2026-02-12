import { motion } from 'motion/react';
import { FadeInOnScroll } from './FadeInOnScroll';
import { Github } from 'lucide-react';

const GITHUB_USERNAME = 'Guilhermeb-ferrarezi';

export function GitHubStats() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GitHub
          </h2>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Stats Card */}
          <FadeInOnScroll delay={0.2}>
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 block"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Meu GitHub</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Confira meus repositórios e projetos open source no GitHub
              </p>
              <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Visitar GitHub
              </button>
            </motion.a>
          </FadeInOnScroll>

          {/* GitHub Stats Image */}
          <FadeInOnScroll delay={0.4}>
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&text_color=f5f5f7&title_color=ec4899&icon_color=8b5cf6`}
                alt="GitHub Stats"
                className="w-full"
              />
            </motion.div>
          </FadeInOnScroll>
        </div>

        {/* Top Languages */}
        <FadeInOnScroll delay={0.6}>
          <motion.div
            className="mt-8 p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Linguagens Mais Usadas</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&text_color=f5f5f7&title_color=ec4899`}
              alt="Top Languages"
              className="w-full"
            />
          </motion.div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
