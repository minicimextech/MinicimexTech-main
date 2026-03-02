"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "Minicimex's training program transformed our team's capabilities. The hands-on approach and expert instructors made complex concepts easy to understand.",
    author: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
  },
  {
    quote:
      "Working with Minicimex on our mobile app was an incredible experience. They delivered a high-quality product on time and within budget.",
    author: "Michael Chen",
    role: "Founder, AppWorks",
  },
  {
    quote:
      "The custom software solution Minicimex built for us has streamlined our operations and increased efficiency by 40%. Highly recommended.",
    author: "Emily Rodriguez",
    role: "Operations Director, LogiFlow",
  },
  {
    quote:
      "Their attention to detail and commitment to quality is unmatched. Minicimex is our go-to partner for all development needs.",
    author: "David Park",
    role: "Product Manager, InnovateCo",
  },
  {
    quote:
      "The training we received was practical, industry-focused, and immediately applicable. Our developers are now more confident and productive.",
    author: "Lisa Thompson",
    role: "HR Director, CodeBase",
  },
]

export function Testimonials() {
  return (
    /* ── White section ── */
    <section
      className="py-24 md:py-36"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Testimonials"
          title="What our clients say"
          description="Don't just take our word for it — here's what our clients and students have to say about working with us."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="h-full rounded-lg p-8 flex flex-col"
                    style={{
                      border: "1px solid var(--color-grey-100)",
                      background: "var(--color-white)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Opening mark */}
                    <div
                      className="text-5xl font-bold leading-none mb-4 select-none"
                      style={{
                        color: "var(--color-cobalt)",
                        opacity: 0.18,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      &ldquo;
                    </div>

                    {/* Quote */}
                    <p
                      className="text-sm leading-relaxed flex-1 mb-8"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontWeight: 300,
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      {t.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                      {/* Initials avatar */}
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded text-white text-xs font-semibold flex-shrink-0"
                        style={{ background: "var(--color-navy)" }}
                      >
                        {t.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold"
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            color: "var(--color-navy)",
                          }}
                        >
                          {t.author}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--color-grey-400)" }}
                        >
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-3 mt-10">
              <CarouselPrevious
                className="static translate-y-0 border-gray-200 text-gray-600 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
              />
              <CarouselNext
                className="static translate-y-0 border-gray-200 text-gray-600 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
