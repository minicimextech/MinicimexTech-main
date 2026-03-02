"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Code2, Box, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
  {
    icon: GraduationCap,
    title: "Technical Training",
    description:
      "Comprehensive training programs in web development, mobile apps, programming languages, and cloud technologies. From beginner to advanced levels.",
    href: "/services/training",
  },
  {
    icon: Code2,
    title: "Development Services",
    description:
      "End-to-end custom software development for web and mobile applications. Scalable, secure, and performance-optimised solutions tailored to your needs.",
    href: "/services/development",
  },
  {
    icon: Box,
    title: "In-House Products",
    description:
      "Innovative products built from the ground up. From travel apps to assessment tools — we create solutions that solve real-world problems.",
    href: "/services/products",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function WhatWeDo() {
  return (
    /* ── Alternating section: light grey ── */
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-grey-50)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="What we do"
          title="Three Pillars of Excellence"
          description="We combine education, development expertise, and product innovation to deliver comprehensive technology solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article key={index} variants={itemVariants} className="corp-card flex flex-col">
              {/* Icon container — small navy square */}
              <div
                className="w-11 h-11 flex items-center justify-center rounded mb-7"
                style={{ background: "var(--color-navy)" }}
              >
                <service.icon className="h-5 w-5 text-white" />
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  color: "var(--color-navy)",
                }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{
                  color: "var(--color-text-secondary)",
                  fontWeight: 300,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "var(--color-cobalt)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
