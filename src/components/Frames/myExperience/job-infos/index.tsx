import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { experiences } from "../data";

export const ExperienceCard = () => {
  return (
    <section className={`flex flex-col gap-10 lg:max-w-[1200px]`}>
      {experiences.map((item, index) => (
        <Card key={index} className={`border px-2`}>
          <CardHeader>
            <article className={`flex w-full items-center justify-between`}>
              <CardTitle className={`flex flex-col gap-2`}>
                <Link
                  href={item.link}
                  target="_blank"
                  className={`text-lg underline transition-all hover:text-foreground/50`}
                >
                  {item.company}
                </Link>
                <span className={`text-sm text-foreground/90`}>
                  {item.role}
                </span>
              </CardTitle>
              <span
                className={`font-mono text-sm font-medium text-muted-foreground`}
              >
                {item.date}
              </span>
            </article>
          </CardHeader>

          <CardContent className="flex justify-center gap-20">
            <ListComponent bulletPoints={item.activities} />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

const ListComponent = ({ bulletPoints }: { bulletPoints: string[] }) => {
  return (
    <section>
      <ul className={`list-disc space-y-5`}>
        {bulletPoints.map((item, index) => (
          <li key={index} className={`text-sm text-muted-foreground`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
