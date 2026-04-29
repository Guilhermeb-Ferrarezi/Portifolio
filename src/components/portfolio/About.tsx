import { motion } from "framer-motion";

const stats = [
  { value: "17+", label: "repositórios públicos" },
  { value: "Fullstack", label: "front + back + infra" },
  { value: "AI", label: "integrações práticas" },
  { value: "24/7", label: "aprendendo algo novo" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-primary-glow mb-4">
              Sobre
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter">
              Construo coisas <span className="text-gradient italic">do zero</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Sou desenvolvedor fullstack focado em transformar ideias em produtos reais. Trabalho com{" "}
              <span className="text-foreground font-medium">React + TypeScript</span> no front e{" "}
              <span className="text-foreground font-medium">Node.js + PostgreSQL</span> no back —
              com Docker pra automatizar tudo no meio do caminho.
            </p>
            <p>
              Atualmente tô construindo o <span className="text-primary-glow font-medium">Portal do Aluno</span> da
              Santos Tech (com auth JWT e múltiplos papéis) e um{" "}
              <span className="text-primary-glow font-medium">chatbot WhatsApp com IA</span> pra Santos Games Arena,
              uma org de esports que roda torneios em SP.
            </p>
            <p>
              Fora do trabalho, rodo <span className="text-foreground font-medium">Arch Linux + Hyprland</span>,
              passo um tempo customizando meu setup, e jogo Minecraft e Roblox quando dá.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-gradient-card border border-border backdrop-blur-sm"
                >
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
