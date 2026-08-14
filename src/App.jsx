import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import Layout from "@/components/layout/Layout"

// Route-level code splitting: only Home ships eagerly (it's the landing
// experience); every other route — and the heavy 3D hero — loads on demand.
import Home from "@/pages/Home"
const Projects = lazy(() => import("@/pages/Projects"))
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"))
const Hackathons = lazy(() => import("@/pages/Hackathons"))
const Achievements = lazy(() => import("@/pages/Achievements"))
const About = lazy(() => import("@/pages/About"))
const Contact = lazy(() => import("@/pages/Contact"))
const NotFound = lazy(() => import("@/pages/NotFound"))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
