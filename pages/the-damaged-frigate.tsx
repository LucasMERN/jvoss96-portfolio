import * as React from "react";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectHero from "@/components/projectHero";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import level4 from "@/public/damaged-frigate/level-4.jpeg";

const project = {
  title: "The Damaged Frigate",
  role: "Level Designer, Game Mechanic Designer",
  url: "/projects/the-damaged-frigate",
  src: level4,
  alt: "A mech-suited character stands in a futuristic industrial environment, equipped with a repair beam and gravity gun, facing a room filled with brightly colored crates and glowing cylindrical objects, with objectives and controls displayed on the screen.",
  desc: [
    "The player takes control of a engineer in a mech suit tasked with repairing the critical systems of a recently damaged frigate so that it can be safely transported to the nearby station for proper repairs to be done. The player has access to a repair mode and a gravity gun mode which allows the player to pickup and move objects as the explore the ship looking for the reactor and any side objectives along the way. There are also hidden things scattered throughout the level for the player to find along the way as well as side objectives that the player may or may not complete.",
    "The challenge of this project was that we were required to fit the level within a specific spacing requirement and that proved to be an interesting task to overcome while still allowing the level to be interconnectable.",
    "This project is in my opinion my favorite and best work yet!",
  ],
  year: "2022",
  genre: "Puzzle Game",
  platform: "",
  engine: "Unreal Engine 5",
};

const documentGallery = [
  "doc-1.webp",
  "doc-2.webp",
  "doc-3.webp",
  "doc-4.webp",
  "doc-5.webp",
  "doc-6.webp",
  "doc-7.webp",
];

const coreGallery = [
  "core-1.jpeg",
  "core-2.jpeg",
  "core-3.jpeg",
  "core-4.jpeg",
  "core-5.jpeg",
  "core-6.webp",
  "core-7.webp",
];

const habitatGallery = [
  "habitat-1.jpeg",
  "habitat-2.jpeg",
  "habitat-3.jpeg",
  "habitat-4.jpeg",
  "habitat-5.jpeg",
  "habitat-6.jpeg",
  "habitat-7.jpeg",
  "habitat-8.webp",
];

const levelGallery = [
  "level-1.jpeg",
  "level-2.jpeg",
  "level-3.webp",
  "level-4.jpeg",
];

const shipGallery = [
  "ship-1.jpeg",
  "ship-2.jpeg",
  "ship-3.jpeg",
  "ship-4.jpeg",
  "ship-5.jpeg",
  "ship-6.jpeg",
  "ship-7.jpeg",
  "ship-8.jpeg",
];

const tunnelGallery = [
  "tunnel-1.jpeg",
  "tunnel-2.jpeg",
  "tunnel-3.jpeg",
  "tunnel-4.jpeg",
  "tunnel-5.jpeg",
  "tunnel-6.jpeg",
  "tunnel-7.jpeg",
  "tunnel-8.jpeg",
  "tunnel-9.jpeg",
  "tunnel-10.jpeg",
  "tunnel-11.jpeg",
  "tunnel-12.jpeg",
  "tunnel-13.jpeg",
  "tunnel-14.jpeg",
  "tunnel-15.jpeg",
];

export default function Frigate() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-primary w-fit pb-2 pr-12">
            THE DAMAGED FRIGATE
          </h2>
        </div>
        <ProjectHero item={project} />
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Videos</h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/embed/V4zpUxoZdo4"
                width="400"
                height="320"
                loading="eager"
                title="Project Stormsurge Gameplay Trailer."
                className="w-full"
              />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/embed/oFhToRLyvOM"
                width="400"
                height="320"
                loading="eager"
                title="Project Stormsurge Gameplay Trailer."
                className="w-full"
              />
            </React.Suspense>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Documentation</h3>
          <p>
            The Following Photos are from the designing phase where I spent a
            week creating mood boards, map diagrams and visual representations
            of gameplay mechanics to demonstrate how the prototype would
            function and play.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {documentGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Level Start:</h3>
          <p>
            So to begin the level I wanted the player to start on their ship and
            move onto the frigate. This area that the player moves into has some
            objects for the player to mess around with and get used to the grab
            mechanics and a broken terminal that the player must fix to get
            access to the following areas. The design decision for this was that
            the player could take any path they want to reach the end and thus
            encourage exploration.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {levelGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Maintenance Tunnels:</h3>
          <p>
            For the maintenance section I wanted to have a more mechanical
            feeling so to achieve this I decided to light the area in a red tone
            as well as run ductwork through the area. This is also the area
            where the sub-generator side objective is. To increase exploration
            there is an elevator in the sub-generator room that goes up to the
            habitation section.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {tunnelGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Habitation Section:</h3>
          <p>
            For the Habitation Section I wanted a simple area that had some
            objects you would find in a habitation section. Due to the limited
            assets I used a couple chairs and a table along with some crates and
            barrels of different sizes to achieve this effect. I also added a
            storage compartment just above the hidden path to get to the final
            section of the ship. As this is the middle of the level it has an
            elevator down to the maintenance floor as well as a vent that can be
            pulled of the wall to access an airlock to the exterior of the ship.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {habitatGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Ship Exterior:</h3>
          <p>
            For the ship exterior, I wanted the player to have an area with low
            gravity and a couple of different ways to explore the exterior. To
            achieve this I have an area the player has to jump on boxes to reach
            a broken console which activates a staircase to get up to the upper
            sections as well as a side objective collectable that is on a lower
            section blocked by a hazard that needs to be fixed. In the upper
            section, I have the airlock that connects to the habitation section
            to add to the option of places to go. To reach the final section of
            the ship I envisioned a path of debris the player will have to
            navigate to reach the airlock.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {shipGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">The Core:</h3>
          <p>
            For the Core of the ship I wanted it to feel like a Main generator
            room so there are large power cores that link up to the central
            generator and once the generator is turned on the first time, the
            player must fix the broken power cores and then reactivate the core
            to finish the level.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {coreGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/damaged-frigate/${_}`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={800}
                      width={1500}
                      alt="gallery image"
                      src={`/damaged-frigate/${_}`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
