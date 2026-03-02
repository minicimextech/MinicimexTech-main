import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Box, Globe, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Products | Minicimex",
  description:
    "Explore Minicimex' in-house products including travel applications, assessment generators, and productivity tools. Built with innovation to solve real-world problems.",
  keywords: [
    "tech products",
    "travel application",
    "assessment generator",
    "productivity tools",
    "software products",
    "mobile apps",
    "web applications",
  ],
  alternates: {
    canonical: "/services/products/",
  },
  openGraph: {
    title: "Our Products | Minicimex",
    description:
      "Explore our in-house products built with innovation to solve real-world problems.",
    url: "https://minicimex.com/services/products/",
  },
};

// SoftwareApplication Schema JSON-LD
const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SoftwareApplication",
      name: "TravelPro",
      description:
        "A comprehensive travel planning and booking application for modern travelers.",
      applicationCategory: "TravelApplication",
      operatingSystem: ["iOS", "Android", "Web"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "AssessGen",
      description:
        "An intelligent question paper and assessment generator for educators.",
      applicationCategory: "EducationApplication",
      operatingSystem: ["Web"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

const products = [
  {
    name: "TravelPro",
    description:
      "A comprehensive travel planning and booking application designed for modern travelers. Plan trips, book accommodations, discover attractions, and manage your itinerary all in one place.",
    platforms: ["Web", "iOS", "Android"],
    features: [
      "AI-powered trip planning",
      "Real-time flight & hotel booking",
      "Interactive maps & navigation",
      "Expense tracking",
      "Travel community",
      "Offline access",
    ],
    status: "Coming Soon",
    slug: "travelpro",
  },
  {
    name: "AssessGen",
    description:
      "An intelligent question paper and assessment generator for educators and institutions. Create customized assessments, quizzes, and exams in minutes with AI assistance.",
    platforms: ["Web"],
    features: [
      "AI question generation",
      "Multiple question types",
      "Customizable templates",
      "Auto-grading system",
      "Performance analytics",
      "Export to various formats",
    ],
    status: "Beta",
    slug: "assessgen",
  },
  {
    name: "TaskFlow",
    description:
      "A productivity and project management tool for teams of all sizes. Streamline workflows, track progress, and collaborate effectively to achieve your goals.",
    platforms: ["Web", "iOS", "Android"],
    features: [
      "Kanban boards",
      "Time tracking",
      "Team collaboration",
      "Custom workflows",
      "Integration support",
      "Progress reports",
    ],
    status: "In Development",
    slug: "taskflow",
  },
  {
    name: "HealthTrack",
    description:
      "A personal health and wellness tracking application. Monitor your fitness, nutrition, sleep, and overall well-being with intuitive dashboards and insights.",
    platforms: ["iOS", "Android"],
    features: [
      "Activity tracking",
      "Nutrition logging",
      "Sleep analysis",
      "Health insights",
      "Goal setting",
      "Wearable integration",
    ],
    status: "Planning",
    slug: "healthtrack",
  },
];

const platformIcons: Record<string, React.ElementType> = {
  Web: Globe,
  iOS: Smartphone,
  Android: Smartphone,
};

export default function ProductsPage() {
  return (
    <>
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Box className="h-4 w-4" />
                In-House Products
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Products Built with Passion
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                We don&apos;t just build for clients—we create innovative products
                that solve real-world problems. Explore our growing portfolio of
                in-house applications.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Our Portfolio"
              title="Featured Products"
              description="Innovative solutions designed to make life easier"
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-section-bg rounded-2xl p-8 hover:bg-primary/5 transition-colors group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {product.name}
                      </h3>
                      <div className="flex gap-2">
                        {product.platforms.map((platform) => {
                          const Icon = platformIcons[platform];
                          return (
                            <Badge
                              key={platform}
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              <Icon className="h-3 w-3" />
                              {platform}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                    <Badge
                      variant={
                        product.status === "Beta"
                          ? "default"
                          : product.status === "Coming Soon"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {product.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link href={`/services/products/${product.slug}/`}>
                    <Button
                      variant="outline"
                      className="group/btn w-full sm:w-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Statement */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Our Product Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Innovation at the Core
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              At Minicimex, we believe that the best way to understand
              our clients&apos; challenges is to face similar challenges ourselves.
              That&apos;s why we invest in building our own products—each one is a
              testament to our technical expertise, design thinking, and
              commitment to solving real problems.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our product development process is driven by user feedback,
              market research, and a deep understanding of technology trends.
              We don&apos;t just build products; we create solutions that people love
              to use.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Have a Product Idea?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We&apos;re always looking for new challenges. If you have a product
              idea or want to partner with us, let&apos;s talk.
            </p>
            <Link href="/contact/">
              <Button size="lg" className="gradient-primary text-white">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
