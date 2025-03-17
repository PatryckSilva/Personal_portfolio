import { cn } from "@/lib/utils";
import {
  ProfileCard,
} from "../SVGS/logos";
import Image from "next/image";

export const MyStacks = () => {
  const logos = [
    {
      id: 0,
      logo: "/images/logos/react.svg",
      className: "absolute -top-1 left-10 ",
      name: "React",
    },
    {
      id: 1,
      logo: "/images/logos/tailwind.svg",
      className: "absolute -top-[4px] right-[45px] ",
      name: "Tailwind",
    },
    {
      id: 2,
      logo: "/images/logos/typescript.svg",
      className: "absolute -left-5 top-20 ",
      name: "Typescript",
    },
    {
      id: 3,
      logo: "/images/logos/javascript.svg",
      className: "absolute -left-0 bottom-8 ",
      name: "Javascript",
    },
    {
      id: 4,
      logo: "/images/logos/node.svg",
      className: "absolute -right-5 top-20 ",
      name: "Node",
    },
    {
      id: 5,
      logo: "/images/logos/next.svg",
      className: "absolute -right-0 bottom-8 flex ",
      name: "Next",
    },
    {
      id: 6,
      logo: "/images/logos/react-query.svg",
      className: "absolute -bottom-6 right-[40%]",
      name: "React Query",
    },
    {
      id: 7,
      logo: <ProfileCard />,
      className: "z-0 size-[200px] ",
      name: "Profile Card",
    },
  ];

  return (
    <aside className="relative flex h-full items-center justify-center lg:scale-125">
      <section className="relative border-spacing-4 rounded-full border-2 border-dashed border-foreground/60 p-10">
        {logos.map((logo) => (
          <figure key={logo.id} className={`h-full w-full`}>
            {logo.id >= 7 ? (
              logo.logo
            ) : (
              <div
                className={cn(
                  "cursor-pointer rounded-full border border-foreground bg-cover p-[2px] shadow-md shadow-black/70 transition-all duration-500 hover:scale-95 active:scale-95",
                  `${logo.className}`,
                )}
              >
                <span className="relative z-[2] flex size-[42px] items-center justify-center rounded-full dark:bg-foreground bg-background p-2 transition-all duration-500">
                  <figure className={`relative size-20`}>
                    <Image src={`${logo.logo}`} alt={logo.name} fill  />
                  </figure>
                </span>
              </div>
            )}
          </figure>
        ))}
      </section>
    </aside>
  );
};
