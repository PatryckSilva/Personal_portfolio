import { links } from "@/utils/constants";

export type TProject = {
  projectName: string;
  projectDescription: string;
  srcImage: string;
  link: string;
  code: string;
  techs: string[];
};
const techs = [
  "NextJs",
  "ReactJs",
  "TailwindCSS",
  "React-Hook-Form",
  "Zod",
  "Shadcn/ui",
  "Typescript",
  "Animations",
  "Design",
];

export const personalProjectsInfos: TProject[] = [
  {
    projectName: "Landing page para Paulo Isidoro Koscak",
    projectDescription:
      "Desenvolvi uma landing page promocional para Markos Koscak, autor de dois livros, criador de conteúdo digital e comediante de stand-up. O projeto apresenta informações sobre seus livros, plataformas de conteúdo (incluindo YouTube) e carreira na comédia, além de um formulário de contato funcional. Utilizei Next.js 14 com React Server Components para uma experiência de alta performance, Tailwind CSS para estilização, e shadcn/ui para componentes reutilizáveis. O design conta com animações de carrossel para exibir depoimentos, garantindo uma navegação moderna e atraente. Também fui responsável pelo design completo da página, alinhando estética e funcionalidade.",
    srcImage: "/images/personalProjects/koscak.jpeg",
    link: links.koscakWeb,
    code: links.koscakCode,
    techs: techs,
  },
  {
    projectName: "Meu Portfólio Pessoal",
    projectDescription:
      "Desenvolvi meu portfólio pessoal como uma plataforma para destacar minha trajetória profissional, habilidades técnicas e projetos realizados. A página combina uma interface moderna e intuitiva com informações detalhadas sobre meu trabalho como desenvolvedor web. Utilizei Next.js 14 com React Server Components para otimizar o desempenho, Tailwind CSS para uma estilização responsiva e elegante, e shadcn/ui para implementar componentes reutilizáveis. Além de exibir meus projetos e habilidades, o portfólio inclui uma seção de contato funcional, permitindo que visitantes entrem em contato diretamente comigo. Fui responsável por todo o design, priorizando uma navegação simples e uma apresentação visualmente atraente.",
    srcImage: "/images/personalProjects/portfa.jpeg",
    link: links.portfolioWeb,
    code: links.portfolioCode,
    techs: techs,
  },
  {
    projectName: "Página de Feedback para Doces Artesanais",
    projectDescription:
      "Criei uma página simples e funcional para ajudar minha irmã a coletar feedbacks sobre os doces artesanais que ela vende. O projeto tem um design minimalista e intuitivo, com um formulário composto por dois campos: nome e feedback. Desenvolvido com Next.js e Tailwind CSS, a página conta com uma animação encantadora que aparece ao enviar um feedback, proporcionando uma experiência leve e divertida para os clientes. Todos os recados são armazenados diretamente em uma planilha, facilitando a organização e ajudando minha irmã a aprimorar seus produtos e serviços. O projeto foi muito bem recebido tanto por ela quanto pelos clientes, tornando a interação com a marca mais especial e cativante.",
    srcImage: "/images/personalProjects/nats.jpeg",
    link: links.natsWeb,
    code: links.natsCode,
    techs: techs,
  },
];
