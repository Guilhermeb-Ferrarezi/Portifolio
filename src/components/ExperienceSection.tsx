import { motion } from 'motion/react';
import { FadeInOnScroll } from './FadeInOnScroll';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    year: '2024 - Presente',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Desenvolvendo plataforma SaaS com React, Node.js e PostgreSQL. Implementando features de real-time com WebSockets.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
  },
  {
    year: '2023 - 2024',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Criação de interfaces responsivas com React e Tailwind CSS. Otimização de performance e SEO.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    year: '2022 - 2023',
    title: 'Junior Developer',
    company: 'Web Development Company',
    description: 'Aprendizado prático com JavaScript, HTML, CSS. Contribuição em projetos freelance e open source.',
    skills: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
  },
];

export function ExperienceSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
        </FadeInOnScroll>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeInOnScroll key={exp.year} delay={0.1 * index}>
                <motion.div
                  className={`relative md:w-1/2 pl-16 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-12 md:text-right'
                      : 'md:ml-auto md:pl-12'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-950 md:left-1/2 md:transform md:-translate-x-1/2" />

                  {/* Card */}
                  <motion.div
                    className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)' }}
                  >
                    <span className="text-purple-400 font-bold text-sm">{exp.year}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{exp.title}</h3>
                    <p className="text-pink-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
