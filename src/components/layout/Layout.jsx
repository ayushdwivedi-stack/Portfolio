import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/layout/Footer"
import Cursor from "@/components/layout/Cursor"
import ScrollProgress from "@/components/layout/ScrollProgress"
import PageTransition from "@/components/motion/PageTransition"
import { useLenis } from "@/hooks/useLenis"

export default function Layout({ children }) {
  const location = useLocation()
  useLenis()

  return (
    <div className="min-h-screen bg-bg text-text cursor-none-desktop">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main className="pt-20">{children}</main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
