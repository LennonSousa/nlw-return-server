import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

require("dotenv/config");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transporter.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "John Costa <lennonsousa@outook.com>",
      subject,
      html: body,
    });
  }
}
