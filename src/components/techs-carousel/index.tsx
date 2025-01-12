import { techList } from "./data";

export function InfiniteCarousel() {
  return (
    <div className="logos flex w-full items-center bg-background py-20">
      <div className="logos-slide">
        {techList.map((tech) => {
          const { name, icon: Icon, color } = tech;
          return (
            <div
              className="mr-20 inline-block transition-all hover:scale-125"
              key={tech.name}
            >
              <Icon
                className="svg-size dark:text-text-dark text-zinc-700"
                color={color}
              />
            </div>
          );
        })}
      </div>
      <div className="logos-slide">
        {techList.map((tech) => {
          const { name, icon: Icon, color } = tech;
          return (
            <div
              className="mr-20 inline-block transition-all hover:scale-125"
              key={tech.name}
            >
              <Icon
                className="svg-size dark:text-text-dark text-zinc-700"
                size={50}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
