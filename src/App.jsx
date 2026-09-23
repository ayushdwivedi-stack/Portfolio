import { Routes, Route, useLocation } from "react-router-dom"
import { Suspense, useEffect } from "react"
import Layout from "@/components/layout/Layout"

import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"
import Hackathons from "@/pages/Hackathons"
import Achievements from "@/pages/Achievements"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import Experience from "@/pages/Experience"
import NotFound from "@/pages/NotFound"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
