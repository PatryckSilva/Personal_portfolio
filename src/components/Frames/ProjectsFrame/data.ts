import { links } from "@/utils/constants";

export type TProject = {
  projectName: string;
  projectDescription: string;
  srcImage: string;
  link: string;
  code: string;
  techs: string[];
  isCollab?: boolean;
};

export const personalProjectsInfos: TProject[] = [
  {
    projectName: "Landing page para Paulo Isidoro Koscak",
    projectDescription:
      "Desenvolvi uma landing page promocional para Markos Koscak, autor de dois livros, criador de conteúdo digital e comediante de stand-up. O projeto apresenta informações sobre seus livros, plataformas de conteúdo (incluindo YouTube) e carreira na comédia, além de um formulário de contato funcional. Utilizei Next.js 14 com React Server Components para uma experiência de alta performance, Tailwind CSS para estilização, e shadcn/ui para componentes reutilizáveis. O design conta com animações de carrossel para exibir depoimentos, garantindo uma navegação moderna e atraente. Também fui responsável pelo design completo da página, alinhando estética e funcionalidade.",
    srcImage: "/images/personalProjects/Case-1.webp",
    link: links.koscakWeb,
    code: links.koscakCode,
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "React-Hook-Form",
      "Zod",
      "Shadcn/ui",
      "Typescript",
      "Animations",
      "Design",
    ],
  },
  {
    projectName: "Meu Portfólio Pessoal",
    projectDescription:
      "Desenvolvi meu portfólio pessoal como uma plataforma para destacar minha trajetória profissional, habilidades técnicas e projetos realizados. A página combina uma interface moderna e intuitiva com informações detalhadas sobre meu trabalho como desenvolvedor web. Utilizei Next.js 14 com React Server Components para otimizar o desempenho, Tailwind CSS para uma estilização responsiva e elegante, e shadcn/ui para implementar componentes reutilizáveis. Além de exibir meus projetos e habilidades, o portfólio inclui uma seção de contato funcional, permitindo que visitantes entrem em contato diretamente comigo. Fui responsável por todo o design, priorizando uma navegação simples e uma apresentação visualmente atraente.",
    srcImage: "/images/personalProjects/Case-2.webp",
    link: links.portfolioWeb,
    code: links.portfolioCode,
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "React-Hook-Form",
      "Zod",
      "Shadcn/ui",
      "Typescript",
      "Animations",
      "Design",
    ],
  },

  {
    projectName: "Notes Manager",
    projectDescription:
      "Desenvolvi um gerenciador de notas para otimizar a organização pessoal e profissional. O projeto oferece funcionalidades CRUD completas, permitindo criar, editar, excluir e visualizar anotações de forma prática. Utilizei Next.js e React.js para construir uma interface intuitiva e responsiva, com Tailwind CSS e shadcn/ui garantindo uma estilização moderna e componentes reutilizáveis. React-Hook-Form aliado ao Zod foi empregado para validação robusta dos formulários, enquanto o back-end foi implementado com NestJS, integrando Prisma e PostgreSQL para um gerenciamento eficiente dos dados. Também fui responsável pelo design e pelas animações, assegurando uma experiência de navegação dinâmica e atraente.",
    srcImage: "/images/personalProjects/notesmanager.webp",
    code: links.notesManagerCode,
    link: links.notesManagerWeb,
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "React-Hook-Form",
      "Zod",
      "Shadcn/ui",
      "Typescript",
      "Animations",
      "Design",
      "NestJs",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    projectName: "Página de Feedback para Doces Artesanais",
    projectDescription:
      "Criei uma página simples e funcional para ajudar minha irmã a coletar feedbacks sobre os doces artesanais que ela vende. O projeto tem um design minimalista e intuitivo, com um formulário composto por dois campos: nome e feedback. Desenvolvido com Next.js e Tailwind CSS, a página conta com uma animação encantadora que aparece ao enviar um feedback, proporcionando uma experiência leve e divertida para os clientes. Todos os recados são armazenados diretamente em uma planilha, facilitando a organização e ajudando minha irmã a aprimorar seus produtos e serviços. O projeto foi muito bem recebido tanto por ela quanto pelos clientes, tornando a interação com a marca mais especial e cativante.",
    srcImage: "/images/personalProjects/Case-3.webp",
    link: links.natsWeb,
    code: links.natsCode,
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "React-Hook-Form",
      "Zod",
      "Shadcn/ui",
      "Typescript",
      "Animations",
      "Design",
    ],
  },
];

export const collabProjectsInfos: TProject[] = [
  {
    projectName: "Lab Culture",
    projectDescription:
      "No projeto da Lab Culture, um estúdio especializado em design e experiência do usuário, contribuí para o desenvolvimento completo do site. Trabalhamos seguindo fielmente o protótipo elaborado no Figma, garantindo que cada detalhe do design fosse traduzido com precisão para o ambiente web. O site é rico em animações, proporcionando uma experiência interativa e fluida para os usuários. Também implementei o envio de e-mails diretamente pela plataforma e integrei uma API desenvolvida com Strapi, que permite a publicação e gerenciamento de conteúdo de forma eficiente. Foquei em criar uma interface responsiva, otimizando a performance e mantendo uma estrutura de código limpa e escalável, alinhada às melhores práticas do mercado.",
    srcImage: "/images/collabProjects/lab-culture.webp",
    link: "https://labculture.com.br/",
    code: "/",
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "Typescript",
      "Nodemailer",
      "Strapi",
      "Animations",
      "Design",
    ],
    isCollab: true,
  },
  {
    projectName: "NoventaTI",
    projectDescription:
      "Desenvolvemos o novo site institucional da Noventa, uma empresa de destaque nacional no mercado de sistemas de gestão de obras. O projeto inclui um blog totalmente customizado, oferecendo flexibilidade na publicação de conteúdos estratégicos, e um checkout integrado diretamente ao site, projetado para otimizar a conversão de novos clientes. Nosso foco está em entregar uma solução moderna, responsiva e funcional, alinhada à identidade da empresa e às necessidades de seu público-alvo.",
    srcImage: "/images/collabProjects/90.webp",
    link: "https://www.noventa.com.br/",
    code: "/",
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "Typescript",
      "Nodemailer",
      "Strapi",
      "Animations",
      "Design",
      "Zustand",
      "Embla Carousel",
    ],
    isCollab: true,
  },
  {
    projectName: "Metasource Games",
    projectDescription:
      "Desenvolvemos o site institucional da Metasource Games, uma empresa americana especializada em jogos baseados em blockchain. Fomos responsáveis por todo o processo, desde o design e posicionamento estratégico até o copywriting e o desenvolvimento. O site foi projetado para refletir a inovação e o dinamismo da empresa, com uma interface atraente e funcional que comunica efetivamente os valores e produtos da marca.",
    srcImage: "/images/collabProjects/metagames.webp",
    link: "https://metasourcegames.com/",
    code: "/",
    techs: [
      "NextJs",
      "ReactJs",
      "TailwindCSS",
      "Typescript",
      "Animations",
      "Design",
      "Embla Carousel",
    ],
    isCollab: true,
  },
];
