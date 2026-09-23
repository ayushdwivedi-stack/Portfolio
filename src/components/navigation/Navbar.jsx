import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import { navLinks } from "@/data/skills"
import { profile } from "@/data/profile"
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/BrandIcons"

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light"
    const saved = window.localStorage.getItem("theme")
    if (saved) return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("theme", theme)
  }, [theme])

  return [theme, setTheme]
}

function NavItem({ link, onClick }) {
  return (
    <Link
      to={link.path}
      onClick={onClick}
      data-cursor="interactive"
      className="text-sm font-medium text-text-dim transition-colors hover:text-text"
    >
      {link.label}
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useTheme()
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 18)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const iconButton =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-surface/70 text-text-dim transition hover:-translate-y-0.5 hover:border-border hover:text-text"

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "glass-nav border-border-soft shadow-[0_8px_30px_rgba(15,23,42,0.06)]" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-8">
          <Link
            to="/"
            data-cursor="interactive"
            className="text-sm font-semibold tracking-tight text-text"
            aria-label="Ayush Dwivedi home"
          >
            Ayush Dwivedi
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <NavItem key={link.path} link={link} />
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a className={iconButton} href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubGlyph size={16} />
            </a>
            <a className={iconButton} href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinGlyph size={16} />
            </a>
            <button
              type="button"
              className={iconButton}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-surface/70 text-text md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/96 px-6 pt-24 backdrop-blur-2xl md:hidden"
          >
            <nav className="mx-auto flex max-w-sm flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavItem link={link} onClick={() => setOpen(false)} />
                </motion.div>
              ))}
              <div className="mt-4 flex gap-3">
                <a className={iconButton} href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubGlyph size={16} />
                </a>
                <a className={iconButton} href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinGlyph size={16} />
                </a>
                <button
                  type="button"
                  className={iconButton}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
