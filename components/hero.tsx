"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroCarousel = [
  {
    title: "The Damaged Frigate",
    desc: "Players control a mech-suited engineer navigating a tightly designed, interconnected frigate, using repair and gravity gun abilities to fix critical systems, locate the reactor, pursue optional side objectives, and uncover hidden items.",
    url: "/projects/the-damaged-frigate",
    src: "/damaged-frigate/core-4.webp",
    alt: "A mech-suited character stands in a futuristic industrial environment, equipped with a repair beam and gravity gun, facing a room filled with brightly colored crates and glowing cylindrical objects, with objectives and controls displayed on the screen.",
  },
  {
    title: "Project Stormsurge",
    desc: "Project Stormsurge is a First-Person Action Adventure game where players infiltrate a downed enemy spaceship as resistance agents, battling through hostile human facilities to reach and defeat the enemy AI Core.",
    url: "/projects/project-stormsurge",
    src: "/project-stormsurge/boss-1.webp",
    alt: "A dimly lit futuristic corridor is illuminated by warm, glowing lights, with a large, bright, dome-shaped energy field positioned at the center of the room, creating a striking contrast against the metallic environment.",
  },
  {
    title: "The Ruined Temple",
    desc: "Inspired by Machu Picchu, players will explore a mysterious, abandoned temple filled with collectibles, traps, and battle-scarred ruins, all while hinting at the temple's forgotten history. Can you unlock the mystery of The Ruined Temple?",
    url: "/projects/the-ruined-temple",
    src: "/ruined-temple/ruinin-10.webp",
    alt: "A dark dungeon chamber, loosely lit by wall torches. A wooden table sits center of the room with skeletal remains scattering the floor.",
  },
  {
    title: "The Necromancer",
    desc: "Tile based puzzle game stocked full of enemy pawns, summoned skeletons and turrets! Interact with your environment, summon helper skeletons, and beat the puzzle to continue to the next level.",
    url: "/projects/the-necromancer",
    src: "/necromancer/10.webp",
    alt: "A necromancer, skeleton, pawn, and turret sit side by side ontop a checkered floor.",
  },
  {
    title: "The Underground Base",
    desc: "In this 3D world, you control a character navigating an underground base, solving environmental puzzles to escape.",
    url: "/projects/the-underground-base",
    src: "/underground-base/c-36.webp",
    alt: "A character standing in an interior space with orange-tiled walls and floor. Surrounding the character are large glowing cylindrical machines. Two figures on the ground appear to be incapacitated.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroCarousel.length);
      }, 3500);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroCarousel.length);
    }, 3500);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroCarousel.length) % heroCarousel.length
    );
    resetInterval();
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroCarousel.length);
    resetInterval();
  };

  const { title, desc, url, src, alt } = heroCarousel[currentIndex];

  return (
    <section className="relative w-full h-[30rem] lg:h-[45rem] overflow-hidden">
      <div className="relative w-full h-full">
        <Button
          variant="outline"
          onClick={handlePrevClick}
          className="absolute z-20 bottom-16 left-16 hidden lg:block"
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          onClick={handleNextClick}
          className="absolute z-20 bottom-16 right-16 hidden lg:block"
        >
          <ChevronRight />
        </Button>
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src={src}
          alt={alt}
          priority={true}
          className="object-cover w-full h-full"
        />
        <div className="text-slate-200 absolute top-8 md:top-20 lg:top-1/4 left-0 transform w-full lg:w-1/2 ">
          <div className="flex flex-col gap-6 lg:bg-black/50 rounded mx-8 lg:p-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-xl">{desc}</p>
            <Link
              href={url}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-fit"
            >
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
