"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Layers,
  Zap,
  HeadphonesIcon,
  Shield,
  Clock,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const differentiators = [
  {
    icon: Globe,
    title: "Multi-language training",
    description:
      "Technical training delivered in multiple languages to reach a global audience effectively.",
  },
  {
    icon: Layers,
    title: "End-to-end development",
    description:
      "From concept to deployment, we handle every aspect of your software development journey.",
  },
  {
    icon: Zap,
    title: "Agile development process",
    description:
      "Iterative approach ensuring rapid delivery and continuous improvement.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated support",
    description:
      "24/7 support and maintenance to ensure your systems run smoothly at all times.",
  },
  {
    icon: Shield,
    title: "Quality assurance",
    description:
      "Rigorous testing and quality checks at every stage of development.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    description:
      "We pride ourselves on meeting deadlines without compromising on quality.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function WhyUs() {
  return (
    /* ── Alternating section: white ── */
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Left-aligned heading for variety */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            align="left"
            subtitle="Why choose us"
            title="What sets us apart"
            description="We combine expertise, innovation, and dedication to deliver exceptional results for every project."
          />

          {/* Right: grid of features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-5 rounded-lg border border-gray-100 bg-white hover:border-[var(--color-cobalt)] transition-colors duration-300"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{ background: "var(--color-grey-50)" }}
                  >
                    <item.icon
                      className="h-4 w-4"
                      style={{ color: "var(--color-cobalt)" }}
                    />
                  </div>
                </div>

                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      color: "var(--color-navy)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontWeight: 300,
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
