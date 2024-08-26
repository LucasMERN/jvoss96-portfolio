import Image, { StaticImageData } from "next/image";

type ProjectData = {
  title: string;
  role: string;
  desc: string[];
  year: string;
  genre: string;
  platform: string;
  engine: string;
  src: StaticImageData;
  alt: string;
};

const ProjectHero = ({ item }: { item: ProjectData }) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="aspect-video w-full h-full flex justify-center items-center shadow-lg relative xl:h-[45rem]">
        <Image
          src={item.src}
          alt={item.alt}
          className="h-full w-full"
        />
        <div className="lg:flex flex-col gap-2 absolute left-4 bottom-4 bg-black/60 p-4 rounded lg:w-5/6 xl:w-1/2 hidden xl:left-16 xl:bottom-16">
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">ROLE</span>
            <span>{item.role}</span>
          </div>
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">DESCRIPTION</span>
            <div>
              {item.desc.map((descItem, index) => (
                <>
                  <p key={index}>{descItem}</p>
                  {index === item.desc.length - 1 ? "" : <br />}
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">YEAR</span>
            <span>{item.year}</span>
          </div>
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">GENRE</span>
            <span>{item.genre}</span>
          </div>
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">GAME ENGINE</span>
            <span>{item.engine}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:hidden container">
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
    </section>
  );
};

export default ProjectHero;
