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

const project = {
  title: "Project Stormsurge",
  role: "Level Designer, Systems Designer, Game Mechanic Designer, Animator, 3D Modeler",
  url: "/projects/project-stromsurge",
  src: "/project-stormsurge/line-3.webp",
  alt: "gallery photo",
  desc: [
    "Project Stormsurge is a First-Person Action Adventure game. I was apart of a 7 member team working on this project as a graduation project. Now that we've graduated some of us are continuing to work on the game before we make it available for everyone to play on Itch.io",
    "The player takes control of an agent of the human resistance tasked with infiltrating a recently downed enemy spaceship to defeat the enemy AI Core inside. To do this the player must fight there way through recently taken over human facilities to find a way to get to the crashed spaceship undetected.",
  ],
  year: "2023",
  genre: "First-Person Action Adventure ",
  platform: "Itch.io (Coming Soon)",
  engine: "Unreal Engine 5",
};

const bossGallery = ["boss-1", "boss-2", "boss-3"];

const lineGallery = ["line-1", "line-2", "line-3", "line-4"];

const mainGallery = [
  "main-1",
  "main-2",
  "main-3",
  "main-4",
  "main-6",
  "main-7",
  "main-8",
  "main-9",
  "main-10",
  "main-11",
  "main-12",
  "main-13",
  "main-14",
  "main-15",
  "main-16",
];

const storageGallery = [
  "storage-1",
  "storage-2",
  "storage-3",
  "storage-4",
  "storage-5",
];

export default function Stormsurge() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-primary w-fit pb-2 pr-12">
            PROJECT STORMSURGE
          </h2>
        </div>
        <ProjectHero item={project} />
      </section>

      <section>
        <div className="pt-8 pb-2 container">
          <h3 className="text-2xl font-medium">Videos</h3>
          <div className="flex items-center justify-between">
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/watch?v=vW63xq6hcMA"
                width="400"
                height="320"
                loading="eager"
                title="Project Stormsurge Gameplay Trailer."
              />
            </React.Suspense>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Tutorial Level:</h3>
          <p>
            The concept behind the tutorial level is a factory that has been
            captured by the robot faction. The player must travel through the
            factory to get to the weapons storage learning the controls along
            the way and honing those skills through combat scenarios and
            platforming sections.
          </p>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Factory Storage:</h3>
          <p>
            For the start of the level I wanted the player to enter in through a
            storage area where they will find their first weapon. I wanted this
            area to feel busy yet open. To do this I added a rest area into the
            first room for people to take breaks as well as several different
            walking paths to give the player multiple routes to get around the
            small room. <br />
            <br />
            In the next section I added a security room where a couple of robot
            were stationed to impede the player while giving them a chance to
            test out their new weapon. I made sure this area was nice and open
            by keeping most of the security terminals to the sides of the room
            while having some in the middle to adjust the flow of the room. In
            the final section of the Storage area the player is taught about the
            movement mechanics and given the opportunity to practice them in
            order to cross through the room to the upper floor.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {storageGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/project-stormsurge/${_}.webp`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={500}
                      width={500}
                      alt="gallery image"
                      src={`/project-stormsurge/${_}.webp`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-6" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Factory Maintenance:</h3>
          <p>
            Once the player reached the upper floor they will be taught about
            new mechanics that will be used in the following rooms. The
            mechanics involve breakable objects, physics spheres, and
            interactable objects. The player must use these mechanics to
            progress through the level and to reach new areas. There is also a
            hidden collectable in this section of the level for the player to
            find that requires them to interact with hidden switches and to jump
            onto a set of stairs in the level that move out of position once a
            certain button is interacted with making it only reachable prior to
            this interaction.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {mainGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/project-stormsurge/${_}.webp`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={500}
                      width={500}
                      alt="gallery image"
                      src={`/project-stormsurge/${_}.webp`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-6" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Factory Assembly Line:</h3>
          <p>
            For the assembly line room I wanted to add a combat room with an
            upper platform. In original versions this area had ranged characters
            on the upper platform however due to some issues with the basic AI
            my teammates came up with I decided to scrap the ranged units from
            this room. Instead based on some feedback I added a collectable
            potion to the upper area as a reward for exploring the upper area
            and designed the section to feel like a control room for the
            facility. Once the enemies in this room are defeated the player can
            advance down the door to the right of the entrance which leads to a
            safe area with some healing potions for the player in preparation
            for the tutorial boss fight in the following room.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {lineGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/project-stormsurge/${_}.webp`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={500}
                      width={500}
                      alt="gallery image"
                      src={`/project-stormsurge/${_}.webp`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-6" />
          </Carousel>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Factory Tutorial Boss:</h3>
          <p>
            For the tutorial boss I wanted to make an easy to defeat boss with
            the ability to summon minions and shield himself from harm. The boss
            will run towards the player and do an AOE jumping slam attack once
            in range. However every time the boss loses a quarter of it&apos;s
            health it will return to the center of the room and shield itself
            before summoning minions to attack the player. Once the player has
            defeated the minions the boss&apos;s shield will break and he will
            return to attacking the player as normal.
            <br />
            <br />
            As for the room itself I wanted it to feel like a showdown between
            the player and the boss so I set up the room to reflect this by
            creating a wide open space with a focus on the center of the room
            where the boss begins the fight. I also wanted the boss to seem like
            he was guarding something so I designed the exit to look like an
            important door that the boss was guarding by putting himself between
            the player and the path forward.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {bossGallery.map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="rounded-0 border-0 h-full">
                          <CardContent className="h-full p-0">
                            <Image
                              height={500}
                              width={500}
                              alt="gallery image"
                              src={`/project-stormsurge/${_}.webp`}
                              style={{ objectFit: "cover" }}
                              className="h-full w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl">
                    <Image
                      height={500}
                      width={500}
                      alt="gallery image"
                      src={`/project-stormsurge/${_}.webp`}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-6" />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
