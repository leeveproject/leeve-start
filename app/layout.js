import { Inter } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leeve - o aplicativo que facilita sua rotina.",
  description: "Te oferecemos um gerenciador virtual e personalizado disponível 24h para que você gerencie de forma simples seu negócio.",
  icons: { icon: ["/logo/image.svg"] }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
