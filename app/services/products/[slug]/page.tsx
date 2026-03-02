import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

// Generate metadata for the product page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const productNames: Record<string, string> = {
    travelpro: "TravelPro",
    assessgen: "AssessGen",
    taskflow: "TaskFlow",
    healthtrack: "HealthTrack",
  };

  const productName = productNames[params.slug] || "Product";

  return {
    title: `${productName} | TechVision Solutions Products`,
    description: `Learn more about ${productName}, an innovative product by TechVision Solutions.`,
    keywords: [productName.toLowerCase(), "tech product", "software"],
    alternates: {
      canonical: `/services/products/${params.slug}/`,
    },
  };
}

// Generate static params for the products
export function generateStaticParams() {
  return [
    { slug: "travelpro" },
    { slug: "assessgen" },
    { slug: "taskflow" },
    { slug: "healthtrack" },
  ];
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const productNames: Record<string, string> = {
    travelpro: "TravelPro",
    assessgen: "AssessGen",
    taskflow: "TaskFlow",
    healthtrack: "HealthTrack",
  };

  const productName = productNames[params.slug] || "Product";

  return (
    <div className="pt-16">
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/services/products/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Box className="h-4 w-4" />
              Product Details
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {productName}
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Detailed information about {productName} coming soon. Stay tuned
              for updates!
            </p>
            <Link href="/contact/">
              <Button className="gradient-primary text-white">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-section-bg rounded-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
              <Box className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Coming Soon
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We&apos;re working hard to bring you detailed information about{" "}
              {productName}. Check back soon for updates, or contact us to learn
              more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
