import { cn } from "@/lib/utils";
import {
  JavascriptLogo,
  NextLogo,
  NodeLogo,
  ProfileCard,
  ReactLogo,
  ReactQueryLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../SVGS/logos";

export const MyStacks = () => {
  const logos = [
    {
      id: 0,
      logo: <ReactLogo />,
      className: "absolute -top-[4px] left-[45px] ",
    },
    {
      id: 1,
      logo: <TailwindLogo />,
      className: "absolute -top-[4px] right-[45px] ",
    },
    {
      id: 2,
      logo: <TypescriptLogo />,
      className: "absolute -left-4 top-20 ",
    },
    {
      id: 3,
      logo: <JavascriptLogo />,
      className: "absolute -left-0 bottom-8 ",
    },
    {
      id: 4,
      logo: <NodeLogo />,
      className: "absolute -right-4 top-20 ",
    },
    {
      id: 5,
      logo: <NextLogo />,
      className: "absolute -right-0 bottom-8 flex ",
    },
    {
      id: 6,
      logo: <ReactQueryLogo />,
      className: "absolute -bottom-4 right-[40%]",
    },
    {
      id: 7,
      logo: <ProfileCard />,
      className: "z-0 h-[200px] w-[200px] ",
    },
  ];

  // const renderLogos = (logo: {
  //   id: number;
  //   logo: JSX.Element;
  //   className: string;
  // }) => {
  //   if (logo.id === logos[logos.length - 1].id) {
  //     return logo.logo;
  //   }

  //   if (logo.id < 7) {
  //     return (

  //     );
  //   }
  // };

  return (
    <aside className="relative flex h-full items-center justify-center">
      <section
        data-aos={"zoom-out"}
        className="relative border-spacing-4 rounded-full border-2 border-dashed border-black/60 p-10 dark:border-gray-400/90"
      >
        {logos.map((logo) => (
          <figure key={logo.id} className={`h-full w-full`}>
            {logo.id >= 7 ? (
              logo.logo
            ) : (
              <div
                className={cn(
                  "cursor-pointer rounded-full border bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95 dark:border-gray-400/90",
                  `${logo.className}`,
                )}
              >
                <span className="relative z-[2] flex size-[42px] items-center justify-center rounded-full bg-muted p-2 transition-all duration-500">
                  {logo.logo}
                </span>
              </div>
            )}
          </figure>
        ))}
      </section>
    </aside>
  );
};
