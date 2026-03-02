"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  GraduationCap,
  Code2,
  Box,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/training", label: "Training", icon: GraduationCap },
      { href: "/services/development", label: "Development", icon: Code2 },
      { href: "/services/products", label: "Products", icon: Box },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-[#0B1023]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-white dark:bg-[#0B1023] border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Minicimex"
              width={36}
              height={36}
              className="rounded-sm"
              priority
            />
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                color: "var(--color-navy)",
              }}
            >
              Minicimex
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded transition-colors",
                      "text-gray-600 hover:text-[var(--color-navy)] dark:text-gray-300 dark:hover:text-white"
                    )}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openDropdown === link.href ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[var(--color-navy)] dark:hover:text-white transition-colors"
                          >
                            <child.icon className="h-4 w-4 opacity-60" />
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium rounded transition-colors text-gray-600 hover:text-[var(--color-navy)] dark:text-gray-300 dark:hover:text-white"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Primary CTA */}
            <Link href="/contact" className="hidden md:block">
              <span className="btn-primary text-sm py-2 px-5 flex items-center gap-2">
                Start a project
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded text-gray-600 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="space-y-1">
                    <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 px-5 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--color-navy)]"
                      >
                        <child.icon className="h-4 w-4 opacity-50" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[var(--color-navy)]"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 pb-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span className="btn-primary w-full justify-center text-sm py-2.5">
                    Start a project
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
