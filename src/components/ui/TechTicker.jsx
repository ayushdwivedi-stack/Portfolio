import { techTicker } from "@/data/skills"

// Horizontal auto-scrolling marquee, duplicated for a seamless loop.
export default function TechTicker() {
  const items = [...techTicker, ...techTicker]
  return (
    <div className="relative overflow-hidden border-y border-border-soft py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-sm uppercase tracking-[0.12em] text-text-dim"
          >
            {item} <span style={{ color: "var(--color-accent-dim)" }}>/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
