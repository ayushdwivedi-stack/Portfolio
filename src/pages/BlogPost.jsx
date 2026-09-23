import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogPosts, getBlogPostBySlug } from "@/data/blog"

function Block({ block }) {
  if (block.type === "h2") {
    return <h2 className="mt-12 text-3xl font-semibold tracking-[-0.04em] text-text">{block.text}</h2>
  }

  if (block.type === "quote") {
    return (
      <blockquote className="my-8 border-l-2 border-accent pl-6 text-xl font-medium leading-8 text-text">
        {block.text}
      </blockquote>
    )
  }

  if (block.type === "code") {
    return (
      <pre className="my-8 overflow-x-auto rounded-2xl border border-border-soft bg-surface-2 p-5 text-sm leading-6 text-text">
        <code>{block.text}</code>
      </pre>
    )
  }

  if (block.type === "list") {
    return (
      <ul className="mt-6 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-8 text-text-dim">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-text" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return <p className="mt-6 text-lg leading-8 text-text-dim">{block.text}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const moreArticles = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <article className="px-5 pb-28 pt-16 md:px-8">
      <div className="mx-auto max-w-[900px]">
        <Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-text-dim hover:text-text">
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <header>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-medium text-text-faint">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
            {post.placeholder ? <span className="rounded-full border border-border-soft px-3 py-1">Placeholder draft</span> : null}
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] md:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-text-dim">{post.description}</p>
          <p className="mt-6 text-sm font-medium text-text-faint">By {post.author}</p>
        </header>

        <div className="my-12 min-h-[360px] rounded-[2rem] border border-border-soft shadow-[var(--shadow-soft)]" style={{ background: post.cover }} />

        <div className="mx-auto max-w-[760px]">
          {post.content.map((block, index) => (
            <Block key={`${block.type}-${index}`} block={block} />
          ))}
        </div>

        <footer className="mx-auto mt-16 max-w-[760px] border-t border-border-soft pt-10">
          <p className="num-label mb-5 uppercase">Continue Reading</p>
          <div className="grid gap-4 md:grid-cols-2">
            {moreArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group rounded-2xl border border-border-soft bg-surface p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-text-faint">{article.category}</p>
                <h2 className="text-xl font-semibold tracking-[-0.03em]">{article.title}</h2>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text-dim group-hover:text-text">
                  Read next <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </article>
  )
}
