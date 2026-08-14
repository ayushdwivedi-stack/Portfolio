import { motion } from "framer-motion"
import { hackathons } from "@/data/hackathons"
import SectionHeading from "@/components/ui/SectionHeading"

function HackathonItem({ hackathon, index }) {
  const hasContent = hackathon.description || hackathon.project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative grid grid-cols-1 gap-6 border-t border-border-soft py-10 first:border-t-0 md:grid-cols-[120px_1fr]"
    >
      <div>
        <p className="font-mono text-sm text-text-faint">{hackathon.year || "TBA"}</p>
        <span
          className="mt-3 inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide"
          style={{
            borderColor: hackathon.status ? "var(--color-accent-dim)" : "var(--color-border-soft)",
            color: hackathon.status ? "var(--color-accent)" : "var(--color-text-faint)",
          }}
        >
          {hackathon.status || "TBA"}
        </span>
      </div>

      <div>
        <h3 className="mb-2 font-display text-2xl font-medium md:text-3xl">{hackathon.name}</h3>
        {hackathon.role && <p className="mb-1 font-mono text-xs uppercase tracking-wide text-text-faint">{hackathon.role}</p>}
        {hackathon.mentor && (
          <p className="mb-3 text-xs text-text-faint">Faculty mentor: {hackathon.mentor}</p>
        )}
        {hasContent ? (
          <p className="max-w-2xl text-sm leading-relaxed text-text-dim">
            {hackathon.description || hackathon.project}
          </p>
        ) : (
          <p className="max-w-2xl text-sm italic leading-relaxed text-text-faint">
            Details to be added once available.
          </p>
        )}
        {hackathon.technologies?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {hackathon.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-soft px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-text-faint"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Hackathons() {
  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading number="—" label="Timeline" title="Hackathons" className="mb-8" />
        <p className="mb-4 max-w-xl text-sm text-text-faint">
          A running record of hackathon participation. Entries are updated as verified
          details become available — nothing here is invented.
        </p>
        <div>
          {hackathons.map((h, i) => (
            <HackathonItem key={h.id} hackathon={h} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
