import { motion } from 'motion/react';
import { FadeInOnScroll } from './FadeInOnScroll';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de e-commerce moderna com React, Node.js e MongoDB',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab6c3c537?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicação de gerenciamento de tarefas com sincronização em tempo real',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Assistente de chat com inteligência artificial e processamento de linguagem natural',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    image: 'https://images.unsplash.com/photo-1677442d019cecf8e5c4b4c0027b01bb1120dd51?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Sistema de design completo com componentes reutilizáveis',
    tags: ['React', 'TypeScript', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    link: '#',
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-lg text-gray-400 mb-16 max-w-2xl">
            Confira alguns dos meus projetos recentes onde apliquei tecnologias modernas e boas práticas de desenvolvimento
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeInOnScroll key={project.id} delay={0.1 * index}>
              <motion.div
                className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl overflow-hidden border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
