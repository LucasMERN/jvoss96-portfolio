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
import image3 from "@/public/necromancer/3.webp";

const project = {
  title: "The Necromancer",
  role: "Level Designer, Game Mechanic Designer, 3D Modeler",
  url: "/projects/the-necromancer",
  src: image3,
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
  "1.webp",
  "2.jpeg",
  "3.webp",
  "4.jpeg",
  "5.webp",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.webp",
  "11.webp",
  "doc-1.jpeg",
  "doc-2.jpeg",
  "doc-3.jpeg",
  "doc-4.jpeg",
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
        <div className="pt-8 pb-2 container flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Videos</h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/embed/C-8scLTuagA"
                width="400"
                height="320"
                loading="eager"
                title="Project Stormsurge Gameplay Trailer."
                className="w-full"
              />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading video...</p>}>
              <iframe
                src="https://www.youtube.com/embed/hPG7Rk6H9KM"
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
                              src={`/necromancer/${_}`}
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
                      src={`/necromancer/${_}`}
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
