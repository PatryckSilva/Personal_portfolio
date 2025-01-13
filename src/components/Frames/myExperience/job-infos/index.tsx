import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { experiences } from "../data";

const ListComponent = ({ bulletPoints }: { bulletPoints: string[] }) => (
  <section>
    <ul className="list-disc space-y-5">
      {bulletPoints.map((item, index) => (
        <li key={index} className="text-sm text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export const ExperienceSection = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => (
  <Card className="max-w-[1000px] border-none px-2 shadow-none">
    <CardHeader>
      <article className="flex w-full items-center justify-between">
        <CardTitle className="flex flex-col gap-2">
          <Link
            href={experience.link}
            target="_blank"
            className="text-lg underline transition-all hover:text-foreground/50"
          >
            {experience.company}
          </Link>
          <span className="text-sm text-foreground/90">{experience.role}</span>
        </CardTitle>
        <span className="font-mono text-sm font-medium text-muted-foreground">
          {experience.date}
        </span>
      </article>
    </CardHeader>

    <CardContent className="flex justify-center gap-20">
      <ListComponent bulletPoints={experience.activities} />
    </CardContent>
  </Card>
);
