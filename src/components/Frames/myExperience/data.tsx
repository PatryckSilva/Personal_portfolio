const fullStackXpInfos = [
  "Participação em revisões de código (Code Reviews), fornecendo feedback construtivo, com comunicação aberta e colaboração, promovendo uma melhora da qualidade do código em 25%.",
  "Contribuição em discussões estratégicas para definição de regras de negócios e soluções técnicas.",
  "Pesquisa e adoção de novas ferramentas e tecnologias, que otimizaram o processo de desenvolvimento em 10%, demonstrando adaptabilidade a novas estratégias e abordagens.",
  "Colaboração com equipes multifuncionais, incluindo designers e gerentes de produto, para alinhar as funcionalidades do produto com as necessidades dos usuários e os objetivos de negócios, resultando em uma melhoria de 20% na eficiência do processo de desenvolvimento.",
  "Documentação de projetos e criação de guias de uso.",
  "Desenvolvimento de front end com React Server Components, melhorando a performance da aplicação em até 15%.",
  "Utilização de tecnologias como Styled Components, React Query, Redux Saga, Redux Toolkit, Jest, AWS, Node.js, Prisma, PostgreSQL e Docker.",
  "Experiência em gerenciamento de implementações em larga escala, atendendo às necessidades de uma ampla base de usuários.",
  "Aplicação de princípios de design de software, incluindo SOLID, para garantir a manutenibilidade e escalabilidade das aplicações.",
  "Desenvolvimento de APIs robustas e eficientes, permitindo a integração de dados de serviços externos em nossos aplicativos, com uso eficiente de diferentes métodos de autenticação, manipulação de dados JSON e implementação de estratégias no tratamento de erros.",
  "Implementação de endpoints e manutenção dos existentes utilizando Node.js com Express e NestJS.",
  "Implementação de testes automatizados que reduziram os erros em produção em 30%.",
  "Desenvolvimento de rotas com filtragem e paginação para otimização de performance.",
  "Implementação de memory-cache para melhorar a eficiência das consultas.",
  "Integração com banco de dados utilizando Prisma.",
  "Implementação de cache com Redis e uso como banco de dados temporário.",
  "Criação e gerenciamento de cron jobs para automatizar tarefas recorrentes, aumentando a eficiência operacional e reduzindo a necessidade de intervenções manuais.",
  "Utilização do headless CMS Strapi para gerenciar e estruturar conteúdos de forma eficiente, otimizando a integração com aplicações front-end.",
];

const frontEndXpInfos = [
  "Criação e refatoração de experiências digitais visualmente atraentes e altamente funcionais para sites e jogos de NFT. Além Disso, fiz contribuições em melhorias de UI/UX baseadas em feedback de usuários e equipe.",
  "Utilização de tecnologias como NextJS, TypeScript, TailwindCSS e React para o desenvolvimento de front end.",
  "Conexão com APIs RESTful para integração de dados.",
  "Integração de smart contracts da Blockchain no front end e back end.",
  "Utilização de ferramentas de versionamento de código como Git para gerenciamento de versões e colaboração.",
  "Participação em reuniões de equipe para discutir progressos e planejar novas funcionalidades.",
  "Participação ativa em mais de 10 projetos bem-sucedidos, atraindo milhares de jogadores.",
  "Assistência na documentação de projetos e na criação de guias de uso para funcionalidades desenvolvidas.",
  "Adaptação a novas ferramentas e tecnologias conforme necessário, demonstrando vontade de aprender e crescer.",
];

export const experiences = [
  {
    role: "Full-stack Developer",
    company: "Apex NFT Brasil",
    date: "06/2023 - Atual",
    activities: fullStackXpInfos,
    link: "https://apex-new-site-2024.vercel.app/",
  },
  {
    role: "Front-end Developer",
    company: "Apex NFT Brasil",
    date: "06/2022 - 06/2023",
    activities: frontEndXpInfos,
    link: "https://apex-new-site-2024.vercel.app/",
  },
];

export const bulletPointsEducation = [
  {
    course: "Engenharia de Software",
    company: "Gran Faculdade",
    link: "https://faculdade.grancursosonline.com.br/",
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
    course: "Pessoa Desenvolvedora Fullstack",
    company: "Generation Brasil",
    link: "https://brazil.generation.org/",
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
  {
    course: "Curso de inglês Imersivo",
    company: "Times Idiomas",
    link: "https://timesidiomas.com.br/",
    description: (
      <div className={`flex flex-col gap-4`}>
        <span>
          Curso de Inglês Imersivo - Foco em Conversação Atualmente participo de
          um curso de inglês imersivo, cujo foco principal é o desenvolvimento
          de habilidades de conversação. Este curso tem me proporcionado uma
          experiência rica e prática, permitindo que eu aprenda a língua de
          forma dinâmica e envolvente.
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
];
