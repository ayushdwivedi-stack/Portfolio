import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

// Branching diagram for the Offline AI Assistant: User -> Assistant -> Orchestrator -> [tools] -> Local LLM -> Response
export default function OrchestratorDiagram({ architecture }) {
  const { flow, branches, tail } = architecture

  const Node = ({ children, accent = false, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-xl border px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.08em] ${
        accent ? "border-accent-dim text-text" : "border-border-soft text-text-dim"
      } bg-surface`}
    >
      {children}
    </motion.div>
  )

  return (
    <div className="flex flex-col items-center gap-3">
      <Node accent>User</Node>
      <ArrowDown size={16} className="text-text-faint" />
      {flow.map((step) => (
        <div key={step} className="flex flex-col items-center gap-3">
          <Node>{step}</Node>
          <ArrowDown size={16} className="text-text-faint" />
        </div>
      ))}

      <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {branches.map((b, i) => (
          <Node key={b} delay={i * 0.05}>
            {b}
          </Node>
        ))}
      </div>
      <ArrowDown size={16} className="text-text-faint" />
      {tail.map((step) => (
        <div key={step} className="flex flex-col items-center gap-3">
          <Node accent>{step}</Node>
          {step !== tail[tail.length - 1] && <ArrowDown size={16} className="text-text-faint" />}
        </div>
      ))}
    </div>
  )
}
