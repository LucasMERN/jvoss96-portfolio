import Hero from "@/components/hero";
import Image from "next/image";
import headshot from "@/public/headshot.webp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6">
      <section className="container flex flex-col lg:flex-row lg:justify-between my-16">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold tracking-widest">ABOUT</h2>
          <Image
            height={300}
            width={300}
            alt="Headshot of Justice Voss."
            src={headshot}
            className="-mt-8 h-auto"
            priority
          />
        </div>
        <p className="lg:w-1/2 mt-6 lg:mt-24">
          I am a recent game design graduate from Full Sail University.
          <br />
          <br />
          I have a passion for exploring all facets of game design, including
          engine development, art, animation, level and systems design, and
          sound design.
          <br />
          <br />
          My goal is to gain diverse experience to bring my creative ideas to
          life and share them with the world. Feel free to check out my
          portfolio to see my achievements.
          <br />
          <br />
          If you are interested in connecting, my contact information is
          provided below.
        </p>
      </section>
      <Hero />
    </main>
  );
}
