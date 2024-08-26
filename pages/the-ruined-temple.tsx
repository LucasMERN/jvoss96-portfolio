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
  title: "The Ruined Temple",
  role: "Lead Level Designer",
  url: "/projects/the-ruined-temple",
  src: "/ruined-temple/cave-4.jpeg",
  alt: "gallery photo",
  desc: [
    "The idea for the following project took inspiration from the mountaintop temple “Machu Picchu” in Peru. I wanted to play with the idea of having the temple be mostly unexplored. So I designed a level with a focus on platforming and exploration. To encourage exploration I added several collectibles and chests for the player to find. some were easy to find as rewards for completing areas of the level and others required the player to go looking for them.",
    "I also wanted to tell a small story about what happened and why the temple lays abandoned to time. To do this I added scenes of battle and ruined areas to show the told time has taken on the temple. I also added traps to the temple to make it seem like the owners of the temple were maybe more then what they seemed.",
    "I will note that this level was designed before I learned about useful practices such as bubble maps and level layout maps. Even so I think this level turned out really well and I am happy with the end result.",
  ],
  year: "2022",
  genre: "Puzzle Adventure",
  platform: "",
  engine: "Unreal Engine 4",
};

const caveGallery = [
  "cave-1.jpeg",
  "cave-2.jpeg",
  "cave-3.jpeg",
  "cave-4.jpeg",
  "cave-5.jpeg",
  "cave-6.jpeg",
  "cave-7.jpeg",
  "cave-8.jpeg",
  "cave-9.jpeg",
  "cave-10.jpeg",
  "cave-11.jpeg",
  "cave-12.jpeg",
];

const climbGallery = [
  "climb-1.jpeg",
  "climb-2.jpeg",
  "climb-3.jpeg",
  "climb-4.jpeg",
  "climb-5.jpeg",
  "climb-6.jpeg",
  "climb-7.jpeg",
  "climb-8.jpeg",
  "climb-9.jpeg",
];

const escapeGallery = [
  "escape-1.jpeg",
  "escape-2.jpeg",
  "escape-3.jpeg",
  "escape-4.jpeg",
];

const ruinGallery = [
  "ruin-1.jpeg",
  "ruin-2.jpeg",
  "ruin-3.jpeg",
  "ruin-4.jpeg",
  "ruin-5.jpeg",
  "ruin-6.jpeg",
];

const ruininGallery = [
  "ruinin-1.jpeg",
  "ruinin-2.jpeg",
  "ruinin-3.jpeg",
  "ruinin-4.jpeg",
  "ruinin-5.jpeg",
  "ruinin-6.jpeg",
  "ruinin-7.jpeg",
  "ruinin-8.jpeg",
  "ruinin-9.jpeg",
  "ruinin-10.jpeg",
  "ruinin-11.jpeg",
];

export default function Temple() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <section>
        <div className="pt-8 pb-2 container">
          <h2 className="text-2xl font-bold border-b border-b-primary w-fit pb-2 pr-12">
            THE RUINED TEMPLE
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
                src="https://www.youtube.com/embed/uU_anM57zMI"
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
          <h3 className="text-2xl font-medium">The Mountainside Climb:</h3>
          <p>
            For the start of the level I wanted the player to have to start
            their journey with a climb up the mountain to get them used to the
            movement mechanics while also giving them access to a beautiful
            view. To do this I created a valley for the player to look out into
            and a scenic feature of the ruins up the mountain to give the player
            something to strive to reach while they climb up to the cave opening
            in the side of the mountain. As a reward for completing this section
            I added a side section for the player to jump to just before the
            cave opening that has a chest with some treasure in it. This give
            the player a feeling of overcoming the area as well as one final
            look at the scenery before they move into the cave.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {climbGallery.map((_, index) => (
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
                              src={`/ruined-temple/${_}`}
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
                      src={`/ruined-temple/${_}`}
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
          <h3 className="text-2xl font-medium">The Cave Passage:</h3>
          <p>
            Once the player reached the cave entrance they are given a period of
            rest as they travel through the small cave and into the second
            climbing section. I wanted the cave to have a bit of mystery to it
            so I added some lit torches to suggest that someone else has been
            here recently while also acting as a guiding light for the player
            which is reinforced by the lighting that enters the cave through a
            passage to the right of where the player drops in to gently usher
            them towards the way forward. Once on the other side of the cave I
            wanted to setup for the big reveal of the ruins above so to do this
            I created a climbing section with steep ledges that required the
            player to complete several jumps to reach climbable ledges till they
            reach the top. I also wanted to reward exploration in this area
            which I did through a secondary path with a chest which reconnects
            to the main route closer to the end making the final climb a bit
            easier if the player manages to find this pathway.
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
                              src={`/ruined-temple/${_}`}
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
                      src={`/ruined-temple/${_}`}
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
          <h3 className="text-2xl font-medium">The Ruins Exterior:</h3>
          <p>
            For this section, I wanted to instill a sense of awe by making the
            player feel small in comparison to the ruin so I took this into
            account for when the player climbs up to see the ruins for the first
            time. I also wanted to add few things to this section. The first is
            a climbable tower to encourage exploration and a collectable to
            reward players who do climb the tower, The second was a simple
            puzzle the player needed to complete to progress. This was a little
            more of a challenge as we weren&apos;t allowed to edit the player
            character so I opted for a simple pressure plate puzzle. When the
            player steps on the pad the door will open, If they run to the door
            it will close. However, once they have triggered the pressure plate
            I setup a timer to have a platform with a box above the door break
            and drop the box needed to progress. I would have added a grabbing
            mechanic but we weren&apos;t allowed to add mechanics to the
            character so I settled for a physics cube the player can push into
            place.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {ruinGallery.map((_, index) => (
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
                              src={`/ruined-temple/${_}`}
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
                      src={`/ruined-temple/${_}`}
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
          <h3 className="text-2xl font-medium">The Ruins Interior:</h3>
          <p>
            For the interior, I wanted to create an interesting underground
            ruins that had waterfalls, and some platforming to reach the
            objective area. to handle this I took the time to construct two
            separate landscapes to act as the cave. By doing this I was able to
            create a hole in the ceiling so that I could add natural lighting as
            well as a waterfall that falls down from the ceiling. In order to
            have the player explore the entire area I made a route that requires
            the player to wrap around the ruins and climb upward towards their
            goal. I also wanted to add a sense that someone else had been there
            recently. This allowed me to add additional lighting to the ruins
            through lit torches. This is also to instill a sense of urgency to
            find the treasure before they come back, leading the player into the
            trap within the altar room.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {ruininGallery.map((_, index) => (
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
                              src={`/ruined-temple/${_}`}
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
                      src={`/ruined-temple/${_}`}
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
          <h3 className="text-2xl font-medium">The Escape Route:</h3>
          <p>
            To finish off the level I wanted to add a beautiful waterfall drop
            where the player will drop into a pond before moving onto the next
            level. To achieve this I setup a path with a river that leads to the
            waterfall to make a little bit more sense as to why there is a
            waterfall. The main focus for the waterfall was on the bottom where
            the player will be exiting the level. To do this I took a lot of
            time adding in foliage and VFX to the point where the waterfall hits
            the water to make it feel more realistic.
          </p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {escapeGallery.map((_, index) => (
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
                              src={`/ruined-temple/${_}`}
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
                      src={`/ruined-temple/${_}`}
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
