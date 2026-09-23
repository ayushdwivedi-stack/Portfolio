import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, GraduationCap, MapPin, Sparkles } from "lucide-react"
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/BrandIcons"
import ProjectPreview from "@/components/projects/ProjectPreview"
import { blogPosts } from "@/data/blog"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"

const fadeUp = {
  initial: { opacity: 0, y: 22, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function SectionIntro({ eyebrow, title, body, action }) {
  return (
    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="num-label mb-3 uppercase">{eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
        {body ? <p className="mt-4 text-base leading-7 text-text-dim">{body}</p> : null}
      </div>
      {action}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group overflow-hidden rounded-[1.5rem] border border-border-soft bg-surface shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <ProjectPreview project={project} />
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="num-label">{project.number}</span>
          <span className="rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-faint">
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-text-dim">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-dim">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text-dim">
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text">
          Read more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function ArticleCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="mb-5 aspect-[16/9] rounded-[1.15rem] border border-border-soft" style={{ background: post.cover }} />
      <div className="mb-4 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-faint">
        <span>{post.category}</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-text-dim">{post.title}</h3>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-dim">{post.description}</p>
    </Link>
  )
}

export default function Home() {
  const selectedProjects = projects.slice(0, 3)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[min(48rem,100vw)] -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-text)_8%,transparent)] blur-3xl"
          animate={{ x: [0, 12, -8, 0], y: [0, 10, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="mx-auto grid min-h-[82vh] max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/70 px-4 py-2 text-sm font-medium text-text-dim shadow-sm backdrop-blur">
              <Sparkles size={15} /> Hi, I&apos;m {profile.name}
            </p>
            <h1 className="text-balance text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-text">
              I build things for the web.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-dim md:text-xl">
              {profile.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                View projects <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5"
              >
                Read writing <BookOpen size={16} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-text-dim">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> B.Tech 2024 - 2028</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[410px] lg:justify-self-end"
          >
            <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle_at_35%_20%,color-mix(in_srgb,var(--color-text)_12%,transparent),transparent_52%),linear-gradient(135deg,var(--color-surface),var(--color-surface-2))] blur-sm" />
            <motion.div
              className="relative h-full overflow-hidden rounded-full border border-border-soft bg-surface p-3 shadow-[var(--shadow-lift)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={profile.image}
                alt="Ayush Dwivedi"
                className="h-full w-full rounded-full object-cover object-[62%_46%]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeUp} className="px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px] rounded-[1.75rem] border border-border-soft bg-surface p-7 shadow-[var(--shadow-soft)] md:p-10">
          <p className="num-label mb-4 uppercase">Short About</p>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {profile.about.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-dim">{profile.intro}</p>
            </div>
            <Link to="/about" className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:bg-text hover:text-bg">
              More about me <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Selected Projects"
            title="Compact product work, not giant placeholders."
            body="A quick preview of the broader project archive."
            action={
              <Link to="/projects" className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:bg-text hover:text-bg">
                View all projects <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Latest Writing"
            title="Notes on AI, systems and development."
            body="Only the latest few articles live here. The full publication-style archive is on the blog page."
            action={
              <Link to="/blog" className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:bg-text hover:text-bg">
                View all writing <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-[980px] rounded-[1.75rem] border border-border-soft bg-text p-8 text-bg shadow-[var(--shadow-lift)] md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.13em] opacity-70">Contact</p>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Have an idea? Let&apos;s build something great.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5">
              Contact me <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-bg/20 px-6 py-3 text-sm font-semibold text-bg/85 hover:text-bg">
              <GithubGlyph size={16} /> GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-bg/20 px-6 py-3 text-sm font-semibold text-bg/85 hover:text-bg">
              <LinkedinGlyph size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
