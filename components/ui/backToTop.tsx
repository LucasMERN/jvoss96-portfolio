"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <Button
        onClick={scrollToTop}
        variant="outline"
        className="fixed bottom-24 right-6 z-50 rounded-full px-3 py-6 border border-primary text-primary shadow-lg hover:bg-primary hover:text-white focus:outline-none"
      >
        <ArrowUp size={24} />
      </Button>
    )
  );
}
