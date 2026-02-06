"use client"

import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "./tilt-card"

const education = [
  {
    period: "2015 - 2019",
    degree: "B.S. Computer Science",
    school: "Tokyo Institute of Technology",
    description:
      "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors. Senior thesis on accessible design patterns for complex data visualizations.",
    achievements: ["Dean's List", "Summa Cum Laude", "Best Thesis Award"],
    gpa: "3.92 / 4.0",
  },
  {
    period: "2019 - 2020",
    degree: "M.S. Software Engineering",
    school: "Stanford University",
    description:
      "Focused on distributed systems and frontend architecture at scale. Research assistant in the HCI Lab working on next-gen UI frameworks.",
    achievements: ["Graduate Fellowship", "Published 2 Papers", "TA Award"],
    gpa: "3.95 / 4.0",
  },
]

const certifications = [
  { name: "AWS Certified Developer", org: "Amazon", year: "2023" },
  { name: "Google UX Design", org: "Google", year: "2022" },
  { name: "Meta Frontend Developer", org: "Meta", year: "2022" },
  { name: "MongoDB Associate", org: "MongoDB", year: "2021" },
]

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-accent group-hover:text-primary transition-colors"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-accent">04</span>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">Education</h2>
          <span className="flex-1 h-[3px] bg-border" />
          <span className="text-xs font-mono text-primary">{"//"}</span>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-3">
        {education.map((edu, i) => (
          <ScrollReveal key={edu.degree} delay={i * 120}>
            <TiltCard>
              <div className="anime-card rounded-xl p-5 bg-card relative overflow-hidden group">
                <div className="absolute inset-0 halftone opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3 sm:grid sm:grid-cols-[140px_1fr] sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="inline-flex w-fit items-center border-2 rounded-md px-2 py-0.5 text-[10px] font-mono font-bold text-accent border-accent bg-accent/10">
                      GPA {edu.gpa}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground font-bold leading-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-secondary">{edu.school}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {edu.achievements.map((a) => (
                        <span
                          key={a}
                          className="rounded-md border-2 border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono font-bold text-primary"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="mt-6">
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
            {"// CERTIFICATIONS_UNLOCKED"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="anime-card rounded-lg p-3 bg-card flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md border-2 border-accent bg-accent/10 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <TrophyIcon />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {cert.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {cert.org} &middot; {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
