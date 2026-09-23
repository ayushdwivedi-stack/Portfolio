import { motion } from "framer-motion"
import { BookOpen, Code2, GraduationCap, MapPin } from "lucide-react"
import { profile } from "@/data/profile"
import { skillGroups } from "@/data/skills"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

function InfoCard({ label, title, body, icon: Icon = BookOpen }) {
  return (
    <motion.article
      {...fadeUp}
      className="rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="num-label mb-2 uppercase">{label}</p>
          <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
        </div>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-soft bg-bg text-text-dim">
          <Icon size={18} />
        </span>
      </div>
      <p className="text-sm leading-6 text-text-dim">{body}</p>
    </motion.article>
  )
}

export default function About() {
  const { about } = profile

  return (
    <div className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-12 max-w-3xl">
          <p className="num-label mb-4 uppercase">About</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            {about.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-dim">{about.body}</p>
        </header>

        <section className="mb-8 grid gap-5 md:grid-cols-2">
          <InfoCard label="Location" title={profile.location} body={profile.intro} icon={MapPin} />
          <InfoCard label="Current Role" title="B.Tech Student" body={profile.institution} icon={GraduationCap} />
          <InfoCard label="What I Do" title="Build Practical Systems" body={about.philosophy} icon={Code2} />
          <InfoCard label="Currently Learning" title="AI, CV and Backend" body={about.currentFocus} icon={BookOpen} />
        </section>

        <section className="mb-8">
          <div className="mb-5">
            <p className="num-label mb-3 uppercase">Tech Stack</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em]">Tools I use to build.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                {...fadeUp}
                className="rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-dim">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-border-soft px-3 py-1 text-xs text-text-faint">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)]">
            <p className="num-label mb-4 uppercase">Education</p>
            {about.education.map((education) => (
              <div key={`${education.degree}-${education.place}`}>
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">{education.degree}</h2>
                <p className="mt-2 text-sm leading-6 text-text-dim">{education.place}</p>
                {education.period ? <p className="mt-2 text-xs font-medium text-text-faint">{education.period}</p> : null}
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)]">
            <p className="num-label mb-4 uppercase">Interests</p>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span key={interest} className="rounded-full border border-border-soft px-3 py-1.5 text-sm text-text-dim">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
