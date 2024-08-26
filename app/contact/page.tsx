import ContactForm from "@/components/contactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justice Voss | Contact",
  description: "Justice Voss's Contact Form",
};

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <ContactForm />
    </main>
  );
}
