"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    /* ── Full-width navy band ── */
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      {/* Subtle texture: faint cobalt right panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(31,79,216,0.12), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Heading */}
          <div>
            {/* Overline in cobalt-tinted white */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Grow your business with us
            </p>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-white"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                letterSpacing: "-0.015em",
              }}
            >
              Ready to build something{" "}
              <span style={{ color: "rgba(144,171,255,1)" }}>great</span>?
            </h2>
          </div>

          {/* Right: Body + CTAs */}
          <div>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontWeight: 300,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Let's discuss your project and explore how we can help transform
              your ideas into reality. Whether you need training, development
              services, or want to explore our products — we're here to help.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-medium text-[var(--color-navy)] bg-white hover:bg-opacity-90 transition-all"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/services">
                <span
                  className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-medium text-white border border-white/30 hover:border-white/70 transition-all"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Explore services
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
