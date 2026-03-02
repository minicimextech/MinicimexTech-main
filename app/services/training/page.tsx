import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  GraduationCap,
  Code,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Check,
  Users,
  Clock,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Technical Training Programs | Minicimex",
  description:
    "Professional technical training in web development, mobile apps, programming languages, databases, cloud computing, and UI/UX design. Beginner to advanced levels with hands-on projects and certification.",
  keywords: [
    "technical training",
    "programming courses",
    "web development training",
    "mobile app development course",
    "Python training",
    "JavaScript course",
    "cloud computing training",
    "database management course",
    "UI UX design training",
    "coding bootcamp",
  ],
  alternates: {
    canonical: "/services/training/",
  },
  openGraph: {
    title: "Technical Training Programs | Minicimex",
    description:
      "Professional technical training with hands-on projects and certification. Web development, mobile apps, programming, cloud, and more.",
    url: "https://Minicimex-solutions.com/services/training/",
  },
};

// Course Schema JSON-LD
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Professional Technical Training Programs",
  description:
    "Comprehensive technical training programs covering web development, mobile apps, programming languages, databases, cloud computing, and UI/UX design.",
  provider: {
    "@type": "Organization",
    name: "Minicimex",
    sameAs: "https://Minicimex-solutions.com",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      courseWorkload: "PT40H",
    },
    {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT40H",
    },
  ],
  educationalLevel: "Beginner to Advanced",
  teaches: [
    "Web Development",
    "Mobile App Development",
    "Programming Languages",
    "Database Management",
    "Cloud Computing",
    "UI/UX Design",
  ],
};

const trainingDomains = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Master modern web technologies including HTML, CSS, JavaScript, React, Next.js, and Node.js. Build responsive, interactive web applications.",
    duration: "8-12 weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Learn to build native and cross-platform mobile apps using Flutter, React Native, and Swift. Create apps for iOS and Android.",
    duration: "10-14 weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: Code,
    title: "Programming Languages",
    description:
      "Comprehensive courses in Python, Java, JavaScript, C++, and more. Learn programming fundamentals and advanced concepts.",
    duration: "6-10 weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Master SQL, PostgreSQL, MongoDB, and database design principles. Learn to build and manage scalable databases.",
    duration: "6-8 weeks",
    level: "Beginner to Advanced",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Get hands-on experience with AWS, Google Cloud, and Azure. Learn cloud architecture, deployment, and DevOps practices.",
    duration: "8-10 weeks",
    level: "Intermediate to Advanced",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Learn user interface and user experience design principles. Master Figma, Adobe XD, and design thinking methodologies.",
    duration: "6-8 weeks",
    level: "Beginner to Advanced",
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Beginner to Advanced",
    description: "Courses designed for all skill levels",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Real-world projects to build your portfolio",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized certificates upon completion",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Weekday, weekend, and self-paced options",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Access course materials forever",
  },
];

const targetAudiences = [
  {
    title: "Students",
    description:
      "Build a strong foundation in technology and prepare for a successful career in the IT industry.",
  },
  {
    title: "Fresh Graduates",
    description:
      "Bridge the gap between academic knowledge and industry requirements with practical training.",
  },
  {
    title: "Working Professionals",
    description:
      "Upskill and stay relevant in a rapidly evolving tech landscape. Advance your career with new skills.",
  },
  {
    title: "Institutions & Colleges",
    description:
      "Partner with us to provide industry-relevant training to your students and enhance their employability.",
  },
];

const curriculumSteps = [
  {
    number: "01",
    title: "Foundation",
    description: "Build strong fundamentals and core concepts",
  },
  {
    number: "02",
    title: "Practical Learning",
    description: "Hands-on coding exercises and mini projects",
  },
  {
    number: "03",
    title: "Real Projects",
    description: "Work on industry-relevant projects",
  },
  {
    number: "04",
    title: "Mentorship",
    description: "One-on-one guidance from experts",
  },
  {
    number: "05",
    title: "Certification",
    description: "Earn your certificate and job assistance",
  },
];

const faqs = [
  {
    question: "What are the prerequisites for your training programs?",
    answer:
      "Prerequisites vary by course. Beginner courses require no prior experience, while advanced courses may require basic programming knowledge. Each course page lists specific requirements.",
  },
  {
    question: "Do you offer online training options?",
    answer:
      "Yes! We offer both in-person and online training options. Our online courses are live and interactive, with the same quality of instruction as our in-person programs.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Absolutely! All our courses come with industry-recognized certificates upon successful completion. These certificates can be added to your resume and LinkedIn profile.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer:
      "Yes, we provide job assistance including resume building, interview preparation, and connections with our hiring partners. Many of our graduates have secured positions at top companies.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 7-day money-back guarantee for most courses. If you're not satisfied with the training, you can request a full refund within the first week.",
  },
  {
    question: "Do you offer corporate training for organizations?",
    answer:
      "Yes, we provide customized corporate training programs tailored to your organization's specific needs. Contact us to discuss your requirements.",
  },
  {
    question: "What is the class size for your training programs?",
    answer:
      "We keep our batch sizes small (10-15 students) to ensure personalized attention and effective learning. This allows our instructors to focus on each student's progress.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4" />
                Professional Training Programs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Master the Skills of Tomorrow
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Industry-focused technical training programs designed to prepare
                you for real-world challenges. Learn from experts, build
                projects, and earn certifications that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact/">
                  <Button size="lg" className="gradient-primary text-white">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="#domains">
                  <Button size="lg" variant="outline">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Training Domains */}
        <section id="domains" className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Our Courses"
              title="Training Domains"
              description="Comprehensive programs covering the most in-demand technologies"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingDomains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-section-bg rounded-xl p-6 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <domain.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {domain.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {domain.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Why Our Training"
              title="Key Highlights"
              description="What makes our training programs stand out from the rest"
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Who Is It For"
              title="Who Should Enroll"
              description="Our programs are designed for anyone looking to build or advance their tech career"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {targetAudiences.map((audience, index) => (
                <div
                  key={index}
                  className="bg-section-bg rounded-xl p-6 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {audience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Approach */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Our Methodology"
              title="How Our Programs Work"
              description="A structured approach to ensure effective learning and skill development"
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {curriculumSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-background rounded-xl p-6 text-center">
                    <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our training programs"
            />

            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-section-bg">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Enroll in our training programs today and take the first step
              towards a successful tech career. Contact us for customized
              corporate training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/">
                <Button size="lg" className="gradient-primary text-white">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact/">
                <Button size="lg" variant="outline">
                  Request Corporate Training
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
