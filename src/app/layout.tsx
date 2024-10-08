import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderNextAuth from "@/context/sessionProvider";
import WhatsappButton from "@/components/whatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={
          inter.className + " relative overflow-x-hidden bg-gray-700 text-white"
        }
      >
        <WhatsappButton />
        <SessionProviderNextAuth>{children}</SessionProviderNextAuth>
      </body>
    </html>
  );
}
