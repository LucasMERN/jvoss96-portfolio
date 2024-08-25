"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/theme-switcher";

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Project Stormsurge",
    href: "/projects/project-stormsurge",
    description:
      "Project Stormsurge is a First-Person Action Adventure game where players infiltrate a downed enemy spaceship as resistance agents, battling through hostile human facilities to reach and defeat the enemy AI Core.",
  },
  {
    title: "The Ruined Temple",
    href: "/projects/the-ruined-temple",
    description:
      "Inspired by Machu Picchu, players will explore a mysterious, abandoned temple filled with collectibles, traps, and battle-scarred ruins, all while hinting at the temple's forgotten history. Can you unlock the mystery of The Ruined Temple?",
  },
  {
    title: "The Underground Base",
    href: "/projects/the-underground-base",
    description:
      "In this 3D world, you control a character navigating an underground base, solving environmental puzzles to escape.",
  },
  {
    title: "The Necromancer",
    href: "/projects/the-necromancer",
    description:
      "Tile based puzzle game stocked full of enemy pawns, summoned skeletons and turrets! Interact with your environment, summon helper skeletons, and beat the puzzle to continue to the next level.",
  },
  {
    title: "The Damaged Frigate",
    href: "/projects/the-damaged-frigate",
    description:
      "Players control a mech-suited engineer navigating a tightly designed, interconnected frigate, using repair and gravity gun abilities to fix critical systems, locate the reactor, pursue optional side objectives, and uncover hidden items.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>My Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
              <ListItem title="All Projects" href="/projects">
                Click here to view all of my projects!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resume" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
