import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { GithubGlyph } from "@/components/ui/BrandIcons"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import RevealText from "@/components/motion/RevealText"
import MagneticButton from "@/components/motion/MagneticButton"
import TechTicker from "@/components/ui/TechTicker"
import SectionHeading from "@/components/ui/SectionHeading"
import ProjectSection from "@/components/projects/ProjectSection"
import { lazy, Suspense } from "react"
const HeroScene = lazy(() => import("@/components/three/HeroScene"))

export default function Home() {
  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 md:px-10">
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="mx-auto w-full max-w-[1600px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="num-label mb-6 uppercase"
          >
            {profile.role}
          </motion.p>

          <h1 className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <RevealText delay={0.05}>{profile.name.split(" ")[0]}</RevealText>{" "}
            <RevealText delay={0.15} className="glow-text">
              {profile.name.split(" ")[1]}
            </RevealText>
          </h1>

          <h2 className="mt-4 font-display text-[9vw] font-medium leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <RevealText delay={0.25}>I build systems</RevealText>
            <br />
            <RevealText delay={0.32}>that think, move</RevealText>
            <br />
            <RevealText delay={0.39}>&amp; ship.</RevealText>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as={Link}
              to="/projects"
              data-cursor="interactive"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em]"
              style={{ backgroundColor: "var(--color-accent)", color: "#06070a" }}
            >
              View Projects
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              <GithubGlyph size={14} />
              GitHub
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 left-6 hidden font-mono text-[11px] text-text-faint md:left-10 md:block"
        >
          SCROLL — 01 / 06
        </motion.div>
      </section>

      {/* ---- INTRODUCTION ---- */}
      <section className="border-t border-border-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="num-label">02</span>
            <span className="num-label uppercase">Introduction</span>
            <span className="hairline flex-1" />
          </div>
          <p className="max-w-4xl font-display text-3xl font-medium leading-[1.3] text-balance sm:text-4xl md:text-5xl">
            <RevealText>{profile.intro}</RevealText>
          </p>
        </div>
      </section>

      {/* ---- TECH STACK TICKER ---- */}
      <TechTicker />

      {/* ---- SELECTED PROJECTS ---- */}
      <section className="px-6 pt-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading number="03" label="Selected Work" title="Projects that ship." />
        </div>
      </section>
      <div>
        {projects.map((project, i) => (
          <ProjectSection key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="px-6 pb-24 pt-4 md:px-10">
        <div className="mx-auto flex max-w-[1600px] justify-center">
          <Link
            to="/projects"
            data-cursor="interactive"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            View all projects
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
