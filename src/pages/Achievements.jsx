import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { achievements, categories } from "@/data/achievements"
import SectionHeading from "@/components/ui/SectionHeading"

export default function Achievements() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? achievements : achievements.filter((a) => a.category === active)

  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading number="—" label="Track Record" title="Achievements" className="mb-10" />

        <div className="mb-14 flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="interactive"
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                active === cat
                  ? "border-accent text-accent"
                  : "border-border-soft text-text-faint hover:text-text-dim"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative border-l border-border-soft pl-8">
          {filtered.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p className="mb-1 font-mono text-[11px] uppercase tracking-wide text-text-faint">
                {a.category} {a.date && `— ${a.date}`}
              </p>
              <h3 className="mb-1 font-display text-xl font-medium">{a.title}</h3>
              {a.description && <p className="text-sm leading-relaxed text-text-dim">{a.description}</p>}
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="interactive"
                  className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-text-dim hover:text-accent"
                >
                  View <ArrowUpRight size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
