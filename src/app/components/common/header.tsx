import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function CommonHeader({
  mobileMenu,
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="flex flex-row justify-between content-center flex-wrap lg:mt-[30px] p-3 lg:p-0">
      <div className="lg:w-1/3"></div>
      <Link href="/user" className="lg:w-1/3 text-center">
        <Image
          src={"/logo_pc.jpeg"}
          width={600}
          height={0}
          alt="주복교회"
          className="h-auto inline"
        />
      </Link>
      <div
        className="lg:hidden flex justify-center content-center"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <Image src={"/burger-menu.svg"} width={30} height={30} alt="메뉴" />
      </div>
      <div className="lg:w-1/3 lg:flex md:flex-wrap content-center flex-row justify-end box-border pr-[40px] hidden">
        <Link
          href="https://www.facebook.com/joobokchurch/?locale=ko_KR"
          className="mr-[10px] inline-block size-fit"
          target="_blank"
        >
          <Image src={"/facebook.avif"} width={27} height={0} alt="페이스북" />
        </Link>
        <Link
          href="https://www.youtube.com/@%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C"
          className="size-fit"
          target="_blank"
        >
          <Image
            src={"/youtube_icon.avif"}
            width={27}
            height={0}
            alt="유튜브"
          />
        </Link>
      </div>
    </header>
  );
}
