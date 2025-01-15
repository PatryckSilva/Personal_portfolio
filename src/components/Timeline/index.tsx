"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  subtitle: string;
  link: string;
  date: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="h-full w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-[1200px] pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-[350px]">
              <div className="absolute left-3 flex size-10 scale-75 items-center justify-center rounded-full border border-border bg-primary/60 md:left-3">
                <div className="size-4 rounded-full border bg-muted p-2" />
              </div>
              <CardHeader className={`hidden md:block md:pl-20 md:text-4xl`}>
                <article className="flex w-full flex-col items-start justify-start">
                  <CardTitle className="flex flex-col gap-2">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-3xl font-bold text-neutral-500 underline transition-all dark:text-neutral-500"
                    >
                      {item.title}
                    </Link>
                    <span className="text-lg text-foreground/90">
                      {item.subtitle}
                    </span>
                  </CardTitle>
                  <span className="font-mono text-sm font-medium text-muted-foreground">
                    {item.date}
                  </span>
                </article>
              </CardHeader>
            </div>

            <div className="relative w-full pl-14 pr-0 md:pl-4">
              <CardHeader
                className={`mb-4 block md:hidden md:pl-20 md:text-4xl`}
              >
                <article className="flex w-full flex-col items-start justify-start">
                  <CardTitle className="flex flex-col gap-2">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-left text-2xl font-bold text-neutral-500 underline dark:text-neutral-500"
                    >
                      {item.title}
                    </Link>
                    <span className="text-lg text-foreground/90">
                      {item.subtitle}
                    </span>
                  </CardTitle>
                  <span className="font-mono text-sm font-medium text-muted-foreground">
                    {item.date}
                  </span>
                </article>
              </CardHeader>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
