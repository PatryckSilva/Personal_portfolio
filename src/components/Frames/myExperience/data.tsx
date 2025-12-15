import { links } from "@/utils/constants";
import { ExperienceContent } from "./job-infos";

const reveloFreelanceInfos = [
  "Desenvolver e testar prompts utilizando a IA proprietária da Revelo para criar interfaces visualmente atraentes e funcionais.",
  "Realizar testes de build, identificar erros em runtime e verificar se o código está alinhado com as referências de design e se as funcionalidades especificadas foram implementadas corretamente.",
  "Documentar todos os testes realizados, problemas identificados e modificações efetuadas, garantindo transparência, tanto para o código gerado pela IA quanto para o código reescrito.",
  "Refatorar e otimizar o código gerado, reescrevendo-o para que seja elegante, robusto e totalmente funcional, atendendo integralmente ao prompt final e às referências de design.",
  "Garantir que cada entrega atenda aos requisitos visuais e funcionais, fornecendo soluções de alta qualidade e eficiência, de modo a cumprir as expectativas do projeto na Revelo.",
];

const fullStackXpInfos = [
  "Front-end & UX: Desenvolvimento de interfaces visuais atraentes e responsivas para sites e jogos NFT. Foco na performance e na fluidez da aplicação utilizando Next.js e React, com arquiteturas de gerenciamento de estado escaláveis (Redux, ContextAPI, Zustand) e React Query e Server components para sincronização de dados.",
  "Arquitetura Real-Time: Implementação de funcionalidades em tempo real utilizando Socket.io integrado ao Redis (Pub/Sub). Essa arquitetura permitiu atualizações instantâneas de dados no site (lances de leilões e notificações), garantindo baixa latência e sincronia entre múltiplos clientes.",
  "Produtividade com IA: Integração de ferramentas como Cursor AI e GitHub Copilot no fluxo diário de desenvolvimento, acelerando a escrita de boilerplate, testes e refatoração, o que aumentou a eficiência nas entregas do time.",
  "Back-end & Arquitetura: Construção e manutenção de APIs RESTful robustas com Node.js (Express/NestJS). Implementação de estratégias avançadas de tratamento de erros, autenticação segura e manipulação complexa de dados JSON.",
  "Performance & Assincronismo: Criação e gerenciamento de Cron Jobs para automação de tarefas recorrentes e uso de filas (RabbitMQ, LavinMQ) para processamento assíncrono. Implementação de camadas de cache (Redis, Memory-cache) para otimização de consultas e redução de latência.",
  "Infraestrutura & Dados: Gerenciamento de banco de dados (PostgreSQL/MongoDB) utilizando ORMs como Prisma e Mongoose. Conteinerização completa de ambientes (banco de dados e aplicações) utilizando Docker e Docker Compose.",
  "Integrações: Conexão de Smart Contracts (Blockchain) com o Front/Back-end e implementação de Headless CMS (Strapi) para gestão flexível de conteúdo.",
  "Qualidade & Processos: Atuação ativa em Code Reviews e discussões de arquitetura, elevando a qualidade do código em 25%. Cobertura de testes automatizados (Jest) que reduziu falhas em produção em cerca de 30%."
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

export const dataExperience = [
  {
    title: "Revelo",
    subtitle: "AI Training and Software Development Freelancer",
    content: (
      <section className="flex flex-col gap-10 lg:max-w-[1200px]">
        <ExperienceContent bulletPoints={reveloFreelanceInfos} />
      </section>
    ),
    link: links.revelo,
    date: "03/2025 - 04/2025",
  },
  {
    title: "Apex NFT Brasil",
    subtitle: "Full-stack Developer",
    content: (
      <section className="flex flex-col gap-10 lg:max-w-[1200px]">
        <ExperienceContent bulletPoints={fullStackXpInfos} />
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
        <ExperienceContent bulletPoints={frontEndXpInfos} />
      </section>
    ),
    link: links.apexNft,
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
