import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"

const experiences = [
  {
    period: "2023 \u2014 Present",
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct Acme\u2019s frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Storybook"],
    rank: "S",
  },
  {
    period: "2021 \u2014 2023",
    title: "Frontend Developer",
    company: "Nebula Studios",
    companyUrl: "#",
    description:
      "Developed and styled interactive web applications for a diverse range of clients, including healthcare platforms and fintech dashboards.",
    technologies: ["JavaScript", "TypeScript", "React", "SCSS", "GraphQL"],
    rank: "A",
  },
  {
    period: "2019 \u2014 2021",
    title: "UI Engineer",
    company: "Pixel & Code",
    companyUrl: "#",
    description:
      "Developed, maintained, and shipped production code for client websites. Worked alongside a small team of designers and developers.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "WordPress"],
    rank: "A",
  },
  {
    period: "2018 \u2014 2019",
    title: "Web Developer Intern",
    company: "StartupHub",
    companyUrl: "#",
    description:
      "Assisted with development of internal tools and contributed to the company\u2019s public-facing website. Gained hands-on experience with modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    rank: "B",
  },
]

const rankColors: Record<string, string> = {
  S: "text-accent border-accent bg-accent/10",
  A: "text-primary border-primary bg-primary/10",
  B: "text-secondary border-secondary bg-secondary/10",
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-accent">02</span>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
            Experience
          </h2>
          <span className="flex-1 h-[3px] bg-border" />
          <span className="text-xs font-mono text-primary">{"//"}</span>
        </div>
      </ScrollReveal>
      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.title + exp.company} delay={i * 100}>
            <TiltCard>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group anime-card block rounded-xl p-5 bg-card relative overflow-hidden"
              >
                {/* Halftone pattern on hover */}
                <div className="absolute inset-0 halftone opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3 sm:grid sm:grid-cols-[140px_1fr] sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      {exp.period}
                    </span>
                    {/* Rank badge */}
                    <span
                      className={`inline-flex w-fit items-center justify-center border-2 rounded-md px-2 py-0.5 text-xs font-mono font-bold ${rankColors[exp.rank]}`}
                    >
                      RANK {exp.rank}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground font-bold leading-tight flex items-center gap-1 group-hover:text-primary transition-colors">
                      {exp.title} &middot; {exp.company}
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border-2 border-border bg-muted px-2.5 py-0.5 text-[11px] font-mono font-bold text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={400}>
        <a
          href="/resume.pdf"
          className="group mt-8 inline-flex items-center gap-2 border-2 border-primary rounded-lg px-5 py-2.5 text-sm font-bold text-primary uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          style={{ boxShadow: "3px 3px 0 hsl(190 100% 50% / 0.3)" }}
        >
          View Full Resume
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </ScrollReveal>
    </section>
  )
}
