import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"

export default function Footer() {
  const links = [
    ["GitHub", profile.social.github],
    ["LinkedIn", profile.social.linkedin],
    ["Email", `mailto:${profile.email}`],
  ]

  return (
    <footer className="border-t border-border-soft px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="text-lg font-semibold tracking-[-0.02em] text-text">
            {profile.name}
          </Link>
          <p className="mt-2 text-sm text-text-dim">Building things for the web.</p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-text-dim">
          <Link to="/blog" className="hover:text-text">Blog</Link>
          {links.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-1 hover:text-text">
              {label} <ArrowUpRight size={13} />
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1180px] text-xs text-text-faint">
        Copyright {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Framer Motion.
      </p>
    </footer>
  )
}
