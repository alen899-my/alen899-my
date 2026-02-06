import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"

const projects = [
  {
    title: "Pulse Analytics",
    description:
      "A real-time SaaS analytics dashboard built for product teams. Features interactive charts, funnel analysis, and cohort tracking.",
    image: "/projects/project-1.jpg",
    url: "#",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    badge: "NEW",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    title: "FitTrack Mobile",
    description:
      "A cross-platform fitness tracking app with workout logging, progress visualization, and personalized training plans.",
    image: "/projects/project-2.jpg",
    url: "#",
    technologies: ["React Native", "TypeScript", "Supabase", "Expo"],
    badge: "FEATURED",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    title: "Maison Noir",
    description:
      "An elegant e-commerce storefront for a luxury fashion brand. Features a headless CMS and seamless checkout experience.",
    image: "/projects/project-3.jpg",
    url: "#",
    technologies: ["Next.js", "Shopify", "Sanity", "Framer Motion"],
    badge: "COLLAB",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    title: "DevCanvas",
    description:
      "An interactive code playground and portfolio builder for developers. Supports live previews and one-click deployment.",
    image: "/projects/project-4.jpg",
    url: "#",
    technologies: ["React", "Monaco Editor", "WebContainers", "Vercel"],
    badge: "OSS",
    badgeColor: "bg-primary text-primary-foreground",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-accent">05</span>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
            Projects
          </h2>
          <span className="flex-1 h-[3px] bg-border" />
          <span className="text-xs font-mono text-primary">{"//"}</span>
        </div>
      </ScrollReveal>
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 120}>
            <TiltCard>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group anime-card block rounded-xl bg-card relative overflow-hidden"
              >
                {/* Project image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  {/* Badge */}
                  <div className={`absolute top-3 left-3 ${project.badgeColor} px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md`} style={{ boxShadow: "2px 2px 0 hsl(240 12% 8% / 0.5)" }}>
                    {project.badge}
                  </div>
                </div>
                {/* Content */}
                <div className="relative p-5">
                  <div className="absolute inset-0 halftone opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-2">
                    <h3 className="text-foreground font-bold text-lg leading-tight flex items-center gap-1 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-[-2px] transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies.map((tech) => (
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
    </section>
  )
}
