import { Link } from "react-router-dom"
import { profile } from "@/data/profile"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="num-label mb-3">05 / FOOTER</p>
          <Link to="/contact" className="font-display text-3xl font-medium leading-tight text-balance md:text-4xl">
            Let's build something<br />worth shipping.
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.1em] text-text-dim">
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            GitHub <ArrowUpRight size={12} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a href={profile.social.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            LeetCode <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-[1600px] font-mono text-[11px] text-text-faint">
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js &amp; Framer Motion.
      </p>
    </footer>
  )
}
