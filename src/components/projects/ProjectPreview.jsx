function ResumePreview() {
  return (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-4">
      <div className="rounded-2xl border border-border-soft bg-bg p-4">
        <div className="mb-4 h-4 w-20 rounded-full bg-text" />
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-text-faint/40" />
          <div className="h-2 w-4/5 rounded-full bg-text-faint/40" />
          <div className="h-2 w-2/3 rounded-full bg-text-faint/40" />
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-8 rounded-xl border border-border-soft bg-surface" />
          <div className="h-8 rounded-xl border border-border-soft bg-surface" />
        </div>
      </div>
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <p className="num-label mb-4 uppercase">Analysis</p>
        <div className="space-y-3">
          <div className="h-3 rounded-full bg-text" />
          <div className="h-3 w-4/5 rounded-full bg-text-dim/50" />
          <div className="h-3 w-3/5 rounded-full bg-text-dim/35" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <div className="h-12 rounded-xl bg-bg" />
          <div className="h-12 rounded-xl bg-bg" />
        </div>
      </div>
    </div>
  )
}

function McpPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid w-full max-w-md grid-cols-3 items-center gap-3">
        {["AI", "MCP", "Tools"].map((label, index) => (
          <div key={label} className="relative rounded-2xl border border-border-soft bg-bg p-5 text-center">
            <p className="text-lg font-semibold tracking-[-0.03em]">{label}</p>
            {index < 2 ? <span className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 text-text-faint">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function RateLimiterPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {[0, 1, 2, 3].map((row) => (
        <div key={row} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="h-3 rounded-full bg-text-faint/35" />
          <div className="rounded-full border border-border-soft px-3 py-1 text-xs font-semibold">{row === 3 ? "429" : "OK"}</div>
          <div className={`h-3 rounded-full ${row === 3 ? "bg-text" : "bg-text-faint/35"}`} />
        </div>
      ))}
    </div>
  )
}

function VisionPreview() {
  return (
    <div className="grid h-full grid-cols-[1fr_0.8fr] gap-4">
      <div className="grid grid-cols-6 gap-2 rounded-2xl border border-border-soft bg-bg p-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square rounded-full ${[7, 8, 14, 20].includes(index) ? "bg-text" : "bg-text-faint/25"}`}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <p className="num-label mb-5 uppercase">Inspection</p>
        <div className="space-y-3">
          <div className="h-3 rounded-full bg-text" />
          <div className="h-3 w-4/5 rounded-full bg-text-faint/40" />
          <div className="h-3 w-2/3 rounded-full bg-text-faint/30" />
        </div>
      </div>
    </div>
  )
}

function AssistantPreview() {
  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <div className="rounded-2xl border border-border-soft bg-bg p-4">
        <p className="num-label mb-4 uppercase">Local</p>
        <div className="space-y-2">
          <div className="h-10 rounded-xl bg-surface" />
          <div className="h-10 rounded-xl bg-surface" />
          <div className="h-10 rounded-xl bg-surface" />
        </div>
      </div>
      <div className="rounded-2xl border border-border-soft bg-surface p-4">
        <p className="num-label mb-4 uppercase">Tools</p>
        <div className="grid grid-cols-2 gap-2">
          {["PDF", "OCR", "Math", "Voice"].map((label) => (
            <div key={label} className="rounded-xl bg-bg px-3 py-4 text-center text-xs font-semibold">
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EmbeddedPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-36 w-36 rounded-full border border-border bg-bg">
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-text" />
        <div className="absolute left-1/2 top-4 h-6 w-px -translate-x-1/2 bg-border" />
        <div className="absolute bottom-4 left-1/2 h-6 w-px -translate-x-1/2 bg-border" />
        <div className="absolute left-4 top-1/2 h-px w-6 -translate-y-1/2 bg-border" />
        <div className="absolute right-4 top-1/2 h-px w-6 -translate-y-1/2 bg-border" />
      </div>
    </div>
  )
}

function DefaultPreview({ project }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <p className="num-label uppercase">{project.category}</p>
      <div>
        <div className="mb-4 h-3 w-24 rounded-full bg-text" />
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-text-faint/40" />
          <div className="h-2 w-2/3 rounded-full bg-text-faint/30" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectPreview({ project }) {
  let preview = <DefaultPreview project={project} />

  if (project.id.includes("resume")) preview = <ResumePreview />
  else if (project.id.includes("mcp")) preview = <McpPreview />
  else if (project.id.includes("rate")) preview = <RateLimiterPreview />
  else if (project.id.includes("wafer")) preview = <VisionPreview />
  else if (project.id.includes("assistant")) preview = <AssistantPreview />
  else if (project.id.includes("helmet")) preview = <EmbeddedPreview />

  return (
    <div className="aspect-[16/9] overflow-hidden rounded-t-[1.5rem] border-b border-border-soft bg-surface-2 p-5">
      <div className="h-full rounded-[1.15rem] border border-border-soft bg-surface/80 p-4 transition duration-300 group-hover:scale-[1.01]">
        {preview}
      </div>
    </div>
  )
}
