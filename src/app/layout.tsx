import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

// Components
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { Container } from "@/components/ui/container/container";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CarsVale | As Melhores Oportunidades em Veículos",
  description: "As melhores oportunidades em carros no Vale do Assú",
  keywords: [
    "comprar carro no Vale do Assú",
    "carros à venda Vale do Assú",
    "loja de carros Vale do Assú",
    "carros novos Vale do Assú",
    "loja CarsVale veículos",
    "concessionária no Vale do Assú",
  ],
  authors: [{ name: "João Paulo" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header />
        <Container>
          <main>
            {children}
          </main>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
