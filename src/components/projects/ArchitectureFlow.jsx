import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

// Renders a linear pipeline (array of strings) as connected nodes.
// direction: "horizontal" | "vertical"
export default function ArchitectureFlow({ steps, direction = "horizontal" }) {
  const isRow = direction === "horizontal"
  return (
    <div
      className={`flex ${isRow ? "flex-row flex-wrap items-center" : "flex-col items-start"} gap-3`}
    >
      {steps.map((step, i) => (
        <div key={step} className={`flex items-center ${isRow ? "" : "flex-col items-start"} gap-3`}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-xl border border-border-soft bg-surface px-4 py-3 font-mono text-xs uppercase tracking-[0.08em] text-text-dim"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            isRow ? (
              <ArrowRight size={16} className="shrink-0 text-text-faint" />
            ) : (
              <ArrowDown size={16} className="shrink-0 text-text-faint" />
            )
          )}
        </div>
      ))}
    </div>
  )
}
