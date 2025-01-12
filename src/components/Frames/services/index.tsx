"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        "Criando soluções completas, integrando frontend e backend para garantir desempenho, segurança e experiências de alta qualidade.",
    },
  ];
  return (
    <article
      className={`flex w-full flex-col items-center justify-center gap-10 pt-40`}
    >
      <h2
        className={`font-sans text-3xl font-bold uppercase text-foreground/80`}
      >
        Meus Serviços
      </h2>
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="h-[300px] w-[250px] border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
          >
            <CardHeader>
              {service.icon}
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </article>
  );
};
