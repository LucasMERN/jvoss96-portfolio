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
import b3 from "@/public/underground-base/b-3.jpeg";

const project = {
  title: "The Underground Base",
  role: "Independent",
  url: "/projects/the-underground-base",
  src: b3,
  alt: "gallery photo",
  desc: [
    "This Project was design to practice greyboxing and level prototyping, the focus was to expand my skills in creating puzzles with an IPM (Introduce, Practice, Mastery) design methodology. I also wanted to practice creating play spaces that end where the player enters like dungeons and side areas in large RPG games like Horizon: Zero Dawn. The theme for this project was a hidden base in the mountains with the overall design being inspired by the portal series.",
  ],
  year: "2022",
  genre: "Puzzle Adventure",
  platform: "",
  engine: "Unreal Engine 4",
};

const aGallery = [
  "a-1.jpeg",
  "a-2.jpeg",
  "a-3.jpeg",
  "a-4.jpeg",
  "a-5.jpeg",
  "a-6.jpeg",
  "a-7.jpeg",
];

const bGallery = [
  "b-1.jpeg",
  "b-2.jpeg",
  "b-3.jpeg",
  "b-4.jpeg",
  "b-5.jpeg",
  "b-6.jpeg",
  "b-7.jpeg",
  "b-8.jpeg",
  "b-9.jpeg",
  "b-10.jpeg",
  "b-11.jpeg",
  "b-12.jpeg",
  "b-13.jpeg",
  "b-14.jpeg",
  "b-15.jpeg",
  "b-16.jpeg",
  "b-17.jpeg",
  "b-18.jpeg",
  "b-19.jpeg",
  "b-20.jpeg",
  "b-21.jpeg",
  "b-22.jpeg",
  "b-23.jpeg",
  "b-24.jpeg",
];

const cGallery = [
  "c-1.jpeg",
  "c-2.jpeg",
  "c-3.jpeg",
  "c-4.jpeg",
  "c-5.jpeg",
  "c-6.jpeg",
  "c-7.jpeg",
  "c-8.jpeg",
  "c-9.jpeg",
  "c-10.jpeg",
  "c-11.jpeg",
  "c-12.jpeg",
  "c-13.jpeg",
  "c-14.jpeg",
  "c-15.jpeg",
  "c-16.jpeg",
  "c-17.jpeg",
  "c-18.jpeg",
  "c-19.jpeg",
  "c-20.jpeg",
  "c-21.jpeg",
  "c-22.jpeg",
  "c-23.jpeg",
  "c-24.jpeg",
  "c-25.jpeg",
  "c-26.jpeg",
  "c-27.jpeg",
  "c-28.jpeg",
  "c-29.jpeg",
  "c-30.jpeg",
  "c-31.jpeg",
  "c-32.jpeg",
  "c-33.jpeg",
  "c-34.jpeg",
  "c-35.jpeg",
  "c-36.jpeg",
  "c-37.jpeg",
  "c-38.jpeg",
];

const caveGallery = [
  "cave-1.jpeg",
  "cave-2.jpeg",
  "cave-3.jpeg",
  "cave-4.jpeg",
];

const shaftGallery = [
  "shaft-1.jpeg",
  "shaft-2.jpeg",
  "shaft-3.jpeg",
  "shaft-4.jpeg",
  "shaft-5.jpeg",
  "shaft-6.jpeg",
  "shaft-7.jpeg",
  "shaft-8.jpeg",
  "shaft-9.jpeg",
];

const xGallery = ["x-1", "x-2", "x-3", "x-4"];

export default function Base() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-primary w-fit pb-2 pr-12">
            THE UNDERGROUND BASE
          </h2>
        </div>
        <ProjectHero item={project} />
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Videos</h3>
          <div className="flex items-center justify-between">
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/embed/pyDDsWAdbXM"
                width="400"
                height="320"
                loading="eager"
                title="Project Stormsurge Gameplay Trailer."
                className="w-1/2"
              />
            </React.Suspense>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-8 pb-2 container flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Mountain Exterior:</h3>
          <p>
            For this small level I wanted the exterior to the cave to be
            inescapable. To do so I had the player start the level with a small
            cutscene of them jumping down into a small outcropping where the
            cave that houses the hidden base is.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {xGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
          <h3 className="text-2xl font-medium">Cave Interior:</h3>
          <p>
            For the cave I wanted to do a small reveal so when the player enters
            the cave they have to walk inside a little bit before they reach the
            base. I also wanted the base to look partially damaged by adding in
            a destroyed entrance door and some flickering lights above the
            entrance. I wanted to add a little to the area so I added a small
            pond that is used to pump water into the facility that will be used
            later to drop into from the hidden exit in the base wall. To enhance
            the destroyed effect their are dead bodies throughout the facility
            that can have items necessary for progression.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {caveGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
          <h3 className="text-2xl font-medium">Facility Test Room A:</h3>
          <p>
            So the concept for this idea was a puzzle dungeon inspired by
            portal. To this end the facility is broken down into test chambers
            that the player must clear to reach the reward room at the end of
            the facility. The first room requires the player to move a cube onto
            a pressure plate to power a piston and the door at the end of the
            room. Once powered the player can climb up the piston to reach the
            door and a death body with a keycard to open the door at the end of
            the hallway.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {aGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
          <h3 className="text-2xl font-medium">Facility Test Room B:</h3>
          <p>
            Test Room B requires the player to do a series of tasks to progress.
            The tasks involve pushing cubes around to navigate the space, find
            hidden keycards, and eventually power a door with pressure plates.
            The first task once finished will allow the player to reach the
            second area of test room B. I wanted to make this room feel like a
            generator room so I created generators attached to the walls and
            made a series of wires that run throughout the room connecting the
            various interactables in the room. Once the player has completed the
            second task they will be able to use a pressure plate to open the
            door which acts as a valve to keep the player from returning to
            other sections of the level.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {bGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
          <h3 className="text-2xl font-medium">Facility Test Room C:</h3>
          <p>
            Test Room C is the final chamber and has two tests. The first test
            requires the player to use a series of buttons to move structures
            around an area so the player can push the boxes to the pressure
            plates. Once done a wall will move revealing the second part of the
            chamber which will require the player to push cubes around the area
            to unlock different sections of the area. Once unlocked the player
            must climb up to the unlocked area to remove obstacles from the
            cubes paths. This is to help break up the gameplay so that the
            player isn&apos;t only pushing boxes around the entire time by
            adding parkour and other interactable objects. Once completed the
            player will be able to access the reward room up above which acts as
            a valve and a gate by locking the player in till they find the
            switch to open the hidden exit.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {cGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
          <h3 className="text-2xl font-medium">Hidden Maintenance Shaft:</h3>
          <p>
            Once the reward rooms hidden door is unlocked the player will have
            access to a maintenance shaft that leads the player back to the
            exterior of the base allowing for the puzzle dungeon to end where it
            began.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {shaftGallery.map((_, index) => (
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
                              src={`/underground-base/${_}`}
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
                      height={1500}
                      width={1500}
                      alt="gallery image"
                      src={`/underground-base/${_}`}
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
