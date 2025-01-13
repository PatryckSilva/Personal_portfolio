import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personalProjectsInfos } from "./data";
import PersonalProjectsCard from "./PersonalProjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ProjectsFrame = () => {
  return (
    <section
      className={`flex w-full flex-col items-center justify-start gap-10 px-4 pt-20`}
    >
      <article className="flex flex-col items-center gap-4">
        <h4
          className={`font-sans text-2xl font-bold uppercase text-foreground/80 md:text-3xl`}
        >
          Meus Projetos
        </h4>

        <span
          className={`max-w-[350px] text-center font-mono text-sm text-muted-foreground md:max-w-[700px] md:text-base lg:max-w-[800px]`}
        >
          Explore projetos que representaram minhas contribuições e interesses.
        </span>
      </article>

      <Tabs defaultValue="mine" className={`space-y-5`}>
        {/* TODO: grid-cols-2 após adicionar aba de collab */}
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="mine">Meus Projetos Pessoais</TabsTrigger>

          {/* <TabsTrigger value="collab">Minhas colaborações</TabsTrigger> */}
        </TabsList>

        <TabsContent value="mine">
          <section
            className={`xs:max-w-[400px] flex w-full max-w-[350px] flex-col justify-center gap-10 md:max-w-[600px] lg:max-w-[850px]`}
          >
            <Carousel>
              <CarouselContent>
                {personalProjectsInfos.map(
                  (
                    {
                      projectDescription,
                      projectName,
                      srcImage,
                      code,
                      link,
                      techs,
                    },
                    index,
                  ) => (
                    <CarouselItem key={index}>
                      <PersonalProjectsCard
                        projectDescription={projectDescription}
                        key={projectName}
                        projectName={projectName}
                        srcImage={srcImage}
                        code={code}
                        link={link}
                        techs={techs}
                      />
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>

              <div className={`hidden md:block`}>
                <CarouselPrevious className={`bg-primary text-white`} />

                <CarouselNext className={`bg-primary text-white`} />
              </div>

              <div className={`md:hidden`}>
                <button
                  className={`absolute bottom-1/2 left-10 -translate-y-1/2`}
                >
                  <CarouselPrevious className={`bg-primary text-white`} />
                </button>

                <button
                  className={`absolute bottom-1/2 right-10 -translate-y-1/2`}
                >
                  <CarouselNext className={`bg-primary text-white`} />
                </button>
              </div>
            </Carousel>
          </section>
        </TabsContent>

        {/* <TabsContent value="collab">
        </TabsContent> */}
      </Tabs>
    </section>
  );
};
