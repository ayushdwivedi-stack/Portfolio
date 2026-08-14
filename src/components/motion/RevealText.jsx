import { motion } from "framer-motion"

// Masks and reveals text line-by-line on scroll into view.
export default function RevealText({ children, className = "", delay = 0, as = "div" }) {
  const Comp = motion[as] || motion.div
  return (
    <span className="inline-block overflow-hidden align-top">
      <Comp
        className={className}
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Comp>
    </span>
  )
}
