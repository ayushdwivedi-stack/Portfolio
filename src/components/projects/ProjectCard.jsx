import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.id}`}
        data-cursor="interactive"
        className="group block overflow-hidden rounded-2xl border border-border-soft bg-surface p-8 transition-colors hover:border-accent-dim"
      >
        <div className="mb-10 flex items-start justify-between">
          <span className="num-label">{project.number}</span>
          <ArrowUpRight
            size={18}
            className="text-text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
          />
        </div>
        <p className="num-label mb-3 uppercase" style={{ color: "var(--color-accent-dim)" }}>
          {project.category}
        </p>
        <h3 className="mb-4 font-display text-2xl font-medium leading-snug text-balance md:text-3xl">
          {project.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-text-dim">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-soft px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-text-faint"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
