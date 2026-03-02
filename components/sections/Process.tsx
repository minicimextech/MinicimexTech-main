"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Rocket, HeartHandshake } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We start by deeply understanding your requirements, goals, and challenges through comprehensive discovery sessions.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan",
    description:
      "Our team creates a detailed roadmap with clear milestones, timelines, and deliverables tailored to your needs.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description:
      "We develop your solution using agile methodologies, ensuring regular updates and iterative improvements.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "Seamless deployment with thorough testing, documentation, and training for your team.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Support",
    description:
      "Ongoing maintenance, updates, and support to ensure your solution continues to perform optimally.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Process() {
  return (
    /* ── Alternating: grey ── */
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-grey-50)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Our process"
          title="How we work"
          description="A proven methodology that ensures successful project delivery every time."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-full w-full h-px z-0"
                  style={{
                    background: "linear-gradient(to right, var(--color-grey-100), transparent)",
                    width: "calc(100% - 2.5rem)",
                    left: "2.5rem",
                  }}
                />
              )}

              <div
                className="relative z-10 bg-white rounded-lg p-6 h-full"
                style={{
                  border: "1px solid var(--color-grey-100)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Step badge */}
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded text-white text-xs font-bold mb-5"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    background: "var(--color-navy)",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon in cobalt */}
                <div className="mb-3">
                  <step.icon
                    className="h-5 w-5"
                    style={{ color: "var(--color-cobalt)" }}
                  />
                </div>

                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    color: "var(--color-navy)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontWeight: 300,
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
