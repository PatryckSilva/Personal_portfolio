"use client";
import * as React from "react";

import { IMAGES_OUR_TECHNOLOGIES } from "./data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function InfiniteCarousel() {
  const imagesDarkTheme = ["next", "express", "github"];

  return (
    <div className="mx-auto w-full overflow-hidden border-y border-border bg-background py-10">
      <div className="flex animate-slide_logos gap-0">
        {IMAGES_OUR_TECHNOLOGIES.map((logo, index) => (
          <div key={index} className="w-[25%] flex-none px-4 lg:w-[13%]">
            <Image
              src={logo.url}
              alt={`Logo ${index + 1}`}
              width={200}
              height={100}
              className={cn(
                `${imagesDarkTheme.includes(logo.alt.toLowerCase()) ? "dark:invert" : ""}`,
                "h-14 w-full object-contain",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
