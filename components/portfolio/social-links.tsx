import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Magnetic } from "./magnetic"

const links = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "mailto:hello@alexchen.dev", label: "Email", icon: Mail },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <Magnetic key={link.label} strength={0.4}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 w-11 items-center justify-center rounded-lg border-2 border-border text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary hover:bg-primary/10"
            aria-label={link.label}
            style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <link.icon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-sm bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </Magnetic>
      ))}
    </div>
  )
}
