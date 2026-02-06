import { ScrollReveal } from "./scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-accent">01</span>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
            About
          </h2>
          <span className="flex-1 h-[3px] bg-border" />
          <span className="text-xs font-mono text-primary">{"//"}</span>
        </div>
      </ScrollReveal>
      <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
        <ScrollReveal delay={100}>
          <div className="anime-card rounded-xl p-5 bg-card halftone">
            <p>
              {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for "}
              <span className="text-primary font-bold">
                performance and usability
              </span>
              .
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="anime-card rounded-xl p-5 bg-card">
            <p>
              {"Currently, I'm a Senior Engineer at "}
              <a
                href="#"
                className="relative text-secondary font-bold hover:text-accent transition-colors"
              >
                Acme Corp
              </a>
              {", specializing in design systems and frontend architecture. I build and maintain the component library that powers our product suite, ensuring consistency and accessibility across every touchpoint."}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="anime-card rounded-xl p-5 bg-card">
            <p>
              {"In the past, I've had the opportunity to develop software across a variety of settings \u2014 from "}
              <span className="text-accent font-bold">early-stage startups</span>
              {" and "}
              <span className="text-secondary font-bold">design agencies</span>
              {" to "}
              <span className="text-primary font-bold">large enterprise teams</span>
              {". When I'm not at the computer, I'm usually hiking, reading, or experimenting with new recipes in the kitchen."}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
