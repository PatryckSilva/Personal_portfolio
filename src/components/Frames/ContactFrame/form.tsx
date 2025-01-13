"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { postContact } from "@/lib/actions/contactAction";
import React from "react";
import { ConfirmAnimation } from "@/components/ui/confirm-animation";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nome precisa conter pelo menos 3 caracteres",
  }),
  email: z.string().email({ message: "Email Inválido" }),
  message: z.string().min(2, {
    message: "É necessário enviar uma mensagem",
  }),
});

export type TContactForm = z.infer<typeof formSchema>;

export function ContactForm() {
  const [showingConfirmation, setShowingConfirmation] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const form = useForm<TContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: TContactForm) {
    try {
      setIsLoading(true);

      const result = await postContact({ formContact: values });

      if (result.success) {
        // console.log("Contato enviado:", result.response);
        setShowingConfirmation(true);
        form.reset();
      } else {
        setError(
          "Erro ao processar o contato, Me avise sobre esse erro no linkedin!",
        );
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
      setError("Erro inesperado");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Card>
      <CardContent className={`p-5`}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <section className={`flex items-center gap-5`}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="Patryck Silva" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="patrycksilva70@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <div className={`my-5`}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Envie uma mensagem e responderei o mais rápido possível!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {showingConfirmation ? (
              <span className={`my-2 flex items-center justify-center gap-2`}>
                <figure className={`size-10`}>
                  <ConfirmAnimation />
                </figure>
                <span>Contato enviado com sucesso!</span>
              </span>
            ) : (
              <Button type="submit">
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
