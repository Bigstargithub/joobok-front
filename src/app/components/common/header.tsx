import Image from "next/image";
import Link from "next/link";

export default function CommonHeader() {
  return (
    <header className="flex flex-row content-center flex-wrap mt-[30px]">
      <div className="w-1/3"></div>
      <Link href="/" className="md:w-1/3">
        <Image src={"/logo_pc.jpeg"} width={600} height={0} alt="주복교회" className="h-auto" />
      </Link>
      <div className="md:w-1/3 md:flex md:flex-wrap content-center flex-row justify-end box-border pr-[40px] hidden">
        <Link href="https://www.facebook.com/joobokchurch/?locale=ko_KR" className="mr-[10px] inline-block size-fit" target="_blank">
          <Image src={"/facebook.avif"} width={27} height={0} alt="페이스북" />
        </Link>
        <Link href="https://www.youtube.com/@%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C" className="size-fit" target="_blank">
          <Image src={"/youtube_icon.avif"} width={27} height={0} alt="유튜브" />
        </Link>
      </div>
    </header>
  )
}