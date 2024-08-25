import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function BackToHomeButton() {
  const router = useRouter();

  if (router.pathname === "/") {
    return null;
  }

  return (
    <div className="container md:hidden">
      <Link href="/" className="flex gap-2 w-fit py-6">
        <ArrowLeft /> <Home />
      </Link>
    </div>
  );
}
