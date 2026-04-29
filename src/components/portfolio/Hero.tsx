import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5516996129511";

type TerminalLine = {
  kind: "command" | "output" | "empty";
  text?: string;
};

const terminalScript: TerminalLine[] = [
  { kind: "command", text: "apresentar guilherme" },
  { kind: "output", text: "Oi, eu sou o Guilherme Barbosa Ferrarezi." },
  { kind: "empty" },
  { kind: "command", text: "o que voce faz?" },
  { kind: "output", text: "Eu construo sites, sistemas e automacoes que resolvem problemas reais." },
  { kind: "output", text: "Cuido da interface, do servidor, do banco de dados e vários outras coisas." },
  { kind: "empty" },
  { kind: "command", text: "mostrar exemplos" },
  { kind: "output", text: "Portal do Aluno, chatbot com IA para WhatsApp, dashboards e projetos web." },
  { kind: "empty" },
  { kind: "command", text: "posso te chamar?" },
  { kind: "output", text: "Sim. Estou aceitando projetos e posso conversar sobre sua ideia." },
];

function TypewriterTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const line = terminalScript[lineIndex];

    if (!line) {
      setDone(true);
      return;
    }

    if (line.kind === "empty") {
      const timeout = window.setTimeout(() => {
        setLineIndex((current) => current + 1);
        setCharIndex(0);
      }, 180);

      return () => window.clearTimeout(timeout);
    }

    const text = line.text ?? "";

    if (charIndex < text.length) {
      const timeout = window.setTimeout(() => {
        setCharIndex((current) => current + 1);
      }, line.kind === "command" ? 42 : 18);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setLineIndex((current) => current + 1);
      setCharIndex(0);
    }, line.kind === "command" ? 420 : 260);

    return () => window.clearTimeout(timeout);
  }, [charIndex, done, lineIndex]);

  const visibleLines = terminalScript.slice(0, lineIndex);
  const currentLine = terminalScript[lineIndex];

  return (
    <div className="space-y-1.5 text-[13px] leading-6 text-zinc-300 md:text-[15px] md:leading-7">
      {visibleLines.map((line, index) => (
        <TerminalRow key={`${line.kind}-${index}`} line={line} />
      ))}
      {currentLine && currentLine.kind !== "empty" && (
        <TerminalRow
          line={currentLine}
          text={(currentLine.text ?? "").slice(0, charIndex)}
          showCursor
        />
      )}
      {done && (
        <div className="flex items-center">
          <span className="mr-2 font-bold text-[#78ff73]">&gt;&gt;</span>
          <span className="h-5 w-[2px] animate-pulse bg-zinc-100" />
        </div>
      )}
    </div>
  );
}

function TerminalRow({
  line,
  text = line.text ?? "",
  showCursor = false,
}: {
  line: TerminalLine;
  text?: string;
  showCursor?: boolean;
}) {
  if (line.kind === "empty") {
    return <div className="h-4" />;
  }

  if (line.kind === "command") {
    return (
      <div className="flex min-w-0 items-start">
        <span className="mr-2 shrink-0 font-bold text-[#78ff73]">&gt;&gt;</span>
        <span className="break-words text-zinc-100">
          {text}
          {showCursor && <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-zinc-100" />}
        </span>
      </div>
    );
  }

  return (
    <div className="min-w-0 pl-7 text-zinc-400">
      <span className="break-words">
        {text}
        {showCursor && <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-zinc-100" />}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] font-mono text-sm text-zinc-200">
      <h1 className="sr-only">Guilherme Ferrarezi - Fullstack dev</h1>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_43%_8%,rgba(138,28,70,0.24),transparent_25%),radial-gradient(ellipse_at_48%_63%,rgba(95,18,43,0.32),transparent_38%),linear-gradient(180deg,#070707_0%,#080609_78%,#12050a_100%)]" />
        <div className="absolute left-[28%] top-[35%] h-[16%] w-[44%] rounded-[50%] bg-black/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(164,17,65,0.42),transparent_62%)] blur-xl" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[9px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:100%_4px] opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-6 pt-28 md:px-10 md:pt-20"
      >
        <div className="max-w-[min(920px,calc(100vw-3rem))]">
          <p className="mb-4 max-w-xl text-sm leading-6 text-zinc-500 md:text-base">
            Uma apresentacao em formato de shell, mas sem precisar entender shell.
          </p>
          <div className="text-base md:text-lg leading-7 text-zinc-100">
            <span className="font-bold text-[#78ff73]">guilherme</span>
            <span className="text-zinc-200"> in </span>
            <span className="font-bold text-zinc-100">portfolio</span>
            <span className="text-zinc-200"> in </span>
            <span className="text-zinc-100">~</span>
          </div>
          <div className="mt-2 min-h-[360px] md:min-h-[390px]">
            <TypewriterTerminal />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.45 }}
        className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-4 text-xs text-zinc-400 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#projetos" className="group inline-flex items-center gap-2 text-zinc-100 transition-colors hover:text-[#78ff73]">
            <span className="text-[#78ff73]">&gt;&gt;</span>
            Ver projetos
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#78ff73]">
            <MessageCircle className="h-3.5 w-3.5" />
            Chamar no WhatsApp
          </a>
          <a href="https://github.com/Guilhermeb-Ferrarezi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#78ff73]">
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a href="https://instagram.com/guilherme38_38" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#78ff73]">
            <Instagram className="h-3.5 w-3.5" />
            Instagram
          </a>
        </div>

        <div className="flex items-center gap-2 text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#78ff73]" />
          Vamos tirar sua ideia do papel · {new Date().getFullYear()}
        </div>
      </motion.div>
    </section>
  );
}
