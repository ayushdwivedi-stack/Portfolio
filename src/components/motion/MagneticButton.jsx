import { useRef, useState } from "react"
import { motion } from "framer-motion"

// Subtle magnetic pull toward the cursor on hover. Disabled on touch via CSS media query fallback.
export default function MagneticButton({ children, className = "", as: Tag = "button", ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setPos({ x: x * 0.25, y: y * 0.25 })
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 })
  }

  const MotionTag = motion(Tag)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
