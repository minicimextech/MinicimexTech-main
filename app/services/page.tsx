import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Code2, Box, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services | Minicimex",
  description:
    "Explore Minicimex' comprehensive services: Technical Training, Custom Software Development, and In-House Products. Find the right solution for your needs.",
  keywords: [
    "technical training services",
    "software development services",
    "custom web development",
    "mobile app development",
    "IT training",
    "programming courses",
  ],
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Our Services | Minicimex",
    description:
      "Explore our comprehensive services: Technical Training, Custom Software Development, and In-House Products.",
    url: "https://minicimex.com/services/",
  },
};

const services = [
  {
    icon: GraduationCap,
    title: "Technical Training",
    description:
      "Comprehensive training programs designed to upskill your team in the latest technologies. From web development to cloud computing, we offer courses for all skill levels.",
    href: "/services/training/",
    features: [
      "Web & Mobile Development",
      "Programming Languages",
      "Database Management",
      "Cloud Computing",
      "UI/UX Design",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "End-to-end custom software development services tailored to your business needs. We build scalable, secure, and high-performance applications.",
    href: "/services/development/",
    features: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "API Development",
      "UI/UX Design",
      "Maintenance & Support",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Box,
    title: "Our Products",
    description:
      "Innovative in-house products built to solve real-world problems. From travel applications to assessment tools, explore our growing portfolio.",
    href: "/services/products/",
    features: [
      "Travel Application",
      "Assessment Generator",
      "Productivity Tools",
      "Business Solutions",
      "Coming Soon",
    ],
    color: "from-orange-500 to-red-500",
  },
];

const clientTypes = [
  {
    title: "Students & Fresh Graduates",
    description: "Kickstart your career with industry-relevant training",
    bestFor: "Training",
  },
  {
    title: "Working Professionals",
    description: "Upskill and stay ahead in your career",
    bestFor: "Training",
  },
  {
    title: "Startups",
    description: "Build your MVP and scale your product",
    bestFor: "Development",
  },
  {
    title: "Enterprises",
    description: "Digital transformation and custom solutions",
    bestFor: "Development",
  },
  {
    title: "Educational Institutions",
    description: "Comprehensive training programs for students",
    bestFor: "Training",
  },
  {
    title: "SMBs",
    description: "Affordable solutions for growing businesses",
    bestFor: "Development",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="What We Do"
            title="Our Services"
            description="Comprehensive technology solutions designed to meet your unique needs. From training to development to products, we've got you covered."
          />
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={service.href}>
                    <Button className="w-full gradient-primary text-white group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Who We Serve"
            title="Find Your Perfect Fit"
            description="We tailor our services to meet the unique needs of different clients"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-text-primary">
                    {type.title}
                  </h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {type.bestFor}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Let&apos;s discuss your needs and find the perfect solution together.
            Our team is ready to help you make the right choice.
          </p>
          <Link href="/contact/">
            <Button size="lg" className="gradient-primary text-white px-8">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
