import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function CommonMobileMenu({
  mobileMenu,
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed w-screen h-screen bg-gray-700 z-10 top-0 left-0 opacity-70 overflow-hidden"
      onClick={() => setMobileMenu(false)}
    >
      <div className="w-1/2 bg-white absolute right-0 h-full opacity-100 z-11">
        <Image
          src={"/logo_pc.jpeg"}
          width={600}
          height={0}
          alt="주복교회"
          className="h-auto"
        />
      </div>
    </div>
  );
}
