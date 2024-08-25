import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Linkedin, Mail, Youtube } from "lucide-react";
import BackToTopButton from "@/components/backToTop";
import BackToHomeButton from "@/components/backToHomeButton";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Justice Voss | Portfolio",
  description: "Justice Voss's game development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="py-8 border-b border-primary">
            <div className="container md:flex justify-between md:items-end">
              <Link href="/" aria-label="click to return to the home page">
                <h1 className="hidden md:block text-5xl font-bold">
                  Justice Voss
                </h1>
              </Link>
              <Navbar />
            </div>
          </div>
          <BackToHomeButton />
          {children}
          <BackToTopButton />
          <footer className="border-t border-primary py-6">
            <section className="container flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
              <span>
                Designed & Developed by{" "}
                <Link
                  href="https://www.linkedin.com/in/lucaswinklerdev/"
                  target="_blank"
                  className="underline"
                  aria-label="click to open the LinkedIn profile of Lucas Winkler in a different tab"
                >
                  Lucas Winkler
                </Link>{" "}
                © 2024
              </span>
              <div className="flex flex-row gap-4 items-center">
                <Link
                  href="mailto:justvoss96@gmail.com"
                  aria-label="click to compose a new email to justvoss96@gmail.com"
                >
                  <Mail />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/justice-voss-4859251b7/"
                  aria-label="click to open the LinkedIn profile of Justice Voss in a different tab"
                >
                  <Linkedin />
                </Link>
              </div>
            </section>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
