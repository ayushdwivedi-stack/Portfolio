import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX, backgroundColor: "var(--color-accent)" }}
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left"
    />
  )
}
