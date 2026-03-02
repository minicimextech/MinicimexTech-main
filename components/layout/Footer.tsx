"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  Services: [
    { href: "/services/training", label: "Technical Training" },
    { href: "/services/development", label: "Software Development" },
    { href: "/services/products", label: "Our Products" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/services/training", label: "Courses" },
    { href: "/services/development", label: "Case Studies" },
    { href: "/contact", label: "Support" },
  ],
}

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer style={{ background: "var(--color-navy)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column — 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.jpeg"
                alt="Minicimex"
                width={36}
                height={36}
                className="rounded-sm"
              />
              <span
                className="text-lg font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                Minicimex
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-xs mb-8"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontWeight: 300,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Building the future through technology, training, and innovation.
              We transform ideas into powerful digital solutions.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)"
                      ; (e.currentTarget as HTMLElement).style.color = "#fff"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"
                      ; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"
                  }}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.13em] mb-5"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            &copy; {new Date().getFullYear()} Minicimex. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs transition-colors"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
