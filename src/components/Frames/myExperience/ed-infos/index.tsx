import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bulletPointsEducation } from "../data";
import Link from "next/link";

export const EducationCards = () => {
  return (
    <section className={`flex flex-wrap justify-center gap-5`}>
      {bulletPointsEducation.map((item) => (
        <Card
          key={item.course}
          className={`border-border md:max-w-[350px] lg:max-w-max xl:max-w-[400px]`}
        >
          <CardHeader>
            <div className={`flex items-center justify-between`}>
              <article>
                <CardTitle className={`break-words`}>{item.course}</CardTitle>
                <span className={`font-mediums text-muted-foreground`}>
                  (
                  <Link
                    href={item.link}
                    target="_blank"
                    className={`cursor-pointer underline hover:text-foreground/80`}
                  >
                    {item.company}
                  </Link>
                  )
                </span>
              </article>
              <span
                className={`whitespace-nowrap font-mono text-xs font-medium text-muted-foreground`}
              >
                {item.date}
              </span>
            </div>
            <CardDescription
              className={`!mt-5 md:max-w-[250px] lg:max-w-[430px]`}
            >
              {item.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
};
