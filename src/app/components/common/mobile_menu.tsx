import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function CommonMobileMenu({
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const linkClick = (link: string) => {
    setMobileMenu(false);
    router.push(link);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <div
        className="absolute w-screen h-screen bg-gray-700 z-10 top-0 left-0 opacity-70 overflow-hidden"
        onClick={() => setMobileMenu(false)}
      ></div>
      <div className="w-7/10 bg-white absolute right-0 h-full opacity-100 z-11 py-2 overflow-scroll">
        <Image
          src={"/logo_pc.jpeg"}
          width={600}
          height={0}
          alt="주복교회"
          className="h-auto p-3"
        />
        <div className="flex mr-2 justify-end">
          <Link
            href="https://www.facebook.com/joobokchurch/?locale=ko_KR"
            className="mr-[10px] inline-block size-fit"
            target="_blank"
          >
            <Image
              src={"/facebook.avif"}
              width={27}
              height={0}
              alt="페이스북"
            />
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
        <div className="mt-4 p-3">
          <div
            onClick={() => linkClick("/user/introduce")}
            className="main-mobile-menu"
          >
            교회소개
          </div>

          <div
            onClick={() => linkClick("/user/introduce")}
            className="sub-mobile-menu"
          >
            교회소개
          </div>
          <div
            onClick={() => linkClick("/user/history")}
            className="sub-mobile-menu"
          >
            교회연혁
          </div>
          <div
            onClick={() => linkClick("/user/pastors")}
            className="sub-mobile-menu"
          >
            사역자소개
          </div>
          <div
            onClick={() => linkClick("/user/church-location")}
            className="sub-mobile-menu"
          >
            오시는 길
          </div>
        </div>
        <div className="mt-2 p-3">
          <div
            onClick={() => linkClick("/user/infant")}
            className="main-mobile-menu"
          >
            예배와 모임
          </div>
          <div
            onClick={() => linkClick("/user/infant")}
            className="sub-mobile-menu"
          >
            유치부
          </div>
          <div
            onClick={() => linkClick("/user/children")}
            className="sub-mobile-menu"
          >
            아동부
          </div>
          <div
            onClick={() => linkClick("/user/teenager")}
            className="sub-mobile-menu"
          >
            중고등부
          </div>
          <div
            onClick={() => linkClick("/user/youth")}
            className="sub-mobile-menu"
          >
            청년부
          </div>
        </div>
        <div className="mt-2 p-3">
          <div
            onClick={() => linkClick("/user/message-video")}
            className="main-mobile-menu"
          >
            설교영상
          </div>
        </div>
        <div className="mt-2 p-3">
          <div
            onClick={() => linkClick("/user/sunday_school")}
            className="main-mobile-menu"
          >
            교회사역
          </div>
          <div
            onClick={() => linkClick("/user/sunday_school")}
            className="sub-mobile-menu"
          >
            장년부 주일학교
          </div>
          <div
            onClick={() => linkClick("/user/silver_viliage")}
            className="sub-mobile-menu"
          >
            실버마을 공동체
          </div>
          <div
            onClick={() => linkClick("/user/home_worship")}
            className="sub-mobile-menu"
          >
            가정예배
          </div>
          <div
            onClick={() => linkClick("/user/missionary")}
            className="sub-mobile-menu"
          >
            국내 외 선교
          </div>
        </div>
        <div className="mt-2 p-3">
          <div
            onClick={() => linkClick("/user/joobok-square")}
            className="main-mobile-menu"
          >
            커뮤니티
          </div>
          <div
            onClick={() => linkClick("/user/joobok-square")}
            className="sub-mobile-menu"
          >
            주복광장
          </div>
        </div>
        <div className="mt-2 p-3">
          <div
            onClick={() => linkClick("/user/abbey")}
            className="main-mobile-menu"
          >
            수도원
          </div>
        </div>
      </div>
    </div>
  );
}
