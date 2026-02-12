import { motion } from 'motion/react';
import { FadeInOnScroll } from './FadeInOnScroll';
import { Mail, Instagram, Github, }  from 'lucide-react';
import { useState } from 'react';
import { useToast } from './ToastProvider';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    showToast('Mensagem enviada com sucesso! 🎉', 'success');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
     { icon: Github, href: 'https://github.com/Guilhermeb-ferrarezi', label: 'GitHub' },
     { icon: Instagram, href: 'https://instagram.com/guilherme38_38', label: 'Instagram' },

  ];

  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
            Vamos Trabalhar Juntos
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Sinta-se livre para entrar em contato!
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formulário */}
          <FadeInOnScroll delay={0.3}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-xl border border-purple-400/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-white font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  placeholder="Seu nome..."
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  placeholder="Seu email..."
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Mensagem Enviada!' : 'Enviar Mensagem'}
              </motion.button>
            </motion.form>
          </FadeInOnScroll>

          {/* Informações de contato */}
          <FadeInOnScroll delay={0.4}>
            <div className="space-y-8">
              <motion.div
                className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a href="mailto:guibferrarezi@gmail.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                  Meu email
                </a>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/40 transition-all duration-300 border border-purple-400/30"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-400/20"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
                <p className="text-purple-300">Brasil 🇧🇷</p>
              </motion.div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
