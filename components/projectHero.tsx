import Image from "next/image";

type ProjectData = {
  title: string;
  role: string;
  desc: string[];
  year: string;
  genre: string;
  platform: string;
  engine: string;
  src: string;
  alt: string;
};

const ProjectHero = ({ item }: { item: ProjectData }) => {
  return (
    <div className="aspect-video w-full h-full flex justify-center items-center shadow-lg relative">
      <Image
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
        src={item.src}
        alt={item.alt}
        className="h-full w-full"
      />
      <div className="flex flex-col gap-6 absolute left-4 bottom-4 bg-black/60 p-4 rounded lg:w-1/2">
        <div className="flex flex-col gap-2">
          <span className="font-bold">ROLE</span>
          <span>{item.role}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">DESCRIPTION</span>
          <div>
            {item.desc.map((descItem, index) => (
              <>
                <p key={index}>{descItem}</p>
                <br />
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">YEAR</span>
          <span>{item.year}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">GENRE</span>
          <span>{item.genre}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">GAME ENGINE</span>
          <span>{item.engine}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
