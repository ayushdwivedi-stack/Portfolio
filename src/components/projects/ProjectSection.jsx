import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

// Large cinematic project block used on the Home page — alternates
// text/visual side on even/odd index for editorial rhythm.
export default function ProjectSection({ project, index }) {
  const reversed = index % 2 === 1

  return (
    <div className="border-t border-border-soft py-20 first:border-t-0 md:py-28">
      <div
        className={`mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="num-label">{project.number}</span>
            <span className="num-label uppercase" style={{ color: "var(--color-accent-dim)" }}>
              {project.category}
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-display text-4xl font-medium leading-[1.05] text-balance md:text-5xl"
          >
            {project.title}
          </motion.h3>

          <p className="mb-8 max-w-md text-base leading-relaxed text-text-dim">
            {project.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-soft px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-text-faint"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            to={`/projects/${project.id}`}
            data-cursor="interactive"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-text transition-colors hover:text-accent"
          >
            View case study
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <Link to={`/projects/${project.id}`} data-cursor="interactive" className="group block">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(211,162,92,0.12), transparent 55%), linear-gradient(160deg, var(--color-surface), var(--color-bg))",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-faint">
                {project.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-dim to-transparent opacity-40" />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
