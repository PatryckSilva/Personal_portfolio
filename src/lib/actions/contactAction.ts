"use server";
import { TContactForm } from "@/components/Frames/ContactFrame/form";
import nodemailer from "nodemailer";

function delay<T>(ms: number, data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}
const EMAIL_SENDER = "patrycksilva70@gmail.com";
interface IpostContact {
  formContact: TContactForm;
}

export async function postContact({ formContact }: IpostContact) {
  const { name, email, message } = formContact;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_SENDER,
      pass: "hzwfwjyfnpwlzync",
    },
  });

  try {
    const response = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: EMAIL_SENDER,
      subject: `Mensagem recebida via Portfólio.`,
      html: `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Sua mensagem: ${message}</p>
      `,
    });

    if (!response.accepted.length) {
      return {
        success: false,
        response: [],
      };
    }

    return { success: true, response };
  } catch (error) {
    console.error("Erro no servidor:", error);
    return {
      success: false,
      response: [],
    };
  }
}
