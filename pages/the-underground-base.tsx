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
  title: "The Underground Base",
  role: "Independent",
  url: "/projects/the-underground-base",
  src: "/underground-base/b-3.webp",
  alt: "gallery photo",
  desc: [
    "This Project was design to practice greyboxing and level prototyping, the focus was to expand my skills in creating puzzles with an IPM (Introduce, Practice, Mastery) design methodology. I also wanted to practice creating play spaces that end where the player enters like dungeons and side areas in large RPG games like Horizon: Zero Dawn. The theme for this project was a hidden base in the mountains with the overall design being inspired by the portal series.",
  ],
  year: "2022",
  genre: "Puzzle Adventure",
  platform: "",
  engine: "Unreal Engine 4",
};

const aGallery = ["a-1", "a-2", "a-3", "a-4", "a-5", "a-6", "a-7"];

const bGallery = [
  "b-1",
  "b-2",
  "b-3",
  "b-4",
  "b-5",
  "b-6",
  "b-7",
  "b-8",
  "b-9",
  "b-10",
  "b-11",
  "b-12",
  "b-13",
  "b-14",
  "b-15",
  "b-16",
  "b-17",
  "b-18",
  "b-19",
  "b-20",
  "b-21",
  "b-22",
  "b-23",
  "b-24",
];

const cGallery = [
  "c-1",
  "c-2",
  "c-3",
  "c-4",
  "c-5",
  "c-6",
  "c-7",
  "c-8",
  "c-9",
  "c-10",
  "c-11",
  "c-12",
  "c-13",
  "c-14",
  "c-15",
  "c-16",
  "c-17",
  "c-18",
  "c-19",
  "c-20",
  "c-21",
  "c-22",
  "c-23",
  "c-24",
  "c-25",
  "c-26",
  "c-27",
  "c-28",
  "c-29",
  "c-30",
  "c-31",
  "c-32",
  "c-33",
  "c-34",
  "c-35",
  "c-36",
  "c-37",
  "c-38",
];

const caveGallery = ["cave-1", "cave-2", "cave-3", "cave-4"];

const shaftGallery = [
  "shaft-1",
  "shaft-2",
  "shaft-3",
  "shaft-4",
  "shaft-5",
  "shaft-6",
  "shaft-7",
  "shaft-8",
  "shaft-9",
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
        <div className="pt-8 pb-2 container">
          <h3 className="text-2xl font-medium">Videos</h3>
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
            player isn&apos;t only pushing boxes around the entire time by adding
            parkour and other interactable objects. Once completed the player
            will be able to access the reward room up above which acts as a
            valve and a gate by locking the player in till they find the switch
            to open the hidden exit.
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
                              src={`/underground-base/${_}.webp`}
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
                      src={`/underground-base/${_}.webp`}
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
