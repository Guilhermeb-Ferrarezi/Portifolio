import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Bot,
  Maximize2,
  X,
  Terminal,
  Sparkles,
  Images,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import portalScreenshot from "@/assets/portal.png";
import portalScreenshot2 from "@/assets/portal2.png";
import portalScreenshot3 from "@/assets/portal3.png";
import lumenbleScreenshot from "@/assets/lumenble.png";
import lumenbleScreenshot2 from "@/assets/lumenble2.png";
import lumenbleScreenshot3 from "@/assets/lumenble3.png";
import sgaScreenshot from "@/assets/ia-sga.png";
import sgaScreenshot2 from "@/assets/ia-sga2.png";
import setupVideo from "@/assets/setup.mp4";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  icon: LucideIcon;
  accent: string;
  screenshots?: {
    label: string;
    src: string;
    alt: string;
  }[];
  video?: {
    label: string;
    src: string;
    poster?: string;
  };
  highlights?: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
};

const projects: Project[] = [
  {
    name: "Portal do Aluno",
    tagline: "Plataforma educacional multi-papel",
    description:
      "Sistema completo da Santos Tech com acesso para admin, professor e aluno. Gestão de cursos, turmas e matrículas, com fluxo de auth via JWT e API em Express.",
    tags: ["React", "Express", "PostgreSQL", "Docker", "JWT"],
    href: "https://github.com/Guilhermeb-Ferrarezi/Portal-do-aluno",
    featured: true,
    icon: GraduationCap,
    accent: "from-primary to-primary-glow",
    screenshots: [
      {
        label: "Painel administrativo",
        src: portalScreenshot,
        alt: "Portal do Aluno - painel administrativo",
      },
      {
        label: "Visao de turmas e operacao",
        src: portalScreenshot2,
        alt: "Portal do Aluno - visao de turmas e operacao",
      },
      {
        label: "Fluxo de conteudo e exercicios",
        src: portalScreenshot3,
        alt: "Portal do Aluno - fluxo de conteudo e exercicios",
      },
    ],
    highlights: [
      {
        title: "Admin",
        description:
          "Opero a parte administrativa: turmas, usuarios, exercicios, matriculas e visao de saude da plataforma.",
        icon: ShieldCheck,
      },
      {
        title: "Estudantes",
        description:
          "Tambem trabalho na experiencia dos alunos/clientes, do acesso ao conteudo ate a entrega dos exercicios.",
        icon: Users,
      },
    ],
  },
  {
    name: "SGA Chatbot IA",
    tagline: "WhatsApp Business + LLM para esports",
    description:
      "Chatbot inteligente da Santos Games Arena integrado ao WhatsApp. Usa OpenAI/Claude pra qualificar leads, responder sobre torneios, processar áudios e autenticar usuários.",
    tags: ["Node.js", "OpenAI", "WhatsApp", "Docker"],
    href: "https://github.com/Guilhermeb-Ferrarezi/sga-ia2",
    featured: true,
    icon: Bot,
    accent: "from-accent to-primary-glow",
    screenshots: [
      {
        label: "Atendimento com IA",
        src: sgaScreenshot,
        alt: "SGA Chatbot IA - atendimento com IA",
      },
      {
        label: "Fluxo de conversa no WhatsApp",
        src: sgaScreenshot2,
        alt: "SGA Chatbot IA - fluxo de conversa no WhatsApp",
      },
    ],
  },
  {
    name: "Lumenble",
    tagline: "Experiência web em TypeScript",
    description:
      "Projeto recente explorando arquitetura moderna em TypeScript, com foco em UI fluida e organização de código escalável.",
    tags: ["TypeScript", "React", "CSS"],
    href: "https://github.com/Guilhermeb-Ferrarezi/lumenble",
    icon: Sparkles,
    accent: "from-primary-glow to-accent",
    screenshots: [
      {
        label: "Interface principal",
        src: lumenbleScreenshot,
        alt: "Lumenble - interface principal",
      },
      {
        label: "Estado de criacao",
        src: lumenbleScreenshot2,
        alt: "Lumenble - estado de criacao",
      },
      {
        label: "Preview da experiencia",
        src: lumenbleScreenshot3,
        alt: "Lumenble - preview da experiencia",
      },
    ],
  },
  {
    name: "Dotfiles — Arch + Hyprland",
    tagline: "Minha rice completa de Linux",
    description:
      "Configuração end-to-end do meu setup: Hyprland, scripts, tema, atalhos e tudo que faz o ambiente voar.",
    tags: ["Shell", "Linux", "Hyprland"],
    href: "https://github.com/Guilhermeb-Ferrarezi/dotfiles",
    icon: Terminal,
    accent: "from-primary-glow to-primary",
    video: {
      label: "Setup em uso",
      src: setupVideo,
    },
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  const Icon = project.icon;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          aria-label={`Abrir detalhes do ${project.name}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
          className={`group relative block w-full p-8 rounded-3xl bg-gradient-card border border-border backdrop-blur-sm hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 text-left cursor-pointer ${
            isFeatured ? "md:col-span-2" : ""
          }`}
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-hero opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} p-[1.5px] shadow-glow`}
              >
                <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-glow" strokeWidth={1.75} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary-glow transition-colors">
                <Images className="w-4 h-4" />
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-primary-glow/80 mb-2">
              {project.tagline}
            </p>
            <h3
              className={`font-bold mb-3 group-hover:text-gradient transition-all tracking-tight ${
                isFeatured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`text-muted-foreground leading-relaxed mb-6 ${
                isFeatured ? "text-base md:text-lg max-w-2xl" : "text-sm"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/60 border border-border text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      </DialogTrigger>
      <ProjectDialog project={project} />
    </Dialog>
  );
}

function ProjectDialog({ project }: { project: Project }) {
  const Icon = project.icon;
  const [fullscreenImage, setFullscreenImage] = useState<Project["screenshots"][number] | null>(null);

  return (
    <>
      <DialogContent className="max-h-[88vh] max-w-5xl overflow-y-auto rounded-3xl border-border bg-background/95 p-0 shadow-card backdrop-blur-xl">
        <div className="grid gap-8 p-6 md:p-8">
          <DialogHeader className="gap-4 pr-8">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} p-[1.5px] shadow-glow`}
            >
              <div className="w-full h-full rounded-2xl bg-background/80 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary-glow" strokeWidth={1.75} />
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary-glow/80 mb-3">
                {project.tagline}
              </p>
              <DialogTitle className="text-3xl md:text-5xl font-bold tracking-tight">
                {project.name}
              </DialogTitle>
              <DialogDescription className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {project.description}
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/60 border border-border text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.highlights ? (
            <div className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((highlight) => {
                const HighlightIcon = highlight.icon;
                return (
                  <div key={highlight.title} className="rounded-2xl border border-border bg-secondary/35 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <HighlightIcon className="h-5 w-5 text-primary-glow" />
                      <h4 className="text-lg font-bold">{highlight.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          ) : null}

          <div className="grid gap-4">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-xl font-bold">Midia do projeto</h4>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-mono text-foreground transition-colors hover:border-primary/60 hover:text-primary-glow"
              >
                <Github className="h-4 w-4" />
                abrir repositorio no github
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {project.video ? (
              <figure className="overflow-hidden rounded-2xl border border-border bg-secondary/30">
                <video
                  src={project.video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-black object-cover"
                />
                <figcaption className="border-t border-border px-4 py-3 text-sm font-mono text-muted-foreground">
                  {project.video.label}
                </figcaption>
              </figure>
            ) : null}

            {project.screenshots?.length ? (
              <div className="grid gap-4">
                {project.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.label}
                    className="overflow-hidden rounded-2xl border border-border bg-secondary/30"
                  >
                    <button
                      type="button"
                      onClick={() => setFullscreenImage(screenshot)}
                      className="group/image relative block w-full cursor-zoom-in text-left"
                      aria-label={`Abrir ${screenshot.label} em tela cheia`}
                    >
                      <img src={screenshot.src} alt={screenshot.alt} className="w-full object-cover" />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-mono text-foreground opacity-0 backdrop-blur transition-opacity group-hover/image:opacity-100">
                        <Maximize2 className="h-3.5 w-3.5" />
                        tela cheia
                      </span>
                    </button>
                    <figcaption className="border-t border-border px-4 py-3 text-sm font-mono text-muted-foreground">
                      {screenshot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : !project.video ? (
              <div className="rounded-2xl border border-dashed border-border bg-secondary/25 p-8 text-center text-sm text-muted-foreground">
                Screenshot ainda nao anexado neste portfolio.
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>

      {fullscreenImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={fullscreenImage.label}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Fechar imagem em tela cheia"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-full" onClick={(event) => event.stopPropagation()}>
            <img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm font-mono text-zinc-300">
              {fullscreenImage.label}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-primary-glow mb-4">
              Projetos
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tighter max-w-2xl">
              Coisas que <span className="text-gradient italic">construí</span>.
            </h2>
          </div>
          <a
            href="https://github.com/Guilhermeb-Ferrarezi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary-glow transition-colors group"
          >
            <Github className="w-4 h-4" />
            ver tudo no github
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
