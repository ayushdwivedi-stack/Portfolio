import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { GithubGlyph } from "@/components/ui/BrandIcons"
import { getProjectById, projects } from "@/data/projects"
import ArchitectureFlow from "@/components/projects/ArchitectureFlow"
import OrchestratorDiagram from "@/components/projects/OrchestratorDiagram"
import ProjectPreview from "@/components/projects/ProjectPreview"
import RevealText from "@/components/motion/RevealText"

function DetailBlock({ title, children }) {
  return (
    <section className="rounded-[1.5rem] border border-border-soft bg-surface p-6 md:p-8">
      <p className="num-label mb-4 uppercase">{title}</p>
      <div className="text-base leading-7 text-text-dim">{children}</div>
    </section>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) return <Navigate to="/projects" replace />

  const idx = projects.findIndex((p) => p.id === id)
  const next = projects[(idx + 1) % projects.length]
  const progressTitle = project.status === "Completed" ? "Outcome" : "Current Progress"

  return (
    <div className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <Link
          to="/projects"
          data-cursor="interactive"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-text-dim transition-colors hover:text-text"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <header className="mb-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="num-label">{project.number}</span>
            <span className="num-label uppercase">{project.category}</span>
            <span className="rounded-full border border-border-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-text-dim">
              {project.status}
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            <RevealText>{project.title}</RevealText>
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-text-dim">
            {project.longDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="interactive"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-text hover:text-bg"
              >
                <GithubGlyph size={14} /> GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-text-faint">
                <GithubGlyph size={14} /> GitHub placeholder
              </span>
            )}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                data-cursor="interactive"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-text hover:text-bg"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3 text-sm font-semibold text-text-faint">
                {project.status === "Coming Soon" ? "Coming Soon" : "Live demo placeholder"}
              </span>
            )}
          </div>
        </header>

        <div className="mb-14 overflow-hidden rounded-[1.5rem] border border-border-soft bg-surface shadow-[var(--shadow-soft)] md:max-w-4xl">
          <ProjectPreview project={project} />
          <div className="p-6 md:p-8">
            <p className="num-label mb-3 uppercase">Project Preview</p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">{project.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-text-dim">{project.description}</p>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border-soft px-3 py-1.5 text-xs font-medium text-text-dim"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mb-14 grid gap-5 md:grid-cols-2">
          <DetailBlock title="Overview">
            <p>{project.description}</p>
          </DetailBlock>
          <DetailBlock title="Problem">
            <p>{project.problem}</p>
          </DetailBlock>
          <DetailBlock title="Solution">
            <p>{project.solution}</p>
          </DetailBlock>
          <DetailBlock title={progressTitle}>
            <p>{project.outcome || project.statusNote}</p>
          </DetailBlock>
        </div>

        {project.architecture ? (
          <section className="mb-14 rounded-[1.5rem] border border-border-soft bg-surface p-6 md:p-8">
            <p className="num-label mb-6 uppercase">Architecture</p>
            <div className="overflow-x-auto rounded-2xl border border-border-soft bg-bg/70 p-6">
              {Array.isArray(project.architecture) ? (
                <ArchitectureFlow steps={project.architecture} direction="horizontal" />
              ) : (
                <OrchestratorDiagram architecture={project.architecture} />
              )}
            </div>
          </section>
        ) : null}

        {project.algorithms ? (
          <section className="mb-14 rounded-[1.5rem] border border-border-soft bg-surface p-6 md:p-8">
            <p className="num-label mb-6 uppercase">Rate Limiting Strategies</p>
            <div className="grid gap-4 md:grid-cols-3">
              {project.algorithms.map((algorithm) => (
                <div key={algorithm.name} className="rounded-2xl border border-border-soft bg-bg/70 p-5">
                  <h3 className="mb-2 text-lg font-semibold tracking-[-0.03em]">{algorithm.name}</h3>
                  <p className="text-sm leading-6 text-text-dim">{algorithm.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mb-14 grid gap-5 md:grid-cols-2">
          <DetailBlock title="Features">
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-text" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock title="What I Learned">
            <p>{project.learned}</p>
          </DetailBlock>
        </section>

        <section className="mb-14 rounded-[1.5rem] border border-border-soft bg-surface p-6 md:p-8">
          <p className="num-label mb-6 uppercase">Links</p>
          <div className="flex flex-wrap gap-4">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-text">
                GitHub <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="text-sm font-semibold text-text-faint">GitHub URL placeholder</span>
            )}
            {project.liveDemo ? (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-text">
                Live Demo <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="text-sm font-semibold text-text-faint">{project.status === "Coming Soon" ? "Coming Soon" : "Live demo URL placeholder"}</span>
            )}
          </div>
        </section>

        <Link
          to={`/projects/${next.id}`}
          data-cursor="interactive"
          className="group flex items-center justify-between rounded-[1.5rem] border border-border-soft bg-surface px-7 py-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
        >
          <div>
            <p className="num-label mb-2 uppercase">Next Project</p>
            <p className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{next.title}</p>
          </div>
          <ArrowRight size={22} className="text-text transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
