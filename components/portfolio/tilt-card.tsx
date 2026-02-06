"use client"

import React, { useRef, useState, type ReactNode, type MouseEvent } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [glare, setGlare] = useState<React.CSSProperties>({})

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -8
    const rotateY = (x - 0.5) * 8

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    })

    setGlare({
      opacity: 0.15,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, hsl(340 90% 60% / 0.2), hsl(190 100% 50% / 0.05), transparent 60%)`,
      transition: "opacity 0.1s ease-out",
    })
  }

  function handleLeave() {
    setStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    })
    setGlare({
      opacity: 0,
      transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl z-10"
        style={glare}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
