"use client"

import { useEffect, useState, useCallback } from "react"

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

export function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  const scramble = useCallback(() => {
    let iteration = 0
    const length = text.length
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      iteration += 1 / 2
      if (iteration >= length) {
        setDisplayed(text)
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
      scramble()
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, scramble])

  if (!started) {
    return (
      <span className={className} style={{ visibility: "hidden" }}>
        {text}
      </span>
    )
  }

  return <span className={className}>{displayed}</span>
}
