import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

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
  ],
  authors: [{ name: "Minicimex" }],
  creator: "Minicimex",
  metadataBase: new URL("https://minicimex.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minicimex.com",
    siteName: "Minicimex",
    title: "Minicimex | Building the Future Through Technology",
    description:
      "Professional technical training, custom software development, and innovative products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minicimex | Building the Future Through Technology",
    description:
      "Professional technical training, custom software development, and innovative products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable} ${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
