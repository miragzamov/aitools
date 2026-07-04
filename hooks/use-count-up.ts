"use client"

import { useEffect, useState } from "react"

export function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (target === 0) return

    let current = 0
    const increment = target / (duration / 50)

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
        return
      }
      setCount(Math.floor(current))
    }, 50)

    return () => clearInterval(timer)
  }, [target, duration])

  return count
}
