"use client"

import { Mail, MapPin, Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LogoAltInline from "./logo-alt-inline"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0077b6]/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4">
        <Link href="/" className="no-underline relative z-10">
          <LogoAltInline />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about-us" className="text-white hover:text-blue-200 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/get-involved" className="text-white hover:text-blue-200 transition-colors font-medium">
              Get Involved
            </Link>
          </nav>
          <Button asChild className="bg-white text-[#0077b6] hover:bg-blue-100 transition-colors rounded-full px-6">
            <a href="https://gofund.me/62d4a791" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-[#0077b6] p-4 pt-20 shadow-lg md:hidden"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-md hover:bg-[#0077b6]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about-us"
                  className="text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-md hover:bg-[#0077b6]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/get-involved"
                  className="text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-md hover:bg-[#0077b6]/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Involved
                </Link>
                <a
                  href="https://gofund.me/62d4a791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0077b6] py-2 px-4 rounded-md text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate
                </a>
              </nav>

              <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <p className="text-white/80">Kira, Wakiso, Uganda</p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <Link href="mailto:ayatgabriella@gmail.com" className="text-white/80 hover:text-white">
                    ayatgabriella@gmail.com
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                    <div>
                      <p className="text-white/80">+31645396333 (Netherlands)</p>
                      <p className="text-white/80">+256 743 109210 (Uganda)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Info - Desktop */}
        <div className="hidden md:flex flex-col items-end text-sm text-white/90">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p>Kira, Wakiso, Uganda</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <Link href="mailto:ayatgabriella@gmail.com" className="hover:underline">
              ayatgabriella@gmail.com
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+31645396333 (Netherlands)</p>
            </div>
            <div className="flex items-center gap-2 ml-6">
              <p>+256 743 109210 (Uganda)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

