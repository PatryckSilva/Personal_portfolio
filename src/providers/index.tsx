"use client";

import { ContextMenuProvider } from "@/components/contextMenuProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <ContextMenuProvider>
        <BackgroundBeamsWithCollision>{children}</BackgroundBeamsWithCollision>
      </ContextMenuProvider>
    </ThemeProvider>
  );
};
