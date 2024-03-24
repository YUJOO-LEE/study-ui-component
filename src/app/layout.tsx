import { Gnb } from '@/app/Gnb';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "study ui component",
  description: "유주는 공부중",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Gnb />
       <main>
         {children}
       </main>
      </body>
    </html>
  );
}
