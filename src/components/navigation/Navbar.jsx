import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { navLinks } from "@/data/skills"
import MagneticButton from "@/components/motion/MagneticButton"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            to="/"
            className="font-display text-sm font-semibold tracking-[0.08em] text-text"
            data-cursor="interactive"
          >
            AYUSH<span style={{ color: "var(--color-accent)" }}>.DEV</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  data-cursor="interactive"
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] transition-colors ${
                      isActive ? "text-text" : "text-text-dim hover:text-text"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span style={{ color: "var(--color-accent)" }}>{link.number}</span>
                      <span className="uppercase">{link.label}</span>
                      <span
                        className="absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300"
                        style={{
                          width: isActive ? "100%" : "0%",
                          backgroundColor: "var(--color-accent)",
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton
              as={Link}
              to="/contact"
              data-cursor="interactive"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-text transition-colors hover:border-accent hover:text-accent"
              style={{ "--tw-border-opacity": 1 }}
            >
              Let's Connect
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center rounded-full border border-border p-2.5 text-text md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 font-display text-4xl font-medium text-text"
                  >
                    <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>
                      {link.number}
                    </span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--color-accent)" }}
                >
                  Let's Connect <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
