import { motion } from "framer-motion"

// Masks and reveals text without invalid block elements inside headings.
export default function RevealText({ children, className = "", delay = 0, as = "span" }) {
  const Comp = motion[as] || motion.div
  return (
    <span className="inline-block overflow-hidden align-top">
      <Comp
        className={className}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Comp>
    </span>
  )
}
