"use client"

import React, { useEffect, useRef } from "react"

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.setProperty("--x", `${e.clientX}px`)
        ref.current.style.setProperty("--y", `${e.clientY}px`)
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor-following spotlight */}
      <div
        ref={ref}
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
        aria-hidden="true"
        style={
          {
            "--x": "50%",
            "--y": "50%",
            background: `
              radial-gradient(600px circle at var(--x) var(--y), hsl(340 90% 60% / 0.06), transparent 40%),
              radial-gradient(300px circle at var(--x) var(--y), hsl(190 100% 50% / 0.04), transparent 30%)
            `,
          } as React.CSSProperties
        }
      />
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden lg:block"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 w-full h-[2px] opacity-[0.03]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(340 90% 60%), transparent)",
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>
    </>
  )
}
