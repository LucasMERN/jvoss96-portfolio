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

const project = {
  title: "The Damaged Frigate",
  role: "Level Designer, Game Mechanic Designer",
  url: "/projects/the-damaged-frigate",
  src: "/damaged-frigate/level-4.webp",
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
  "doc-1",
  "doc-2",
  "doc-3",
  "doc-4",
  "doc-5",
  "doc-6",
  "doc-7",
];

const coreGallery = [
  "core-1",
  "core-2",
  "core-3",
  "core-4",
  "core-5",
  "core-6",
  "core-7",
];

const habitatGallery = [
  "habitat-1",
  "habitat-2",
  "habitat-3",
  "habitat-4",
  "habitat-5",
  "habitat-6",
  "habitat-7",
  "habitat-8",
];

const levelGallery = ["level-1", "level-2", "level-3", "level-4"];

const shipGallery = [
  "ship-1",
  "ship-2",
  "ship-3",
  "ship-4",
  "ship-5",
  "ship-6",
  "ship-7",
  "ship-8",
];

const tunnelGallery = [
  "tunnel-1",
  "tunnel-2",
  "tunnel-3",
  "tunnel-4",
  "tunnel-5",
  "tunnel-6",
  "tunnel-7",
  "tunnel-8",
  "tunnel-9",
  "tunnel-10",
  "tunnel-11",
  "tunnel-12",
  "tunnel-13",
  "tunnel-14",
  "tunnel-15",
];

export default function Frigate() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-white w-fit pb-2 pr-12">
            THE DAMAGED FRIGATE
          </h2>
        </div>
        <ProjectHero item={project} />
      </section>

      <section>
        <div className="pt-8 pb-2 container">
          <h3 className="text-2xl font-medium">Videos</h3>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-0 border-0 h-full">
                      <CardContent className="h-full p-0">
                        <Image
                          height={500}
                          width={500}
                          alt="gallery image"
                          src={`/damaged-frigate/${_}.webp`}
                          style={{ objectFit: "cover" }}
                          className="h-full w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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
