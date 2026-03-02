import type { Metadata } from "next";
import { BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Minicimex",
  description:
    "Stay updated with the latest insights, tutorials, and news from Minicimex. Coming soon!",
  keywords: [
    "tech blog",
    "programming tutorials",
    "software development blog",
    "technology insights",
  ],
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog | Minicimex",
    description: "Stay updated with the latest insights and tutorials.",
    url: "https://Minicimex-solutions.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-32 bg-section-bg min-h-[60vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Blog Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We&apos;re working on creating valuable content for you. Stay tuned for
            insightful articles, tutorials, and the latest news in technology,
            development, and innovation.
          </p>
          <div className="flex items-center justify-center gap-2 text-text-secondary">
            <Clock className="h-5 w-5" />
            <span>Expected launch: Q2 2025</span>
          </div>
        </div>
      </section>
    </div>
  );
}
