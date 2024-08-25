import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "The Damaged Frigate",
    role: "Level Designer, Game Mechanic Designer",
    url: "/projects/the-damaged-frigate",
    src: "/damaged-frigate/core-4.webp",
    alt: "A mech-suited character stands in a futuristic industrial environment, equipped with a repair beam and gravity gun, facing a room filled with brightly colored crates and glowing cylindrical objects, with objectives and controls displayed on the screen.",
  },
  {
    title: "Project Stormsurge",
    role: "Level Designer, Systems Designer, Game Mechanic Designer, Animator, 3D Modeler",
    url: "/projects/project-stormsurge",
    src: "/project-stormsurge/boss-1.webp",
    alt: "A dimly lit futuristic corridor is illuminated by warm, glowing lights, with a large, bright, dome-shaped energy field positioned at the center of the room, creating a striking contrast against the metallic environment.",
  },
  {
    title: "The Ruined Temple",
    role: "Level Designer",
    url: "/projects/the-ruined-temple",
    src: "/ruined-temple/ruinin-10.webp",
    alt: "A dark dungeon chamber, loosely lit by wall torches. A wooden table sits center of the room with skeletal remains scattering the floor.",
  },
  {
    title: "The Necromancer",
    role: "Level Designer, Game Mechanic Designer, 3D Modeler",
    url: "/projects/the-necromancer",
    src: "/necromancer/10.webp",
    alt: "A necromancer, skeleton, pawn, and turret sit side by side ontop a checkered floor.",
  },
  {
    title: "The Underground Base",
    role: "Level Designer",
    url: "/projects/the-underground-base",
    src: "/underground-base/c-36.webp",
    alt: "A character standing in an interior space with orange-tiled walls and floor. Surrounding the character are large glowing cylindrical machines. Two figures on the ground appear to be incapacitated.",
  },
];

type ProjectData = {
  title: string;
  role: string;
  url: string;
  src: string;
  alt: string;
};

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col gap-6 mb-6">
      <div className="py-8 container">
        <h2 className="text-2xl font-bold border-b border-b-white w-fit pb-2 pr-12">
          My Projects
        </h2>
      </div>
      <section className="container grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <HoverCard project={project} key={index} />
        ))}
      </section>
    </main>
  );
}

const HoverCard = ({ project }: { project: ProjectData }) => {
  return (
    <Link
      href={project.url}
      className="aspect-video group h-full border overflow-hidden flex justify-center items-center rounded shadow-lg relative bg-gradient-to-tr from-[rgba(0,0,0,0.8)] to-transparent"
    >
      <Image
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
        src={project.src}
        alt={project.alt}
        className="group-hover:scale-150 transition-all ease-in-out duration-500 h-full w-full"
      />
      <div className="flex flex-col absolute left-4 bottom-4 bg-black/60 p-4 rounded lg:w-1/2">
        <span className="w-[50px] h-[2px] bg-green-700"></span>
        <span className="font-medium py-1">{project.title}</span>
        <span className="text-white -mt-1">{project.role}</span>
      </div>
    </Link>
  );
};
