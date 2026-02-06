"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "about", label: "ABOUT", number: "01" },
  { id: "experience", label: "EXPERIENCE", number: "02" },
  { id: "skills", label: "SKILL TREE", number: "03" },
  { id: "education", label: "EDUCATION", number: "04" },
  { id: "projects", label: "PROJECTS", number: "05" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" },
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="hidden lg:flex flex-col gap-1"
      aria-label="In-page navigation"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
              isActive
                ? "bg-primary/15 text-primary border-l-4 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-4 border-transparent hover:border-secondary/50"
            }`}
          >
            <span
              className={`transition-colors duration-300 ${
                isActive ? "text-accent" : "text-muted-foreground/50 group-hover:text-secondary"
              }`}
            >
              {section.number}
            </span>
            <span
              className={`block h-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? "w-6 bg-primary"
                  : "w-3 bg-muted-foreground/30 group-hover:w-6 group-hover:bg-secondary"
              }`}
            />
            <span>{section.label}</span>
            {isActive && (
              <span className="ml-auto text-[10px] text-primary/70">{"<"}</span>
            )}
          </a>
        )
      })}
    </nav>
  )
}
