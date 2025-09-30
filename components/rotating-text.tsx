"use client"

import { useState, useEffect } from "react"

export function RotatingText() {
  const wordsWithColors = [
    { text: "Practice Ownership", bgColor: "bg-blue-500" },
    { text: "Practice Management", bgColor: "bg-purple-500" },
    { text: "Your Life", bgColor: "bg-green-500" }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsWithColors.length)
    }, 3500) // 3.5 seconds total

    return () => clearInterval(interval)
  }, [wordsWithColors.length])

  return (
    <span className="relative inline-block">
      <span
        className={`inline-block px-4 my-2 md:my-0 py-2 rounded-lg text-white font-bold transition-all duration-300 ${
          wordsWithColors[currentIndex].bgColor
        }`}
        style={{
          lineHeight: '1',
          verticalAlign: 'baseline'
        }}
      >
        {wordsWithColors[currentIndex].text}
      </span>
    </span>
  )
}