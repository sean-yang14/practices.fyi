import React from "react"
import { Instagram, Mail } from "lucide-react"

export function DetailedFooter() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full px-6 pt-10 pb-12">
        <div className="mx-auto max-w-6xl text-sm text-gray-600">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://www.instagram.com/practices.fyi/"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-700 transition-colors hover:border-orange-200 hover:text-orange-600"
                aria-label="Practices.fyi on Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:info@practices.fyi"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-700 transition-colors hover:border-orange-200 hover:text-orange-600"
              >
                <Mail className="h-4 w-4" />
                info@practices.fyi
              </a>
            </div>
            <p className="text-center text-gray-500">
              Copyright 2026 Practices.fyi. All rights reserved.
            </p>
          </div>
        </div>
        <h2
          className="mt-10 w-full text-center font-extrabold leading-none text-[clamp(2.25rem,9vw,8.5rem)] tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.22em]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #e2e8f0 0, #e2e8f0 2px, #ffffff 2px, #ffffff 6px)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          practices.fyi
        </h2>
      </div>
    </footer>
  )
}
