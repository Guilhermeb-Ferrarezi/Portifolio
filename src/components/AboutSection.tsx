import { motion } from 'motion/react';
import { FadeInOnScroll } from './FadeInOnScroll';
import { Code, Zap, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Desenvolvimento Frontend',
    description: 'React, TypeScript, Tailwind CSS e ferramentas modernas para criar UIs incríveis',
  },
  {
    icon: Zap,
    title: 'Backend & APIs',
    description: 'Node.js, Python, PostgreSQL e arquitetura escalável de aplicações',
  },
  {
    icon: Lightbulb,
    title: 'Design & UX',
    description: 'Princípios de design moderno, animações fluidas e experiência do usuário',
  },
];

export function AboutSection() {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <FadeInOnScroll delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por criar soluções criativas e eficientes.
                Com mais de 5 anos de experiência, tenho trabalhado em projetos de diferentes escalas,
                desde startups até empresas de grande porte.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha abordagem combina criatividade com técnica, sempre buscando entregar código limpo,
                bem documentado e com excelente performance. Acredito que a tecnologia deve servir
                as pessoas e fazer diferença no mundo.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Quando não estou codificando, você pode me encontrar explorando novas tecnologias,
                contribuindo em projetos open source ou compartilhando conhecimento com a comunidade.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.4}>
            <div className="grid gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)' }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                        <p className="text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={0.6}>
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Tecnologias que Utilizo</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'GraphQL'].map(
                (tech) => (
                  <motion.div
                    key={tech}
                    className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30 text-center text-purple-300 font-semibold hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
