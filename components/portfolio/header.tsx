import Image from "next/image"
import { Nav } from "./nav"
import { SocialLinks } from "./social-links"
import { TextScramble } from "./text-scramble"
import { StatusBadge } from "./status-badge"
import { ScrollReveal } from "./scroll-reveal"

export function Header() {
  return (
    <header className="flex flex-col gap-6 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:justify-between lg:py-24">
      <div className="flex flex-col gap-5">
        {/* Anime avatar */}
        <ScrollReveal delay={0}>
          <div className="relative w-28 h-28 mb-2">
            <div className="absolute inset-0 rounded-xl manga-border overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Avatar illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative corner badge */}
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rotate-3 rounded-sm" style={{ boxShadow: "2px 2px 0 hsl(190 100% 50%)" }}>
              LVL 99
            </div>
          </div>
        </ScrollReveal>

        {/* Glitch name */}
        <ScrollReveal delay={100}>
          <div className="relative">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl uppercase" style={{ textShadow: "3px 3px 0 hsl(340 90% 60% / 0.3), -1px -1px 0 hsl(190 100% 50% / 0.2)" }}>
              <TextScramble text="Alex Chen" delay={300} />
            </h1>
          </div>
        </ScrollReveal>

        {/* Title in speech bubble style */}
        <ScrollReveal delay={250}>
          <div className="relative speech-bubble inline-block bg-card border-[3px] border-primary rounded-xl px-5 py-3 max-w-fit mb-4">
            <h2 className="text-base font-bold text-secondary uppercase tracking-wider">
              Senior Frontend Engineer
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="max-w-xs text-muted-foreground leading-relaxed text-sm border-l-4 border-accent pl-4" style={{ fontStyle: "italic" }}>
            {"\"I build accessible, pixel-perfect digital experiences for the web. Let's create something amazing!\""}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div className="mt-1">
            <StatusBadge />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="mt-4">
            <Nav />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={900}>
        <SocialLinks />
      </ScrollReveal>
    </header>
  )
}
