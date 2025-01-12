"use client";

import { ContextMenuProvider } from "@/components/contextMenuProvider";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <ContextMenuProvider>
        <InteractiveBackground>
          {children}
          <Toaster />
        </InteractiveBackground>
      </ContextMenuProvider>
    </ThemeProvider>
  );
};
