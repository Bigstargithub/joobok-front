"use client";

import CommonHeader from "../components/common/header";
import CommonMenu from "../components/common/menu";
import CommonFooter from "../components/common/footer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CommonMobileMenu from "../components/common/mobile_menu";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderPath = ["/user/popup"];

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {!noHeaderPath.includes(pathname) && (
        <CommonHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      )}
      {!noHeaderPath.includes(pathname) && <CommonMenu />}
      {children}
      {!noHeaderPath.includes(pathname) && <CommonFooter />}
      {mobileMenu && (
        <CommonMobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
    </>
  );
}
