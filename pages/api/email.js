import { data } from "@/config";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { email } = req.body;

  switch (req.method) {
    case "POST":

      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: data.email.user,
          pass: data.email.pass
        }
      })

      const mailOptions = {
        from: data.email.user,
        to: email,
        subject: "test feature",
        text: "test"
      }

      try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: "email enviado com sucesso" })
      } catch (error) {
        res.status(500).json({ error: 'Houve um erro ao enviar o e-mail.' })
      }

    default:
      res.status(500).json({ message: "metodo não encontrado" })
  }
}