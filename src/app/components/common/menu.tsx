"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommonMenu() {
  const [menuOpen, setMenuOpen] = useState("");
  const router = useRouter();

  return (
    <nav className="lg:w-full flex flex-wrap justify-center content-center mt-3 m-auto hidden lg:block">
      <ul className="flex w-full content-center justify-center z-6">
        <li className="menu-li">
          <p
            className={
              menuOpen === "introduce" ? "bg-blue-700 text-white!" : ""
            }
            onMouseEnter={() => {
              setMenuOpen("introduce");
            }}
            onClick={() => router.push("/user/introduce")}
          >
            교회소개
          </p>
          <ul
            className={
              menuOpen === "introduce"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
            onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="/user/introduce">교회소개</Link>
            </li>
            <li>
              <Link href="/user/history">교회연혁</Link>
            </li>
            <li>
              <Link href="/user/pastors">사역자소개</Link>
            </li>
            <li>
              <Link href="/user/church-location">오시는 길</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p
            onMouseEnter={() => {
              setMenuOpen("worship");
            }}
          >
            예배와 모임
          </p>
          <ul
            className={
              menuOpen === "worship"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
            onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="/user/infant">유치부</Link>
            </li>
            <li>
              <Link href="/user/children">아동부</Link>
            </li>
            <li>
              <Link href="/user/teenager">중고등부</Link>
            </li>
            <li>
              <Link href="/user/youth">청년부</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p
            onMouseEnter={() => {
              setMenuOpen("");
            }}
            onClick={() => router.push("/user/message-video")}
          >
            설교영상
          </p>
        </li>
        <li className="menu-li">
          <p
            onMouseEnter={() => {
              setMenuOpen("churchWork");
            }}
          >
            교회사역
          </p>
          <ul
            className={
              menuOpen === "churchWork"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
            onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="/user/sunday_school">장년부 주일학교</Link>
            </li>
            <li>
              <Link href="/user/silver_viliage">실버마을 공동체</Link>
            </li>
            <li>
              <Link href="/user/home_worship">가정예배</Link>
            </li>
            <li>
              <Link href="/user/missionary">국내 외 선교</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p
            onMouseEnter={() => {
              setMenuOpen("community");
            }}
          >
            커뮤니티
          </p>
          <ul
            className={
              menuOpen === "community"
                ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul"
                : "hidden"
            }
            onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="/user/joobok-square">주복광장</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p
            onMouseEnter={() => {
              setMenuOpen("");
            }}
            onClick={() => router.push("/user/abbey")}
          >
            수도원
          </p>
        </li>
      </ul>
    </nav>
  );
}
