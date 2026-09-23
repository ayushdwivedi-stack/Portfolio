import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Mail } from "lucide-react"
import { profile } from "@/data/profile"
import RevealText from "@/components/motion/RevealText"
import MagneticButton from "@/components/motion/MagneticButton"
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/BrandIcons"

const links = [
  { label: "GitHub", href: profile.social.github, icon: GithubGlyph },
  { label: "LinkedIn", href: profile.social.linkedin, icon: LinkedinGlyph },
  { label: "LeetCode", href: profile.social.leetcode, icon: Code2 },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: this form is UI-only — no backend/email service is wired up yet.
    // Wire this to a real endpoint (e.g. Formspree, Resend, or a serverless
    // function) before relying on it to actually deliver messages.
    setSubmitted(true)
  }

  return (
    <div className="px-6 pb-28 pt-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="num-label mb-6">CONTACT</p>
        <h1 className="mb-16 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-balance md:text-7xl">
          <RevealText>Let's build</RevealText>
          <br />
          <RevealText delay={0.08}>something</RevealText>
          <br />
          <RevealText delay={0.16}>
            worth shipping.
          </RevealText>
        </h1>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Direct</span>
              <span className="hairline flex-1" />
            </div>
            <div className="flex flex-col gap-4">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="interactive"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-border-soft bg-surface px-6 py-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex items-center gap-3 font-mono text-sm">
                    <Mail size={16} /> {profile.email}
                  </span>
                  <ArrowUpRight size={16} className="text-text-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </a>
              )}
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="interactive"
                  className="group flex items-center justify-between rounded-[1.5rem] border border-border-soft bg-surface px-6 py-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="flex items-center gap-3 font-mono text-sm uppercase tracking-wide">
                    <Icon size={16} /> {label}
                  </span>
                  <ArrowUpRight size={16} className="text-text-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="num-label uppercase">Message</span>
              <span className="hairline flex-1" />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[1.5rem] border border-border-soft bg-surface p-8 shadow-[var(--shadow-soft)]"
              >
                <p className="font-display text-lg">Thanks for reaching out.</p>
                <p className="mt-2 text-sm text-text-faint">
                  Note: this form isn't wired to an email service yet — please also reach out via GitHub or LinkedIn directly for now.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-[1rem] border border-border-soft bg-surface px-5 py-4 text-sm outline-none transition-colors focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-[1rem] border border-border-soft bg-surface px-5 py-4 text-sm outline-none transition-colors focus:border-accent"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none rounded-[1rem] border border-border-soft bg-surface px-5 py-4 text-sm outline-none transition-colors focus:border-accent"
                />
                <MagneticButton
                  onClick={handleSubmit}
                  data-cursor="interactive"
                  className="inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}
                >
                  Send Message
                  <ArrowUpRight size={14} />
                </MagneticButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
