import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col mt-36 gap-6 items-center">
      <h1 className="text-4xl font-bold text-red-700">Game Not Found</h1>
      <h2 className="text-2xl font-medium">
        Please return to the{" "}
        <Link
          href="/projects"
          className="underline font-bold"
          aria-label="click to open the projects page"
        >
          Projects Page
        </Link>
        !
      </h2>
    </main>
  );
}
