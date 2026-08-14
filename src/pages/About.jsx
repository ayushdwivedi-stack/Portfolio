import { profile } from "@/data/profile"
import RevealText from "@/components/motion/RevealText"

export default function About() {
  const { about } = profile

  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="num-label mb-6">04 / ABOUT</p>
        <h1 className="mb-14 font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl">
          <RevealText>{about.headline}</RevealText>
        </h1>

        <p className="mb-20 max-w-2xl text-xl leading-relaxed text-text-dim md:text-2xl">
          {about.body}
        </p>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Education</span>
              <span className="hairline flex-1" />
            </div>
            {about.education.map((ed) => (
              <div key={ed.degree} className="mb-4">
                <p className="font-display text-lg font-medium">{ed.degree}</p>
                <p className="text-sm text-text-dim">{ed.place}</p>
                {ed.period && <p className="text-xs text-text-faint">{ed.period}</p>}
              </div>
            ))}
          </section>

          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Technical Interests</span>
              <span className="hairline flex-1" />
            </div>
            <ul className="space-y-3">
              {about.interests.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-dim">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                  {i}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Engineering Philosophy</span>
              <span className="hairline flex-1" />
            </div>
            <p className="text-sm leading-relaxed text-text-dim">{about.philosophy}</p>
          </section>

          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Current Focus</span>
              <span className="hairline flex-1" />
            </div>
            <p className="text-sm leading-relaxed text-text-dim">{about.currentFocus}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
