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
import { useReducedMotion } from "@/hooks/useReducedMotion"

const HeroScene = lazy(() => import("@/components/three/HeroScene"))

function AnimatedName({ name }) {
  const reduced = useReducedMotion()

  return (
    <motion.h1
      aria-label={name}
      className="group max-w-5xl select-none font-display text-5xl font-medium leading-[0.9] text-text min-[390px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]"
      initial={reduced ? false : "hidden"}
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.08,
            staggerChildren: 0.035,
          },
        },
      }}
    >
      {name.split(" ").map((word, wordIndex) => (
        <motion.span
          aria-hidden="true"
          className="mr-[0.18em] inline-block whitespace-nowrap last:mr-0"
          key={word}
        >
          {word.split("").map((char, charIndex) => {
            const letterIndex = wordIndex * 8 + charIndex

            return (
              <motion.span
                key={`${char}-${charIndex}`}
                className="inline-block"
                data-cursor="interactive"
                variants={{
                  hidden: { opacity: 0, y: 48, rotateX: -65 },
                  show: { opacity: 1, y: 0, rotateX: 0 },
                }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -10,
                        rotate: letterIndex % 2 === 0 ? -2.5 : 2.5,
                        color: "var(--color-accent)",
                        transition: { duration: 0.18 },
                      }
                }
              >
                {char}
              </motion.span>
            )
          })}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default function Home() {
  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 md:px-10">

        {/* 3D background */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="mx-auto w-full max-w-[1600px]">

          {/* Small identity label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="num-label mb-6 uppercase"
          >
            {profile.role}
          </motion.p>

          {/* Name */}
          <AnimatedName name={profile.name} />

          {/* Main statement */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl font-display text-2xl font-medium italic leading-snug text-text-dim text-balance sm:text-3xl md:text-4xl"
          >
            "I turn ideas into intelligent systems."
          </motion.p>

          {/* Supporting information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint"
          >
            <span>AI / ML</span>
            <span>·</span>
            <span>Computer Vision</span>
            <span>·</span>
            <span>Cybersecurity</span>
            <span>·</span>
            <span>Software Systems</span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as={Link}
              to="/projects"
              data-cursor="interactive"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em]"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#0b0a08",
              }}
            >
              View Work
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
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

          {/* Current work */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 max-w-sm border-l border-border pl-4"
          >
            <p className="num-label mb-2 uppercase">
              Currently Building
            </p>

            <p className="font-display text-lg leading-tight text-text">
              Offline AI Study Assistant
            </p>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-text-faint">
              Qwen3 · Ollama · RAG
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- INTRODUCTION ---- */}
      <section className="border-t border-border-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-6 flex items-center gap-3">
            <span className="num-label">02</span>
            <span className="num-label uppercase">
              Introduction
            </span>
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
          <SectionHeading
            number="03"
            label="Selected Work"
            title="Projects that ship."
          />
        </div>
      </section>

      <div>
        {projects.map((project, i) => (
          <ProjectSection
            key={project.id}
            project={project}
            index={i}
          />
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

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </div>
  )
}
