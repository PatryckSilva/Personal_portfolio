import { links } from "@/utils/constants";
import { ExperienceSection } from "./job-infos";

const fullStackXpInfos = [
  "Participação em revisões de código, fornecendo feedback construtivo e promovendo a melhora da qualidade do código em 25%.",
  "Contribuição em discussões estratégicas para definição de regras de negócios e soluções técnicas.",
  "Pesquisa e adoção de ferramentas e tecnologias que otimizaram o processo de desenvolvimento em 10%.",
  "Colaboração com equipes multifuncionais para alinhar funcionalidades com objetivos de negócios, melhorando a eficiência em 20%.",
  "Documentação de projetos e criação de guias de uso.",
  "Desenvolvimento com Styled Components, React Query, Redux Toolkit, Jest, AWS, Node.js, Prisma, PostgreSQL, Docker e Strapi.",
  "Gerenciamento de implementações em larga escala, garantindo manutenibilidade e escalabilidade.",
  "Aplicação de princípios de design de software, incluindo SOLID, para garantir a manutenibilidade e escalabilidade das aplicações.",
  "Criação de APIs robustas e eficientes com autenticação, manipulação de dados JSON e tratamento de erros.",
  "Implementação de endpoints e manutenção dos existentes utilizando Node.js com Express e NestJS.",
  "Implementação de testes automatizados que reduziram erros em produção em 30%.",
  "Otimização de rotas com filtragem e paginação, além de melhorias no desempenho com estratégias de cache (Redis e memory-cache).",
  "Integração com banco de dados utilizando Prisma.",
  "Automação de tarefas recorrentes com cron jobs.",
  "Utilização do headless CMS Strapi para gerenciar e estruturar conteúdos de forma eficiente.",
];

const frontEndXpInfos = [
  "Criação e refatoração de experiências digitais visualmente atraentes e altamente funcionais para sites e jogos de NFT. Além Disso, fiz contribuições em melhorias de UI/UX baseadas em feedback de usuários e equipe.",
  "Utilização de tecnologias como NextJS, TypeScript, TailwindCSS e React para o desenvolvimento de front end.",
  "Conexão com APIs RESTful para integração de dados.",
  "Integração de smart contracts da Blockchain no front end e back end.",
  "Utilização de ferramentas de versionamento de código como Git para gerenciamento de versões e colaboração.",
  "Participação em reuniões de equipe para discutir progressos e planejar novas funcionalidades.",
  "Participação ativa em mais de 10 projetos bem-sucedidos, atraindo milhares de jogadores.",
  "Adaptação a novas ferramentas e tecnologias conforme necessário, demonstrando vontade de aprender e crescer.",
];

export const experiences = [
  {
    role: "Full-stack Developer",
    company: "Apex NFT Brasil",
    date: "06/2023 - Atual",
    activities: fullStackXpInfos,
    link: links.apexWeb,
  },
  {
    role: "Front-end Developer",
    company: "Apex NFT Brasil",
    date: "06/2022 - 06/2023",
    activities: frontEndXpInfos,
    link: links.apexWeb,
  },
];

export const dataExperience = [
  {
    title: "Apex NFT Brasil",
    subtitle: "Full-stack Developer",
    content: (
      <section className="flex flex-col gap-10 lg:max-w-[1200px]">
        {experiences.slice(0, 1).map((item, index) => (
          <ExperienceSection key={index} experience={item} />
        ))}
      </section>
    ),
    link: links.apexWeb,
    date: "06/2023 - Atual",
  },
  {
    title: "Apex NFT Brasil",
    subtitle: "Front-end Developer",
    content: (
      <section className="flex flex-col gap-10 lg:max-w-[1200px]">
        {experiences.slice(1, 2).map((item, index) => (
          <ExperienceSection key={index} experience={item} />
        ))}
      </section>
    ),
    link: links.apexWeb,
    date: "06/2022 - 06/2023",
  },
];

export const bulletPointsEducation = [
  {
    course: "Engenharia de Software",
    company: "Gran Faculdade",
    link: links.gran,
    description: (
      <div className="flex flex-col gap-4">
        <span>
          Atualmente, estou cursando Engenharia de Software na GRAN Faculdades,
          onde adquiro conhecimentos teóricos e práticos sobre desenvolvimento
          de software, análise de sistemas, gestão de projetos e tecnologias
          emergentes.
        </span>
        <span>
          O curso é estruturado para formar profissionais capacitados a criar
          soluções tecnológicas inovadoras, combinando habilidades técnicas,
          pensamento crítico e práticas ágeis. As disciplinas abordam temas como
          programação, bancos de dados, arquitetura de software e metodologias
          ágeis, preparando-me para enfrentar os desafios do mercado de trabalho
          e contribuir para o desenvolvimento de soluções robustas e escaláveis.
        </span>
      </div>
    ),
    date: "01/2025 - Atual",
  },
  {
    course: "Curso de inglês Imersivo",
    company: "Times Idiomas",
    link: links.times,
    description: (
      <div className={`flex flex-col gap-4`}>
        <span>
          Atualmente participo de um curso de inglês imersivo, cujo foco
          principal é o desenvolvimento de habilidades de conversação. Este
          curso tem me proporcionado uma experiência rica e prática, permitindo
          que eu aprenda a língua de forma dinâmica e envolvente.
        </span>
        <span className={`text-sm text-muted-foreground`}>
          Através de atividades interativas, discussões em grupo e simulações da
          vida real, tenho aprimorado minha fluência e confiança na comunicação
          em inglês.
        </span>

        <span className={`text-sm text-muted-foreground`}>
          A imersão total no idioma tem ajudado a expandir meu vocabulário e a
          compreender melhor as nuances da comunicação, preparando-me para
          interações reais em ambientes profissionais e sociais.
        </span>
      </div>
    ),
    date: "03/2024 - Atual",
  },
  {
    course: "Pessoa Desenvolvedora Fullstack",
    company: "Generation Brasil",
    link: links.generation,
    description: (
      <ul className={`flex list-disc flex-col gap-4 pl-4`}>
        <li className={`text-sm text-muted-foreground`}>
          Desenvolvimento de aplicação full-stack utilizando Java no back end e
          PostgreSQL como banco de dados.
        </li>
        <li className={`text-sm text-muted-foreground`}>
          Front end desenvolvido com ReactJS e TypeScript.
        </li>
        <li className={`text-sm text-muted-foreground`}>
          Desenvolvimento de habilidades interpessoais como Comunicação Eficaz,
          Colaboração, Adaptabilidade e Resolução de Problema
        </li>
      </ul>
    ),
    date: "03/2022 - 06/2022",
  },
];
