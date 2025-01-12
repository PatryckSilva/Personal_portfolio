import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { bulletPointsExperience } from "../data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ExperienceCard = () => {
  return (
    <Card className={`border-border px-2`}>
      <CardHeader>
        <article className={`flex w-full items-center justify-between`}>
          <CardTitle
            className={`text-lg underline transition-all hover:text-foreground/50`}
          >
            <Link
              href={"https://apex-new-site-2024.vercel.app/"}
              target="_blank"
            >
              Apex NFT Brasil
            </Link>
          </CardTitle>
          <span
            className={`font-mono text-sm font-medium text-muted-foreground`}
          >
            06/2022 - Atual
          </span>
        </article>
      </CardHeader>

      <CardContent className="flex justify-center gap-20 md:hidden">
        <section className={`flex flex-col gap-6`}>
          <ul className={`space-y-5`}>
            {bulletPointsExperience.slice(0, 10).map((item, index) => (
              <li
                key={index}
                className={`max-w-[400px] text-sm text-muted-foreground`}
              >
                • {item}
              </li>
            ))}
          </ul>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className={`border-none`}>
              <AccordionTrigger>Ver Mais</AccordionTrigger>
              <AccordionContent>
                <ul className={`!list-disc space-y-5`}>
                  {bulletPointsExperience.slice(10, 25).map((item, index) => (
                    <li
                      key={index}
                      className={`max-w-[400px] text-sm text-muted-foreground`}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </CardContent>

      <CardContent className="hidden justify-center gap-20 md:flex">
        <section>
          <ul className={`list-disc space-y-5`}>
            {bulletPointsExperience.slice(0, 13).map((item, index) => (
              <li
                key={index}
                className={`max-w-[400px] text-sm text-muted-foreground`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className={`list-disc space-y-5`}>
            {bulletPointsExperience.slice(13, 25).map((item, index) => (
              <li
                key={index}
                className={`max-w-[400px] text-sm text-muted-foreground`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </CardContent>
    </Card>
  );
};
