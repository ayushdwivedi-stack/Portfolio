import { motion } from "framer-motion"
import { Code2, GraduationCap, Trophy } from "lucide-react"
import { achievements } from "@/data/achievements"
import { hackathons } from "@/data/hackathons"
import { profile } from "@/data/profile"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

function EntryCard({ eyebrow, title, meta, description, tags = [], icon: Icon = Trophy }) {
  return (
    <motion.article
      {...fadeUp}
      className="rounded-[1.5rem] border border-border-soft bg-surface p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="num-label mb-2 uppercase">{eyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
          {meta ? <p className="mt-2 text-sm font-medium text-text-faint">{meta}</p> : null}
        </div>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-soft bg-bg text-text-dim">
          <Icon size={18} />
        </span>
      </div>
      <p className="text-sm leading-6 text-text-dim">{description}</p>
      {tags.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 8).map((tag) => (
            <span key={tag} className="rounded-full border border-border-soft px-3 py-1 text-xs text-text-faint">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </motion.article>
  )
}

export default function Experience() {
  return (
    <div className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-12 max-w-3xl">
          <p className="num-label mb-4 uppercase">Experience</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-dim">
            A compact record of education, hackathons, projects, coding practice and learning milestones.
          </p>
        </header>

        <section className="mb-8 grid gap-5 md:grid-cols-2">
          {profile.about.education.map((item) => (
            <EntryCard
              key={`${item.degree}-${item.place}`}
              eyebrow={item.period || "Education"}
              title={item.degree}
              meta={item.place}
              description={item.notes || profile.institution}
              tags={["Education", "Engineering", "Learning"]}
              icon={GraduationCap}
            />
          ))}
          <EntryCard
            eyebrow="Coding"
            title="LeetCode Practice"
            meta={`${profile.leetcode.totalSolved} solved · Rank ${profile.leetcode.ranking.toLocaleString("en-US")}`}
            description={`Public profile @${profile.leetcode.username}, focused on steady DSA practice and problem solving fundamentals.`}
            tags={["DSA", "C++", "Algorithms"]}
            icon={Code2}
          />
        </section>

        <section className="mb-8">
          <p className="num-label mb-5 uppercase">Hackathons</p>
          <div className="grid gap-5 md:grid-cols-2">
            {hackathons.map((hackathon) => (
              <EntryCard
                key={hackathon.id}
                eyebrow={hackathon.year || "TBA"}
                title={hackathon.name}
                meta={`${hackathon.role || "Participant"} · ${hackathon.status || "TBA"}`}
                description={hackathon.description || hackathon.project}
                tags={hackathon.technologies}
              />
            ))}
          </div>
        </section>

        <section>
          <p className="num-label mb-5 uppercase">Milestones</p>
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.slice(0, 6).map((achievement) => (
              <EntryCard
                key={achievement.id}
                eyebrow={achievement.date || achievement.category}
                title={achievement.title}
                meta={achievement.status}
                description={achievement.description}
                tags={achievement.technologies}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
