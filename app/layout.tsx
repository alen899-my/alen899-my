import React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, Space_Mono } from "next/font/google"

import "./globals.css"

const _outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const _spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Alex Chen // Full-Stack Developer",
  description:
    "Full-stack developer building polished, accessible digital experiences for the web.",
}

export const viewport: Viewport = {
  themeColor: "#13111c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${_outfit.variable} ${_spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
