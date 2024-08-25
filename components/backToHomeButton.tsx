"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function BackToHomeButton() {
  const router = usePathname();

  if (router === "/") {
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
