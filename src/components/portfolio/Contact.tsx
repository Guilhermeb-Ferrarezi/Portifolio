import { motion } from "framer-motion";
import { Mail, Github, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
  { Icon: MessageCircle, label: "WhatsApp · (16) 99612-9511", href: "https://wa.me/5516996129511", primary: true },
  { Icon: Mail, label: "guilherme@guilhermebf.dev", href: "mailto:guilherme@guilhermebf.dev" },
  { Icon: Mail, label: "guibferrarezi@gmail.com", href: "mailto:guibferrarezi@gmail.com" },
  { Icon: Github, label: "Guilhermeb-Ferrarezi", href: "https://github.com/Guilhermeb-Ferrarezi" },
  { Icon: Instagram, label: "@guilherme38_38", href: "https://instagram.com/guilherme38_38" },
];

export function Contact() {
  return (
    <section id="contato" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-hero opacity-20 blur-[120px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-primary-glow mb-6">
            Contato
          </p>
          <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            Vamos tirar sua <span className="text-gradient italic">ideia</span><br />do papel?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14">
            Tenho disponibilidade pra novos projetos, parcerias e oportunidades.
            Manda uma mensagem — respondo rapidinho.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group flex items-center justify-between gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  l.primary
                    ? "sm:col-span-2 bg-gradient-hero border-transparent text-primary-foreground shadow-neon hover:scale-[1.02]"
                    : "bg-card/50 border-border hover:border-primary/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <l.Icon className="w-5 h-5" />
                  <span className="font-mono text-sm md:text-base">{l.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="relative mt-20 border-t border-border/50 pt-5 pb-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Guilherme Ferrarezi</p>
          <p>feito com <span className="text-primary-glow">♥</span> em Ribeirão Preto</p>
        </div>
      </footer>
    </section>
  );
}
