import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { blogCategories, blogPosts } from "@/data/blog"

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [featured, ...rest] = blogPosts
  const posts =
    activeCategory === "All" ? rest : rest.filter((post) => post.category === activeCategory)

  return (
    <div className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-14 max-w-3xl">
          <p className="num-label mb-4 uppercase">Blog</p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Thoughts, tutorials & things I&apos;m learning.
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-dim">
            Things I&apos;m learning, building, and exploring.
          </p>
        </header>

        <section className="mb-12">
          <p className="num-label mb-4 uppercase">Featured Article</p>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-border-soft bg-surface shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="aspect-[16/9] min-h-[240px] transition duration-500 group-hover:scale-[1.01]" style={{ background: featured.cover }} />
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-text-faint">
                <span>{featured.category}</span>
                <span>{featured.date}</span>
                <span>{featured.readingTime}</span>
                {featured.placeholder ? <span className="rounded-full border border-border-soft px-2 py-1">Placeholder</span> : null}
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-text-dim md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-text-dim">{featured.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text">
                Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </section>

        <section>
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="num-label mb-2 uppercase">All Articles</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">Technical notes and tutorials</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                    activeCategory === category
                      ? "border-text bg-text text-bg"
                      : "border-border-soft bg-surface text-text-dim hover:border-border hover:text-text"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group grid overflow-hidden rounded-[1.5rem] border border-border-soft bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="aspect-[16/9] transition duration-500 group-hover:scale-[1.01]" style={{ background: post.cover }} />
                <div className="p-7">
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-text-faint">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                    {post.placeholder ? <span className="rounded-full border border-border-soft px-2 py-1">Placeholder</span> : null}
                  </div>
                  <h3 className="text-balance text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-text-dim">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-text-dim">{post.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text">
                    Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
