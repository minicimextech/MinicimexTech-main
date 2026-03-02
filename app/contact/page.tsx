import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Minicimex",
  description:
    "Get in touch with Minicimex for training inquiries, development projects, or product information. We're here to help!",
  keywords: [
    "contact Minicimex",
    "software development inquiry",
    "training inquiry",
    "get quote",
    "contact us",
  ],
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Us | Minicimex",
    description:
      "Get in touch with us for training inquiries, development projects, or product information.",
    url: "https://minicimex.com/contact/",
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "minicimextech@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Monday to Friday",
    value: "9:00 AM - 6:00 PM",
  },
  {
    icon: MessageCircle,
    title: "Response Time",
    description: "Average response time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-section-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Get In Touch"
            title="Contact Us"
            description="Have a question or project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-1">
                        {info.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-section-bg rounded-xl">
                <h3 className="font-semibold text-text-primary mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Free initial consultation</li>
                  <li>• Detailed project proposal</li>
                  <li>• Transparent pricing</li>
                  <li>• Dedicated project manager</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-section-bg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
