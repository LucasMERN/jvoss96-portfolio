import NotFound from "@/pages/NotFound";
import Stormsurge from "@/pages/project-stormsurge";
import Frigate from "@/pages/the-damaged-frigate";
import Necromancer from "@/pages/the-necromancer";
import Temple from "@/pages/the-ruined-temple";
import Base from "@/pages/the-underground-base";

export function generateStaticParams() {
  return [
    { name: "project-stormsurge" },
    { name: "the-underground-base" },
    { name: "the-damaged-frigate" },
    { name: "the-ruined-temple" },
    { name: "the-necromancer" },
  ];
}

export default function Page({ params }: { params: { name: string } }) {
  const { name } = params;

  switch (name) {
    case "project-stormsurge":
      return <Stormsurge />;
    case "the-underground-base":
      return <Base />;
    case "the-damaged-frigate":
      return <Frigate />;
    case "the-ruined-temple":
      return <Temple />;
    case "the-necromancer":
      return <Necromancer />;
    default:
      return <NotFound />;
  }
}
