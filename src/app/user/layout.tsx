"use client";

import CommonHeader from "../components/common/header";
import CommonMenu from "../components/common/menu";
import CommonFooter from "../components/common/footer";
import { usePathname } from "next/navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderPath = ["/user/popup"];

  return (
    <>
      {!noHeaderPath.includes(pathname) && <CommonHeader />}
      {!noHeaderPath.includes(pathname) && <CommonMenu />}
      {children}
      {!noHeaderPath.includes(pathname) && <CommonFooter />}
    </>
  );
}
