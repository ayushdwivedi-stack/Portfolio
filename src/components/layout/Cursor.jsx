import { useEffect, useRef, useState } from "react"
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice"

// Small dot + trailing outer ring. Expands over interactive elements.
// Disabled entirely on touch devices.
export default function Cursor() {
  const isTouch = useIsTouchDevice()
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [active, setActive] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (isTouch) return
    const ring = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    function onMove(e) {
      setHidden(false)
      target.x = e.clientX
      target.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const interactive = el?.closest("a, button, [data-cursor='interactive']")
      setActive(Boolean(interactive))
    }

    let raf
    function loop() {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", () => setHidden(true))
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] hidden md:block ${hidden ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: active ? 52 : 28,
          height: active ? 52 : 28,
          borderColor: active ? "var(--color-accent)" : "var(--color-border)",
        }}
      />
    </div>
  )
}
