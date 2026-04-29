const words = ["fullstack", "react", "typescript", "node.js", "postgres", "docker", "ai-driven", "linux", "open source"];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="relative py-8 border-y border-border/50 bg-marquee-shift backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-color-wash" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center text-4xl md:text-6xl font-bold font-display tracking-tighter mx-8">
            <span className={i % 3 === 0 ? "text-gradient italic animate-text-shift" : "text-foreground/35 transition-colors duration-700 hover:text-primary-glow"}>
              {w}
            </span>
            <span className="text-primary mx-8 animate-star-shift">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
