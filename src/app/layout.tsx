import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CommonHeader from "./components/common/header";
import CommonMenu from "./components/common/menu";
import CommonFooter from "./components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주복교회 | 장로회",
  description: "대한예수교 장로회 소속 천안 주복교회는 예배와 말씀, 다음세대 교육을 통해 하나님 나라를 세워가는 기독교 공동체입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CommonHeader />
        <CommonMenu />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
