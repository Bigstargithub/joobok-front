import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description:
    "대한예수교 장로회 소속 천안 주복교회는 예배와 말씀, 다음세대 교육을 통해 하나님 나라를 세워가는 기독교 공동체입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="주복교회 | 장로회" />
        <meta
          property="og:description"
          content="대한예수교 장로회 소속 천안 주복교회는 예배와 말씀, 다음세대 교육을 통해 하나님 나라를 세워가는 기독교 공동체입니다."
        />
        <meta property="og:image" content="/logo_pc.png" />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="https://joobok.or.kr" />
        <meta property="og:site_name" content="Joobok" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
