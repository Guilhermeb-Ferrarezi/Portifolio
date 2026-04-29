import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const items = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[min(720px,calc(100%-2rem))]" : "w-[min(820px,calc(100%-2rem))]"
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-6 px-5 py-3 rounded-full border border-border backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-background/80 shadow-card" : "bg-card/40"
        }`}
      >
        <a href="#" className="flex items-center gap-2 pl-1 font-display font-bold text-lg tracking-tight">
          <img src={logo} alt="GBF" className="h-7 w-7" />
        </a>
        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="text-xs font-mono px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
