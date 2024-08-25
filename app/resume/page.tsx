import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6">
      <section className="flex flex-wrap gap-4 container justify-center mb-12">
        <Badge variant="default">Perforce</Badge>
        <Badge variant="default">Confluence</Badge>
        <Badge variant="default">Unreal Engine 4</Badge>
        <Badge variant="default">Level Design</Badge>
        <Badge variant="default">Game Design</Badge>
        <Badge variant="default">Agile/SCRUM Methodologies</Badge>
        <Badge variant="default">JIRA</Badge>
        <Badge variant="secondary">Technical Documentation</Badge>
        <Badge variant="secondary">System Design</Badge>
        <Badge variant="secondary">Unreal Engine 5</Badge>
        <Badge variant="secondary">3Ds Max</Badge>
        <Badge variant="secondary">Blender</Badge>
        <Badge variant="secondary">Prototyping</Badge>
        <Badge variant="secondary">Flow Charts</Badge>
        <Badge variant="secondary">Balancing and Mechanics</Badge>
        <Badge variant="secondary">Debugging/Testing</Badge>
      </section>
      <section className="container flex flex-col justify-center items-center gap-6">
        <Link
          target="_blank"
          href="/00justicevoss-resume.pdf"
          download="00justicevoss-resume.pdf"
          className="underline -mb-3"
          aria-label="click to download the resume PDF file of Justice Voss"
        >
          <h2>Download PDF</h2>
        </Link>
        <video
          width="520"
          height="840"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/resume.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
}
