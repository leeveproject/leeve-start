import { data } from "@/config";
import nodemailer from "nodemailer";
import { Email } from "@/components/email";
import { render } from "@react-email/render";

export default async function sendEmail(req, res) {
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

      const emailHtml = render(<Email />)

      const mailOptions = {
        from: data.email.user,
        to: email,
        subject: "Conheça nosso sistema 🚀",
        html: emailHtml
      }

      try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: "email sent" })
      } catch (error) {
        res.status(500).json({ error: "error found when sending email" })
      }

    default:
      res.status(500).json({ message: "method not found" })
  }
}