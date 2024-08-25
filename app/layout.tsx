import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Linkedin, Mail, Youtube } from "lucide-react";

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
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="py-8 border-b border-white">
            <div className="container md:flex justify-between md:items-end">
              <Link href="/">
                <h1 className="hidden md:block text-5xl font-bold">
                  Justice Voss
                </h1>
              </Link>
              <Navbar />
            </div>
          </div>
          {children}
          <footer className="border-t border-white py-6">
            <section className="container flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
              <span>
                Designed & Developed by <Link href="/">Lucas Winkler</Link> ©
                2024
              </span>
              <div className="flex flex-row gap-4 items-center">
                <Link href="">
                  <Mail />
                </Link>
                <Link href="">
                  <Linkedin />
                </Link>
                <Link href="">
                  <Youtube />
                </Link>
              </div>
            </section>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
