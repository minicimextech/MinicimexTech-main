import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  CheckCircle,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Custom Software Development | Minicimex",
  description:
    "End-to-end custom web and mobile app development services. We build scalable, secure, and high-performance applications tailored to your business needs.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "iOS development",
    "Android development",
    "API development",
    "UI UX design services",
    "software development company",
  ],
  alternates: {
    canonical: "/services/development/",
  },
  openGraph: {
    title: "Custom Software Development | Minicimex",
    description:
      "End-to-end custom web and mobile app development services. Scalable, secure, and high-performance applications.",
    url: "https://minicimex.com/services/development/",
  },
};

// Service Schema JSON-LD
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development Services",
  description:
    "End-to-end custom web and mobile app development services including web applications, mobile apps, API development, UI/UX design, and maintenance.",
  provider: {
    "@type": "Organization",
    name: "Minicimex",
    sameAs: "https://minicimex.com",
  },
  areaServed: "Global",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Development & Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
        },
      },
    ],
  },
};

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Build modern, responsive, and scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and more.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Enterprise Web Solutions",
      "E-commerce Platforms",
      "SaaS Applications",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Create native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform (Flutter/React Native)",
      "App Maintenance & Updates",
      "App Store Optimization",
    ],
  },
  {
    icon: Cpu,
    title: "API Development & Integration",
    description:
      "Design and develop robust APIs and integrate third-party services to extend your application's functionality.",
    features: [
      "RESTful API Development",
      "GraphQL APIs",
      "Third-party Integrations",
      "API Documentation",
      "Microservices Architecture",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Testing",
    description:
      "Ensure your application is bug-free and performs optimally with our comprehensive testing services.",
    features: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
      "Cross-browser Testing",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your applications running smoothly with our ongoing maintenance and support services.",
    features: [
      "24/7 Technical Support",
      "Bug Fixes & Updates",
      "Performance Monitoring",
      "Security Patches",
      "Feature Enhancements",
    ],
  },
];

const techStack = {
  frontend: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"],
  mobile: ["Flutter", "React Native", "Swift", "Kotlin", "iOS", "Android"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "DynamoDB"],
  cloud: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Heroku"],
  devops: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"],
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your requirements, goals, and target audience",
  },
  {
    number: "02",
    title: "Planning",
    description: "Create detailed project roadmap and technical architecture",
  },
  {
    number: "03",
    title: "Design",
    description: "Develop wireframes, prototypes, and visual designs",
  },
  {
    number: "04",
    title: "Development",
    description: "Build your solution using agile methodologies",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance and performance testing",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Launch your application with monitoring and support",
  },
];

const projectTypes = [
  {
    title: "Startups",
    description: "MVP development to help you validate your idea quickly",
  },
  {
    title: "SMEs",
    description: "Scalable solutions for growing businesses",
  },
  {
    title: "Enterprise",
    description: "Complex, large-scale applications for corporations",
  },
  {
    title: "Internal Tools",
    description: "Custom tools to streamline your operations",
  },
  {
    title: "SaaS Products",
    description: "Multi-tenant cloud-based software solutions",
  },
  {
    title: "E-commerce",
    description: "Online stores and marketplace platforms",
  },
];

const engagementModels = [
  {
    title: "Fixed Price",
    description:
      "Best for well-defined projects with clear requirements and timelines. Fixed budget and delivery date.",
    bestFor: "Small to medium projects",
  },
  {
    title: "Time & Material",
    description:
      "Flexible engagement where you pay for actual time spent. Ideal for evolving requirements.",
    bestFor: "Long-term projects",
  },
  {
    title: "Dedicated Team",
    description:
      "A full-time team dedicated to your project. Complete control over resources and priorities.",
    bestFor: "Large-scale projects",
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Custom Development Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Build Your Vision with Our Expertise
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                From concept to deployment, we deliver custom software solutions
                that drive business growth. Our expert team builds scalable,
                secure, and high-performance applications tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact/">
                  <Button size="lg" className="gradient-primary text-white">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="What We Offer"
              title="Our Development Services"
              description="Comprehensive software development services to meet all your technology needs"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-section-bg rounded-xl p-6 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Our Process"
              title="How We Build Software"
              description="A proven development methodology that ensures successful project delivery"
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-background rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                      <h3 className="font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Technologies"
              title="Our Technology Stack"
              description="We work with modern, proven technologies to build robust solutions"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="bg-section-bg rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-background text-sm text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Who We Serve"
              title="Project Types We Handle"
              description="We have experience working with diverse clients and project types"
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {type.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Engagement"
              title="Flexible Engagement Models"
              description="Choose the engagement model that best fits your project needs"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-section-bg rounded-xl p-6 border-2 border-transparent hover:border-primary/20 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {model.title}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {model.description}
                  </p>
                  <div className="pt-4 border-t">
                    <span className="text-xs text-primary font-medium">
                      Best for: {model.bestFor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Let&apos;s discuss your project and bring your vision to life. Get a
              free consultation and project estimate today.
            </p>
            <Link href="/contact/">
              <Button size="lg" className="gradient-primary text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
