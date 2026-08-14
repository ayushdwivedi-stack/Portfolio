import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="num-label mb-4">404</p>
      <h1 className="mb-6 font-display text-4xl font-medium md:text-6xl">Page not found.</h1>
      <Link
        to="/"
        data-cursor="interactive"
        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] hover:border-accent hover:text-accent"
      >
        <ArrowLeft size={14} /> Back home
      </Link>
    </div>
  )
}
