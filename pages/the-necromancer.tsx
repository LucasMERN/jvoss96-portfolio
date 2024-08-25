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
  title: "The Necromancer",
  role: "Level Designer, Game Mechanic Designer, 3D Modeler",
  url: "/projects/the-necromancer",
  src: "/necromancer/3.webp",
  alt: "gallery photo",
  desc: [
    "This Project we were to take on the role of a game designer working for a game company tasked with coming up with a mechanic to implement into the companies new tile-based game project Tournamental. There was no theme for this and we also had to later implement a peers mechanic into our project to work alongside the original mechanic I made. Below are the pictures and videos related to this Project.",
    "I also made a few custom models for this project using blender which will be shown in the videos and in the gallery below.",
  ],
  year: "2022",
  genre: "Tile Based Puzzle Game",
  platform: "",
  engine: "Unreal Engine 4",
};

const gallery = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "doc-1",
  "doc-2",
  "doc-3",
  "doc-4",
];

export default function Base() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-primary w-fit pb-2 pr-12">
            THE NECROMANCER
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
          <h3 className="text-2xl font-medium">Gallery</h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {gallery.map((_, index) => (
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
                              src={`/necromancer/${_}.webp`}
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
                      src={`/necromancer/${_}.webp`}
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
