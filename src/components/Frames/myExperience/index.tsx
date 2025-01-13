import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceCard } from "./job-infos";
import { EducationCards } from "./ed-infos";
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
          <ExperienceCard />
        </TabsContent>

        <TabsContent value="ed">
          <EducationCards />
        </TabsContent>
      </Tabs>
    </section>
  );
};
