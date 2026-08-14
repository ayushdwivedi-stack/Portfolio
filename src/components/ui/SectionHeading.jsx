import RevealText from "@/components/motion/RevealText"

// Editorial section heading: mono number label + large display title.
export default function SectionHeading({ number, label, title, className = "" }) {
  return (
    <div className={className}>
      <div className="mb-4 flex items-center gap-3">
        {number && <span className="num-label">{number}</span>}
        {label && <span className="num-label uppercase">{label}</span>}
        <span className="hairline flex-1" />
      </div>
      <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
        <RevealText>{title}</RevealText>
      </h2>
    </div>
  )
}
