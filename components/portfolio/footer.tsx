import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer className="pb-16 pt-12">
      <ScrollReveal>
        <div className="anime-card rounded-xl p-6 bg-card halftone">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-3 w-3 rounded-sm bg-primary" />
            <span className="h-3 w-3 rounded-sm bg-secondary" />
            <span className="h-3 w-3 rounded-sm bg-accent" />
            <span className="flex-1 h-[2px] bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground">v1.0.0</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {"Loosely designed in "}
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-accent transition-colors"
            >
              Figma
            </a>
            {" and coded in "}
            <a
              href="https://code.visualstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:text-accent transition-colors"
            >
              Visual Studio Code
            </a>
            {". Built with "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-accent transition-colors"
            >
              Next.js
            </a>
            {" and "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:text-accent transition-colors"
            >
              Tailwind CSS
            </a>
            {", deployed with "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-accent transition-colors"
            >
              Vercel
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-muted-foreground/60">
            <span>{"// END_TRANSMISSION"}</span>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}
