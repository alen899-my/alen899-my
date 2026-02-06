import { Header } from "@/components/portfolio/header"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { Footer } from "@/components/portfolio/footer"
import { Spotlight } from "@/components/portfolio/spotlight"
import { Grain } from "@/components/portfolio/grain"

export default function Page() {
  return (
    <>
      <Spotlight />
      <Grain />

      {/* Floating decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
        {/* Top-right cross */}
        <div
          className="absolute top-20 right-12 text-primary/10 text-6xl font-bold select-none hidden lg:block"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          +
        </div>
        {/* Bottom-left triangle */}
        <div
          className="absolute bottom-32 left-8 w-12 h-12 border-[3px] border-secondary/10 rotate-45 hidden lg:block"
          style={{ animation: "float 8s ease-in-out infinite 1s" }}
        />
        {/* Mid-right circle */}
        <div
          className="absolute top-1/2 right-20 w-8 h-8 rounded-full border-[3px] border-accent/10 hidden lg:block"
          style={{ animation: "float 7s ease-in-out infinite 2s" }}
        />
        {/* Small dots */}
        <div
          className="absolute top-40 left-1/3 w-2 h-2 rounded-full bg-primary/15 hidden lg:block"
          style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary/10 hidden lg:block"
          style={{ animation: "float 9s ease-in-out infinite 3s" }}
        />
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Header />
          <main className="flex flex-col gap-24 pt-12 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  )
}
