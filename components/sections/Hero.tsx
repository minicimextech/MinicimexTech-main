"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "500+", label: "Students trained" },
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Enterprise clients" },
  { value: "10+", label: "Products built" },
]

export function Hero() {
  return (
    <section
      className="relative pt-16 min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      {/* ── Main Hero Band ── */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 py-24 md:py-32">

          {/* Two-column layout: text left, accent block right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Overline */}
              <p className="overline mb-5">Innovating tomorrow's technology today</p>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.08] font-bold text-balance mb-6"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  color: "var(--color-navy)",
                  letterSpacing: "-0.02em",
                }}
              >
                Building the Future Through{" "}
                <span style={{ color: "var(--color-cobalt)" }}>Technology</span>,{" "}
                Training, and Innovation
              </h1>

              {/* Body */}
              <p
                className="text-lg leading-relaxed mb-10 max-w-lg"
                style={{
                  color: "var(--color-text-secondary)",
                  fontWeight: 300,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                We empower businesses and individuals through three core pillars:
                professional technical training, custom software development, and
                cutting-edge product innovation.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <span className="btn-primary text-base py-3 px-7 flex items-center gap-2">
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="btn-ghost text-base py-3 px-7">
                    Start a project
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right: Abstract architectural block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Background square */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "var(--color-grey-50)" }}
                />
                {/* Cobalt accent block */}
                <div
                  className="absolute top-8 left-8 right-24 bottom-24 rounded-xl"
                  style={{ background: "var(--color-cobalt)", opacity: 0.07 }}
                />
                {/* Navy block */}
                <div
                  className="absolute top-16 right-8 w-28 h-28 rounded-xl"
                  style={{ background: "var(--color-navy)", opacity: 0.9 }}
                />
                {/* Small accent square */}
                <div
                  className="absolute bottom-20 left-16 w-16 h-16 rounded-lg"
                  style={{ background: "var(--color-cobalt)" }}
                />
                {/* Floating number badge */}
                <div
                  className="absolute bottom-8 right-8 rounded-xl px-5 py-4 text-white shadow-lg"
                  style={{ background: "var(--color-navy)" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    10+
                  </div>
                  <div className="text-xs opacity-70 tracking-wide uppercase mt-0.5">
                    Years of excellence
                  </div>
                </div>
                {/* Top-left label */}
                <div className="absolute top-8 left-8 px-3 py-2 rounded-lg bg-white shadow-sm border border-gray-100">
                  <div className="text-xs font-semibold" style={{ color: "var(--color-navy)" }}>
                    500+ Students
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Trained globally</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Stats Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    color: "var(--color-navy)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)", fontWeight: 300 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
