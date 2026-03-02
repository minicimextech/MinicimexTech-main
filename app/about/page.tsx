import type { Metadata } from "next";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Shield,
  Users,
  TrendingUp,
  Heart,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About Us | Minicimex",
  description:
    "Learn about Minicimex' mission, vision, and the team behind our innovative technology solutions. Discover our story and core values.",
  keywords: [
    "about Minicimex",
    "technology company",
    "software development team",
    "IT company mission",
    "company values",
  ],
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Us | Minicimex",
    description:
      "Learn about Minicimex' mission, vision, and the team behind our innovative technology solutions.",
    url: "https://minicimex.com/about/",
  },
};

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Quality",
    description:
      "Excellence is non-negotiable. We maintain the highest standards in everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethical practices in all our engagements.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partnership with our clients and within our team.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Continuous learning and improvement drive our personal and professional development.",
  },
  {
    icon: Heart,
    title: "Impact",
    description:
      "We strive to make a meaningful difference through technology that solves real problems.",
  },
];

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Chief Executive Officer",
    initials: "AT",
  },
  {
    name: "Maria Garcia",
    role: "Chief Technology Officer",
    initials: "MG",
  },
  {
    name: "James Wilson",
    role: "Head of Training",
    initials: "JW",
  },
  {
    name: "Priya Sharma",
    role: "Lead Developer",
    initials: "PS",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-6">
                Building Tomorrow&apos;s Technology Today
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                Minicimex was founded with a simple mission: to make
                technology accessible, understandable, and impactful for
                businesses and individuals alike. We believe that the right
                technology, combined with proper training and innovation, can
                transform any organization.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">
                    10+
                  </div>
                  <div className="text-text-secondary">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-section-bg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To empower businesses and individuals through innovative
                technology solutions, comprehensive training programs, and
                cutting-edge products that drive growth, efficiency, and
                success in the digital age.
              </p>
            </div>
            <div className="bg-section-bg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To be the leading technology partner for organizations
                worldwide, recognized for our excellence in software
                development, training excellence, and product innovation that
                shapes the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Our Journey"
              title="Our Story"
              description="From a small startup to a comprehensive technology solutions provider"
            />
            <div className="mt-12 text-left space-y-6 text-text-secondary">
              <p>
                Minicimex began in 2014 as a small team of passionate
                developers with a shared vision: to bridge the gap between
                complex technology and practical business needs. What started as
                a freelance development service quickly evolved into something
                much bigger.
              </p>
              <p>
                As we worked with more clients, we realized that many
                organizations struggled not just with building technology, but
                with understanding and effectively using it. This insight led us
                to expand into technical training, helping teams build the skills
                they needed to thrive in a digital world.
              </p>
              <p>
                Today, Minicimex operates across three core verticals:
                Technical Training & Education, Custom Software Development
                Services, and In-House Product Development. We&apos;ve trained over
                500 professionals, delivered 100+ projects, and built innovative
                products that solve real-world problems.
              </p>
              <p>
                Our journey continues as we explore new technologies, expand our
                training offerings, and build products that make a difference.
                We remain committed to our founding principles: innovation,
                quality, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Believe"
            title="Our Core Values"
            description="The principles that guide everything we do"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-section-bg rounded-xl p-6 hover:bg-primary/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our People"
            title="Meet the Team"
            description="The talented individuals behind our success"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center shadow-card"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="text-6xl text-primary/20 absolute -top-8 left-0">
              &ldquo;
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-text-primary italic relative z-10 px-8">
              Technology is not just about writing code or building products.
              It&apos;s about understanding problems, empowering people, and creating
              solutions that make a real difference in the world.
            </blockquote>
            <div className="text-6xl text-primary/20 absolute -bottom-16 right-0">
              &rdquo;
            </div>
          </div>
          <div className="mt-12">
            <div className="font-semibold text-text-primary">Alex Thompson</div>
            <div className="text-sm text-text-secondary">
              Founder & CEO, Minicimex
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
