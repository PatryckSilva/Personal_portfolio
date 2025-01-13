import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Layout, Pen, Smartphone } from "lucide-react";
import * as React from "react";

export const Services = () => {
  const services = [
    {
      icon: <Pen />,
      title: "UI & UX",
      description:
        "Criando soluções intuitivas e atraentes que envolvem o público e entregam experiências digitais excepcionais, garantindo funcionalidade e design harmonioso.",
    },
    {
      icon: <Smartphone />,
      title: "Web App",
      description:
        "Transformando ideias em aplicações web eficientes, responsivas e personalizadas, para atender às necessidades e encantar usuários.",
    },
    {
      icon: <Layout />,
      title: "Design & Criatividade",
      description:
        "Desenvolvendo designs visualmente impressionantes que conectam a marca ao público, unindo criatividade e estratégia.",
    },
    {
      icon: <Code />,
      title: "Desenvolvimento",
      description:
        "Criando soluções completas, integrando front end e back end para garantir desempenho, segurança e experiências de alta qualidade.",
    },
  ];
  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-10 pt-20`}
    >
      <article className={`flex flex-col items-center gap-4 text-center`}>
        <h2
          className={`font-sans text-2xl font-bold uppercase text-foreground/80 md:text-3xl`}
        >
          Soluções Completas em Desenvolvimento
        </h2>
        <span
          className={`max-w-[350px] text-center font-mono text-sm text-muted-foreground md:max-w-[700px] md:text-base lg:max-w-[800px]`}
        >
          Especializado em criar experiências digitais únicas, integrando
          design, tecnologia e criatividade para atender às suas necessidades e
          encantar seus usuários.
        </span>
      </article>
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="h-[300px] w-[250px] border bg-background transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
          >
            <CardHeader>
              {service.icon}
              <h3 className="text-lg font-semibold text-foreground/90">
                {service.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
