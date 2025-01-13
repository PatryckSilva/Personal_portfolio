import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationCards } from "./ed-infos";
import { dataExperience, experiences } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Timeline } from "@/components/Timeline";
export const MyExperience = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start gap-10 px-4 pt-20`}
    >
      <article className={`flex flex-col items-center gap-4`}>
        <h3
          className={`font-sans text-3xl font-bold uppercase text-foreground/80`}
        >
          Sobre Mim
        </h3>
        <span
          className={`max-w-[350px] text-center font-mono text-sm text-muted-foreground md:max-w-[700px] md:text-base lg:max-w-[800px]`}
        >
          Um resumo da minha experiência e educação, moldando meu caminho como
          desenvolvedor.
        </span>
      </article>
      <Tabs defaultValue="xp" className={`space-y-5`}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="xp">Experiência</TabsTrigger>
          <TabsTrigger value="ed">Educação</TabsTrigger>
        </TabsList>

        <TabsContent value="xp">
          <Card>
            <div className="w-full">
              <Timeline data={dataExperience} />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="ed">
          <EducationCards />
        </TabsContent>
      </Tabs>
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
