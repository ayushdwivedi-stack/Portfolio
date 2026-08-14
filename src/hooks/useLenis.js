import { useEffect, useRef } from "react"
import Lenis from "lenis"

// Sets up smooth scrolling. Respects prefers-reduced-motion by skipping
// entirely and falling back to native scroll behavior.
export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const raf_id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(raf_id)
      lenis.destroy()
    }
  }, [])

  return lenisRef
}
