import Hero from "@/components/hero";
import Image from "next/image";
import headshot from "@/public/headshot1.jpg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6">
      <section className="container flex flex-col lg:flex-row lg:gap-24 mb-24">
        <div className="flex flex-col mt-8">
          <h2 className="text-2xl font-bold tracking-widest mt-8 mb-4">ABOUT</h2>
          <div className="rounded-full overflow-hidden aspect-square">
            <Image
              height={300}
              width={300}
              alt="Headshot of Justice Voss."
              src={headshot}
              priority
            />
          </div>
        </div>
        <p className="lg:w-1/2 mt-6 lg:mt-24 lg:text-xl lg:font-semibold">
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
