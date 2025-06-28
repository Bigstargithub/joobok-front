"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function CommonMenu() {
  const [menuOpen, setMenuOpen] = useState("")

  return (
    <nav className="md:w-2/3 flex flex-wrap justify-center content-center mt-[20px] m-auto hidden md:block">
      <ul className="flex w-full content-center justify-center">
        <li className="menu-li">
          <p className={menuOpen === "introduce" ? "bg-blue-700 text-white!" : ""} onMouseEnter={() => {
            setMenuOpen("introduce")
          }}
          >교회소개</p>
          <ul className={menuOpen === "introduce" ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul" : "hidden"} onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="/introduce">교회소개</Link>
            </li>
            <li>
              <Link href="">교회연혁</Link>
            </li>
            <li>
              <Link href="">사역자소개</Link>
            </li>
            <li>
              <Link href="">교회비전</Link>
            </li>
            <li>
              <Link href="">오시는 길</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p onMouseEnter={() => {
            setMenuOpen("worship")
          }}>
            예배와 모임
          </p>
          <ul className={menuOpen === "worship" ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul" : "hidden"} onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="">유치부</Link>
            </li>
            <li>
              <Link href="">아동부</Link>
            </li>
            <li>
              <Link href="">중고등부</Link>
            </li>
            <li>
              <Link href="">청년부</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p onMouseEnter={() => {
            setMenuOpen("")
          }}>설교영상</p>
        </li>
        <li className="menu-li">
          <p onMouseEnter={() => {
            setMenuOpen("churchWork")
          }}>교회사역</p>
          <ul className={menuOpen === "churchWork" ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul" : "hidden"} onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="">장년부 주일학교</Link>
            </li>
            <li>
              <Link href="">실버마을 공동체</Link>
            </li>
            <li>
              <Link href="">가정예배</Link>
            </li>
            <li>
              <Link href="">국내 외 선교</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p onMouseEnter={() => {
            setMenuOpen("community")
          }}>커뮤니티</p>
          <ul className={menuOpen === "community" ? "animate-[menuopen_1s_ease-in-out] intro-menu-ul" : "hidden"} onMouseLeave={() => setMenuOpen("")}
          >
            <li>
              <Link href="">주복광장</Link>
            </li>
            <li>
              <Link href="">우리들의추억</Link>
            </li>
            <li>
              <Link href="">영성글 모임</Link>
            </li>
            <li>
              <Link href="">새신자 등록</Link>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <p onMouseEnter={() => {
            setMenuOpen("")
          }}>수도원</p>
        </li>
      </ul>
    </nav>
  )
}