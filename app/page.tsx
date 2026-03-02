import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Minicimex | Building the Future Through Technology",
  description:
    "Minicimex offers professional technical training, custom software development services, and innovative in-house products. Transform your business with our expert solutions.",
  keywords: [
    "technical training",
    "software development",
    "web development",
    "mobile app development",
    "programming courses",
    "IT consulting",
    "technology company",
    "custom software",
  ],
  authors: [{ name: "Minicimex" }],
  creator: "Minicimex",
  metadataBase: new URL("https://Minicimex-solutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Minicimex-solutions.com",
    siteName: "Minicimex",
    title: "Minicimex | Building the Future Through Technology",
    description:
      "Professional technical training, custom software development, and innovative products. Transform your business with our expert solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minicimex | Building the Future Through Technology",
    description:
      "Professional technical training, custom software development, and innovative products.",
  },
};

// Organization Schema JSON-LD
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Minicimex",
  url: "https://Minicimex-solutions.com",
  logo: "https://Minicimex-solutions.com/logo.png",
  description:
    "Building the future through technology, training, and innovation. We offer professional technical training, custom software development services, and innovative in-house products.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@Minicimex-solutions.com",
  },
  sameAs: [
    "https://twitter.com/Minicimex",
    "https://linkedin.com/company/Minicimex",
    "https://github.com/Minicimex",
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <CTABanner />
    </>
  );
}
