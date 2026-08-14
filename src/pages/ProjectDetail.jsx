import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { GithubGlyph } from "@/components/ui/BrandIcons"
import { getProjectById, projects } from "@/data/projects"
import ArchitectureFlow from "@/components/projects/ArchitectureFlow"
import OrchestratorDiagram from "@/components/projects/OrchestratorDiagram"
import RevealText from "@/components/motion/RevealText"

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) return <Navigate to="/projects" replace />

  const idx = projects.findIndex((p) => p.id === id)
  const next = projects[(idx + 1) % projects.length]

  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <Link
          to="/projects"
          data-cursor="interactive"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-text-dim transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> All Projects
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="num-label">{project.number}</span>
          <span className="num-label uppercase" style={{ color: "var(--color-accent-dim)" }}>
            {project.category}
          </span>
        </div>

        <h1 className="mb-8 font-display text-5xl font-medium leading-[1.03] text-balance md:text-7xl">
          <RevealText>{project.title}</RevealText>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-text-dim">
          {project.longDescription}
        </p>

        <div className="mb-16 flex flex-wrap items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] hover:border-accent hover:text-accent"
            >
              <GithubGlyph size={14} /> Source
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-text-faint">
              <GithubGlyph size={14} /> Source — coming soon
            </span>
          )}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] hover:border-accent hover:text-accent"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : null}
        </div>

        <div className="mb-16 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="mb-20 aspect-[16/8] rounded-2xl border border-border-soft"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(94,231,255,0.10), transparent 55%), linear-gradient(160deg, #0d0f12, #08090b)",
          }}
        />

        {/* ---- Architecture ---- */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="num-label">ARCHITECTURE</span>
            <span className="hairline flex-1" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border-soft bg-surface p-8">
            {Array.isArray(project.architecture) ? (
              <ArchitectureFlow steps={project.architecture} direction="horizontal" />
            ) : (
              <OrchestratorDiagram architecture={project.architecture} />
            )}
          </div>
        </section>

        {/* ---- Rate limiter algorithms ---- */}
        {project.algorithms && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <span className="num-label">RATE LIMITING STRATEGIES</span>
              <span className="hairline flex-1" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.algorithms.map((algo) => (
                <div key={algo.name} className="rounded-2xl border border-border-soft bg-surface p-6">
                  <h4 className="mb-2 font-display text-lg font-medium">{algo.name}</h4>
                  <p className="text-sm leading-relaxed text-text-dim">{algo.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border-soft bg-surface p-6">
              <span className="rounded-full border border-danger/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--color-danger)" }}>
                HTTP 429 — Too Many Requests
              </span>
              <p className="text-sm text-text-dim">Returned when a client exceeds its configured limit.</p>
            </div>
          </section>
        )}

        {/* ---- Features ---- */}
        <section className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label">FEATURES</span>
              <span className="hairline flex-1" />
            </div>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-text-dim">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label">CHALLENGES</span>
              <span className="hairline flex-1" />
            </div>
            <p className="text-sm leading-relaxed text-text-dim">{project.challenges}</p>
            {project.outcome && (
              <>
                <div className="mb-4 mt-8 flex items-center gap-3">
                  <span className="num-label">OUTCOME</span>
                  <span className="hairline flex-1" />
                </div>
                <p className="text-sm leading-relaxed text-text-dim">{project.outcome}</p>
              </>
            )}
          </div>
        </section>

        {/* ---- Next project ---- */}
        <Link
          to={`/projects/${next.id}`}
          data-cursor="interactive"
          className="group flex items-center justify-between rounded-2xl border border-border-soft bg-surface px-8 py-8 transition-colors hover:border-accent-dim"
        >
          <div>
            <p className="num-label mb-2">NEXT PROJECT</p>
            <p className="font-display text-2xl font-medium md:text-3xl">{next.title}</p>
          </div>
          <ArrowUpRight
            size={24}
            className="text-text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
          />
        </Link>
      </div>
    </div>
  )
}
