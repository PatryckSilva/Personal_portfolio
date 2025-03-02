"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collabProjectsInfos, personalProjectsInfos } from "./data";
import PersonalProjectsCard from "./PersonalProjects";
import { usePagination } from "@/hooks/pagination";
import { Pagination } from "@/components/ui/paginate";

export const ProjectsFrame = () => {
  const {
    handlePaginationClick: handlePaginationPersonal,
    pages: pagesPersonalProjects,
    paginatedItems: paginatedItemsPersonalProjects,
  } = usePagination({
    items: personalProjectsInfos,
    maxItemsPerPage: 3,
  });

  return (
    <section
      id="projects"
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
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mine">Meus Projetos Pessoais</TabsTrigger>

          <TabsTrigger value="collab">Minhas colaborações</TabsTrigger>
        </TabsList>

        <TabsContent value="mine">
          <section
            className={`flex w-full max-w-[1000px] flex-col justify-center gap-10`}
          >
            {paginatedItemsPersonalProjects.map((item, index) => (
              <PersonalProjectsCard
                projectDescription={item.projectDescription}
                key={index}
                projectName={item.projectName}
                srcImage={item.srcImage}
                code={item.code}
                link={item.link}
                techs={item.techs}
              />
            ))}
          </section>

          <br />

          {personalProjectsInfos.length !== 0 && (
            <Pagination
              handlePaginationClick={handlePaginationPersonal}
              pages={pagesPersonalProjects}
            />
          )}
        </TabsContent>

        <TabsContent value="collab">
          <section
            className={`flex w-full max-w-[1000px] flex-col justify-center gap-10`}
          >
            {collabProjectsInfos.map((item, index) => (
              <PersonalProjectsCard
                projectDescription={item.projectDescription}
                key={index}
                projectName={item.projectName}
                srcImage={item.srcImage}
                code={item.code}
                link={item.link}
                techs={item.techs}
                isCollab={item.isCollab}
              />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
};
