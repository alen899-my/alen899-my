"use client"

import { ScrollReveal } from "./scroll-reveal"
import { useState } from "react"

type Skill = {
  name: string
  level: number
  icon: string
}

type SkillCategory = {
  label: string
  iconType: "frontend" | "backend" | "tools" | "soft"
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    iconType: "frontend",
    skills: [
      { name: "React", level: 95, icon: "react" },
      { name: "Next.js", level: 92, icon: "nextjs" },
      { name: "TypeScript", level: 90, icon: "typescript" },
      { name: "JavaScript", level: 95, icon: "javascript" },
      { name: "Vue.js", level: 75, icon: "vue" },
      { name: "HTML5", level: 98, icon: "html" },
      { name: "CSS3", level: 96, icon: "css" },
      { name: "Tailwind CSS", level: 93, icon: "tailwind" },
      { name: "Framer Motion", level: 80, icon: "framer" },
      { name: "Redux", level: 82, icon: "redux" },
      { name: "Sass", level: 88, icon: "sass" },
      { name: "Webpack", level: 78, icon: "webpack" },
    ],
  },
  {
    label: "Backend",
    iconType: "backend",
    skills: [
      { name: "Node.js", level: 88, icon: "nodejs" },
      { name: "Express", level: 85, icon: "express" },
      { name: "Python", level: 72, icon: "python" },
      { name: "PostgreSQL", level: 80, icon: "postgresql" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
      { name: "GraphQL", level: 82, icon: "graphql" },
      { name: "REST APIs", level: 90, icon: "api" },
      { name: "Prisma", level: 76, icon: "prisma" },
      { name: "Redis", level: 74, icon: "redis" },
      { name: "Firebase", level: 80, icon: "firebase" },
      { name: "Supabase", level: 85, icon: "supabase" },
      { name: "MySQL", level: 77, icon: "mysql" },
    ],
  },
  {
    label: "Tools & DevOps",
    iconType: "tools",
    skills: [
      { name: "Git", level: 92, icon: "git" },
      { name: "Docker", level: 75, icon: "docker" },
      { name: "Vercel", level: 90, icon: "vercel" },
      { name: "AWS", level: 70, icon: "aws" },
      { name: "CI/CD", level: 80, icon: "cicd" },
      { name: "Figma", level: 85, icon: "figma" },
      { name: "VS Code", level: 95, icon: "vscode" },
      { name: "Jest", level: 78, icon: "jest" },
      { name: "Linux", level: 76, icon: "linux" },
      { name: "Nginx", level: 72, icon: "nginx" },
      { name: "GitHub", level: 92, icon: "github" },
      { name: "NPM", level: 88, icon: "npm" },
    ],
  },
  {
    label: "Soft Skills",
    iconType: "soft",
    skills: [
      { name: "Leadership", level: 88, icon: "leadership" },
      { name: "Code Review", level: 92, icon: "codereview" },
      { name: "Mentoring", level: 85, icon: "mentoring" },
      { name: "Agile", level: 80, icon: "agile" },
      { name: "Communication", level: 90, icon: "communication" },
      { name: "Problem Solving", level: 95, icon: "problemsolving" },
      { name: "Accessibility", level: 88, icon: "accessibility" },
      { name: "Design Systems", level: 85, icon: "designsystems" },
      { name: "Documentation", level: 82, icon: "documentation" },
      { name: "Team Building", level: 86, icon: "teambuilding" },
      { name: "Creativity", level: 90, icon: "creativity" },
      { name: "Time Mgmt", level: 84, icon: "time" },
    ],
  },
]

function getRank(level: number): { rank: string; color: string; bg: string } {
  if (level >= 95) return { rank: "SSS", color: "text-accent", bg: "bg-accent/10 border-accent" }
  if (level >= 90) return { rank: "SS", color: "text-primary", bg: "bg-primary/10 border-primary" }
  if (level >= 85) return { rank: "S", color: "text-primary", bg: "bg-primary/10 border-primary/60" }
  if (level >= 80) return { rank: "A", color: "text-secondary", bg: "bg-secondary/10 border-secondary/60" }
  if (level >= 75) return { rank: "B", color: "text-foreground", bg: "bg-muted border-border" }
  return { rank: "C", color: "text-muted-foreground", bg: "bg-muted border-border" }
}

function SkillIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const p = { className: `${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (icon) {
    case "react":
      return <svg {...p} viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>
    case "nextjs":
      return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M8 8l8 10M16 8v8"/></svg>
    case "typescript":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11h5M10.5 11v7"/><path d="M16 11.5a2 2 0 0 1 0 3.5 2 2 0 0 1 0 3"/></svg>
    case "javascript":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M10 11v5.5a1.5 1.5 0 0 1-3 0"/><path d="M17 11.5a2 2 0 0 0-4 0c0 3 4 2 4 4.5a2 2 0 0 1-4 0"/></svg>
    case "vue":
      return <svg {...p}><path d="M2 3h4l6 10.5L18 3h4L12 21z"/><path d="M6 3l6 10.5L18 3"/></svg>
    case "html":
      return <svg {...p}><path d="M4 2l1.5 17L12 22l6.5-3L20 2z"/><path d="M8 7h8l-.5 5H9.5"/><path d="M9 15h6"/></svg>
    case "css":
      return <svg {...p}><path d="M4 2l1.5 17L12 22l6.5-3L20 2z"/><path d="M8 7h8"/><path d="M7.5 11h7l-.5 5-2 1-2-1"/></svg>
    case "tailwind":
      return <svg {...p}><path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 10.84 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.63 7.16 14.47 6 12 6z"/><path d="M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 16.84 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.63 13.16 9.47 12 7 12z"/></svg>
    case "framer":
      return <svg {...p}><path d="M5 2h14v7H5z" fill="currentColor" stroke="none" opacity="0.3"/><path d="M5 2h14v7H12L5 2z" fill="currentColor" stroke="none" opacity="0.6"/><path d="M5 9h7l7 7H5V9z" fill="currentColor" stroke="none" opacity="0.45"/><path d="M5 16h7v6l-7-6z" fill="currentColor" stroke="none"/></svg>
    case "redux":
      return <svg {...p}><circle cx="12" cy="12" r="2"/><path d="M16.5 9.5a7.5 7.5 0 0 0-13 3"/><path d="M20.5 11.5a7.5 7.5 0 0 0-6-9"/><path d="M7 17a7.5 7.5 0 0 0 12-1.5"/></svg>
    case "sass":
      return <svg {...p}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M15 8c-1.5-1-4 0-4 2s3 2 3 4-2 3-4 2"/></svg>
    case "webpack":
      return <svg {...p}><polygon points="12,2 22,7 22,17 12,22 2,17 2,7"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>
    case "nodejs":
      return <svg {...p}><polygon points="12,2 22,7.5 22,16.5 12,22 2,16.5 2,7.5"/><path d="M12 2v20"/><path d="M2 7.5L22 16.5"/><path d="M22 7.5L2 16.5"/></svg>
    case "express":
      return <svg {...p}><path d="M4 12h16"/><path d="M4 12c0 4.4 3.6 8 8 8"/><path d="M20 12c0-4.4-3.6-8-8-8"/><circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="1" fill="currentColor" stroke="none"/></svg>
    case "python":
      return <svg {...p}><path d="M12 2c-3 0-5 1.5-5 4v3h6v1H6c-2.5 0-4 2-4 5s1.5 5 4 5h2"/><path d="M12 22c3 0 5-1.5 5-4v-3h-6v-1h7c2.5 0 4-2 4-5s-1.5-5-4-5h-2"/><circle cx="9" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1" fill="currentColor" stroke="none"/></svg>
    case "postgresql":
      return <svg {...p}><ellipse cx="12" cy="6" rx="8" ry="4"/><path d="M4 6v6c0 2.2 3.6 4 8 4s8-1.8 8-4V6"/><path d="M4 12v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6"/></svg>
    case "mongodb":
      return <svg {...p}><path d="M12 2v20"/><path d="M12 2c-3 3-6 6-6 11 0 4 2.7 7.5 6 9"/><path d="M12 2c3 3 6 6 6 11 0 4-2.7 7.5-6 9"/></svg>
    case "graphql":
      return <svg {...p}><polygon points="12,3 20.5,8 20.5,16 12,21 3.5,16 3.5,8"/><circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none"/><circle cx="20.5" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="20.5" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none"/><circle cx="3.5" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="3.5" cy="8" r="1.5" fill="currentColor" stroke="none"/></svg>
    case "api":
      return <svg {...p}><path d="M4 6h16M4 12h16M4 18h8"/><circle cx="18" cy="18" r="3"/><path d="M18 16v4M16 18h4"/></svg>
    case "prisma":
      return <svg {...p}><path d="M12 2L3 20h13l2-4"/><path d="M12 2l8 14"/><path d="M6 18h10"/></svg>
    case "redis":
      return <svg {...p}><polygon points="12,2 2,7 12,12 22,7"/><path d="M2 7v5l10 5 10-5V7"/><path d="M2 12v5l10 5 10-5v-5"/></svg>
    case "firebase":
      return <svg {...p}><path d="M5 20L8.5 3.5 12 12l3-5 4 12.5z"/><path d="M5 20h14"/></svg>
    case "supabase":
      return <svg {...p}><path d="M12 2l-8 9h8l-2 11 10-13h-8z"/></svg>
    case "mysql":
      return <svg {...p}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/><path d="M4 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4"/></svg>
    case "git":
      return <svg {...p}><circle cx="12" cy="12" r="3"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M9.5 9.5L7.5 7.5"/><path d="M14.5 14.5l2 2"/></svg>
    case "docker":
      return <svg {...p}><rect x="2" y="10" width="4" height="3" rx="0.5"/><rect x="7" y="10" width="4" height="3" rx="0.5"/><rect x="12" y="10" width="4" height="3" rx="0.5"/><rect x="7" y="6" width="4" height="3" rx="0.5"/><rect x="12" y="6" width="4" height="3" rx="0.5"/><path d="M2 14c0 0 2 4 10 4s10-4 10-4"/></svg>
    case "vercel":
      return <svg {...p}><polygon points="12,3 22,20 2,20" fill="currentColor" stroke="none"/></svg>
    case "aws":
      return <svg {...p}><path d="M4 16c2 2 5 3 8 3s6-1 8-3"/><path d="M3 12l3-7 3 7"/><path d="M4.5 10h3"/><path d="M12 5l2.5 7h-5z"/><path d="M18 12l-1.5-4L18 5l1.5 3L18 12z"/></svg>
    case "cicd":
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 6 15.5"/><path d="M18 18.5l-1-3 3-1"/><path d="M12 21a9 9 0 0 1-6-15.5"/><path d="M6 5.5l1 3-3 1"/></svg>
    case "figma":
      return <svg {...p}><circle cx="15" cy="12" r="3"/><path d="M12 3H9a3 3 0 0 0 0 6h3"/><path d="M12 3h3a3 3 0 0 1 0 6h-3"/><path d="M12 9H9a3 3 0 0 0 0 6h3"/><path d="M12 15H9a3 3 0 0 0 0 6h3"/><path d="M12 9v12"/></svg>
    case "vscode":
      return <svg {...p}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 7l6 5-6 5"/><path d="M13 17h4"/></svg>
    case "jest":
      return <svg {...p}><circle cx="12" cy="8" r="5"/><path d="M7 13l5 3 5-3"/><circle cx="9" cy="19" r="2"/><circle cx="15" cy="19" r="2"/></svg>
    case "linux":
      return <svg {...p}><circle cx="12" cy="7" r="4"/><circle cx="10.5" cy="6" r="0.7" fill="currentColor" stroke="none"/><circle cx="13.5" cy="6" r="0.7" fill="currentColor" stroke="none"/><path d="M10 8.5c.7.5 1.3.5 2 .5s1.3 0 2-.5"/><path d="M8 11c-2 1.5-3 4-3 6 0 2 1 3 3 3h1"/><path d="M16 11c2 1.5 3 4 3 6 0 2-1 3-3 3h-1"/><path d="M9 20h6"/></svg>
    case "nginx":
      return <svg {...p}><polygon points="12,2 22,7 22,17 12,22 2,17 2,7"/><path d="M7 16V8l10 8V8"/></svg>
    case "github":
      return <svg {...p}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.59.67.5A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor" stroke="none"/></svg>
    case "npm":
      return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M7 9v6"/><path d="M7 15h3V9"/><path d="M13 9v6"/><path d="M13 9h4v3h-2v3"/></svg>
    case "leadership":
      return <svg {...p}><polygon points="12,2 15.5,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 8.5,9"/></svg>
    case "codereview":
      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="8 10 10 12 8 14"/><line x1="13" y1="14" x2="17" y2="14"/></svg>
    case "mentoring":
      return <svg {...p}><circle cx="9" cy="7" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 13.5c2 .5 3.5 2 3.5 4.5v3"/></svg>
    case "agile":
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 8 13"/><path d="M20 16l-2-3 3-1"/><path d="M8 7h4v4"/></svg>
    case "communication":
      return <svg {...p}><path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-8-5l-1 4"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 8 5l1-4"/></svg>
    case "problemsolving":
      return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="3"/></svg>
    case "accessibility":
      return <svg {...p}><circle cx="12" cy="4" r="2"/><path d="M12 6v6"/><path d="M8 10l4 2 4-2"/><path d="M9 20l3-6 3 6"/></svg>
    case "designsystems":
      return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
    case "documentation":
      return <svg {...p}><path d="M4 4h16v16H4z" rx="2"/><path d="M8 8h8"/><path d="M8 12h6"/><path d="M8 16h4"/></svg>
    case "teambuilding":
      return <svg {...p}><circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><circle cx="12" cy="16" r="3"/><path d="M7 11v0"/><path d="M17 11v0"/></svg>
    case "creativity":
      return <svg {...p}><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5.5 4.5 6.5V18h5v-2.5C17 14.5 19 12 19 9a7 7 0 0 0-7-7z"/><path d="M9 21h6"/><path d="M10 18h4"/></svg>
    case "time":
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>
    default:
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><circle cx="12" cy="16" r="0.5" fill="currentColor"/></svg>
  }
}

function CategoryIcon({ type }: { type: string }) {
  const p = { viewBox: "0 0 24 24", className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  switch (type) {
    case "frontend":
      return <svg {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    case "backend":
      return <svg {...p}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>
    case "tools":
      return <svg {...p}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    case "soft":
      return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    default:
      return null
  }
}

function SkillCard({ skill }: { skill: Skill }) {
  const { rank, color, bg } = getRank(skill.level)
  return (
    <div className="group relative anime-card rounded-xl bg-card p-3 flex flex-col items-center gap-2 cursor-default overflow-hidden">
      <div className="absolute inset-0 halftone opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative">
        <div className={`w-12 h-12 rounded-lg border-2 ${bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
          <SkillIcon icon={skill.icon} className="w-6 h-6" />
        </div>
        <span className={`absolute -top-1.5 -right-2 text-[8px] font-mono font-bold border rounded px-1 py-px ${bg} ${color}`}>
          {rank}
        </span>
      </div>
      <span className="text-[10px] font-mono font-bold text-foreground text-center leading-tight relative">
        {skill.name}
      </span>
      <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${skill.level}%`,
            background: skill.level >= 90
              ? "linear-gradient(90deg, hsl(340 90% 60%), hsl(50 100% 55%))"
              : skill.level >= 80
                ? "linear-gradient(90deg, hsl(190 100% 50%), hsl(190 80% 65%))"
                : "hsl(240 10% 35%)",
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const allSkills = skillCategories.flatMap((c) => c.skills)
  const totalAvg = Math.round(allSkills.reduce((s, sk) => s + sk.level, 0) / allSkills.length)

  return (
    <section id="skills" className="scroll-mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-accent">03</span>
          <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">Skill Tree</h2>
          <span className="flex-1 h-[3px] bg-border" />
          <span className="text-xs font-mono text-muted-foreground">{totalAvg}% AVG</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="flex flex-wrap gap-2 mb-5">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 transition-all duration-300 ${
                activeTab === i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              style={activeTab === i ? { boxShadow: "3px 3px 0 hsl(340 90% 60% / 0.4)" } : undefined}
            >
              <CategoryIcon type={cat.iconType} />
              {cat.label}
              <span className="text-[9px] opacity-60">({cat.skills.length})</span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3">
          {skillCategories[activeTab].skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mt-6 anime-card rounded-xl bg-card p-4 relative overflow-hidden">
          <div className="absolute inset-0 halftone opacity-30" />
          <p className="relative text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
            {"// ALL_EQUIPPED_SKILLS"}
          </p>
          <div className="relative flex flex-wrap gap-1.5">
            {allSkills.map((skill) => {
              const { color, bg } = getRank(skill.level)
              return (
                <span
                  key={skill.name}
                  className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-bold transition-all duration-300 hover:scale-105 cursor-default ${bg} ${color}`}
                >
                  {skill.name}
                </span>
              )
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
