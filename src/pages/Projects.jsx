import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import ProjectPreview from "@/components/projects/ProjectPreview"
import { projectFilters, projects } from "@/data/projects"

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.5rem] border border-border-soft bg-surface shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] ${
        featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <ProjectPreview project={project} />

      <div className="p-6 md:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="num-label">{project.number}</span>
          <span className="rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-faint">
            {project.status}
          </span>
        </div>

        <h2 className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} text-balance font-semibold tracking-[-0.04em] transition-colors group-hover:text-text-dim`}>
          {project.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-text-dim">{featured ? project.longDescription : project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, featured ? 7 : 5).map((tech) => (
            <span key={tech} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text-dim">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link to={`/projects/${project.id}`} className="group/link inline-flex items-center gap-2 text-sm font-semibold text-text">
            Read more <ArrowRight size={15} className="transition group-hover/link:translate-x-1" />
          </Link>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-text-dim hover:text-text">
              GitHub <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="text-sm font-semibold text-text-faint">
              {project.status === "Coming Soon" ? "Coming Soon" : "GitHub placeholder"}
            </span>
          )}
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-text-dim hover:text-text">
              Live Demo <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filters?.includes(activeFilter))

  const [featuredProject, ...restProjects] = visibleProjects

  return (
    <div className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-12 max-w-3xl">
          <p className="num-label mb-4 uppercase">Projects</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Product-minded projects and systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-dim">
            Compact case-study cards with real project context, status, technology and clear placeholders where links are not available.
          </p>
        </header>

        <div className="mb-9 flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                activeFilter === filter
                  ? "border-text bg-text text-bg"
                  : "border-border-soft bg-surface text-text-dim hover:border-border hover:text-text"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProject ? <ProjectCard project={featuredProject} featured /> : null}
          {restProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
