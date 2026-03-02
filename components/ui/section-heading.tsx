"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string        // used as overline label
  description?: string
  align?: "left" | "center" | "right"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("flex flex-col", alignClass, className)}
    >
      {/* All-caps overline */}
      {subtitle && (
        <span className="overline mb-3">{subtitle}</span>
      )}

      {/* Short cobalt divider under overline */}
      <div
        className="mb-5"
        style={{
          width: "2rem",
          height: "2px",
          background: "var(--color-cobalt)",
          alignSelf: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
        }}
      />

      {/* Main heading */}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] font-bold mb-4",
          titleClassName
        )}
        style={{
          fontFamily: "var(--font-jost), sans-serif",
          color: "var(--color-navy)",
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </h2>

      {/* Body description */}
      {description && (
        <p
          className="text-base md:text-lg leading-relaxed max-w-xl"
          style={{
            color: "var(--color-text-secondary)",
            fontWeight: 300,
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
