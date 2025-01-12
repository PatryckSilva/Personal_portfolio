import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { bulletPointsEducation, bulletPointsExperience } from "./data";
export const MyExperience = () => {
  return (
    <section
      className={`flex min-h-[100dvh] w-full flex-col items-center justify-start gap-10 px-4 pt-40`}
    >
      <article className={`flex flex-col items-center gap-4`}>
        <h3
          className={`font-sans text-3xl font-bold uppercase text-foreground/80`}
        >
          Sobre Mim
        </h3>
      </article>
      <Tabs defaultValue="xp" className={`space-y-5`}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="xp">Experiência</TabsTrigger>
          <TabsTrigger value="ed">Educação</TabsTrigger>
        </TabsList>

        <TabsContent value="xp">
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
            <CardContent className="flex justify-center gap-20">
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
        </TabsContent>

        <TabsContent value="ed">
          <section className={`flex flex-wrap justify-center gap-5`}>
            {bulletPointsEducation.map((item) => (
              <Card className={cn(`border-border`)}>
                <CardHeader>
                  <div className={`flex items-center justify-between`}>
                    <article>
                      <CardTitle>{item.course}</CardTitle>
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
                      className={`font-mono text-sm font-medium text-muted-foreground`}
                    >
                      {item.date}
                    </span>
                  </div>
                  <CardDescription
                    className={`!mt-5 md:max-w-[300px] lg:max-w-[430px]`}
                  >
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};
