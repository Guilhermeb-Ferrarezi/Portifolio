import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Bun", "PostgreSQL", "Supabase", "Prisma", "Zod"],
  },
  {
    title: "Infra & Tooling",
    items: ["Docker", "Linux", "Git", "Neovim", "JWT", "WebSocket"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-primary-glow mb-4">
            Stack
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter">
            Ferramentas que eu <span className="text-gradient italic">domino</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              className="group relative p-8 rounded-3xl bg-gradient-card border border-border backdrop-blur-sm hover:border-primary/60 transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-hero opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  0{gi + 1}
                </p>
                <h3 className="text-2xl font-bold mb-6">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/60 border border-border text-foreground/90 hover:bg-primary/20 hover:border-primary/50 hover:text-primary-glow transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
