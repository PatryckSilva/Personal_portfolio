import { ContactForm } from "./form";

export const ContactFrame = () => {
  return (
    <section
      className={`flex min-h-[100dvh] w-full flex-col items-center justify-start gap-10 px-4 py-20`}
    >
      <article className="flex flex-col items-center gap-4">
        <h4
          className={`font-sans text-2xl font-bold uppercase text-foreground/80 md:text-3xl`}
        >
          Vamos Conversar?
        </h4>

        <span
          className={`max-w-[350px] text-center font-mono text-sm text-muted-foreground md:max-w-[700px] md:text-base lg:max-w-[800px]`}
        >
          Entre em contato para falar sobre oportunidades, projetos ou apenas
          dizer um oi!
        </span>
      </article>

      <ContactForm />
    </section>
  );
};
