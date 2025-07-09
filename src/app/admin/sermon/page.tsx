"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import SermonItemComponent from "@/app/components/admin/sermon/sermon_item";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SermonAdminPage() {
  const [sermonList, setSermonList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setSermonList(jsonData.sermonList);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  useEffect(() => {
    console.log("sermonList: ", sermonList);
  }, [sermonList]);

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">설교영상 리스트</h1>
        <div className="flex justify-end">
          <Link
            href="/admin/sermon/create"
            className="border-1 cursor-pointer bg-black text-white px-10 py-4"
          >
            등록
          </Link>
        </div>
        <table className="relative w-full mt-5 sermon-table">
          <thead>
            <tr>
              <td className="w-20">번호</td>
              <td className="w-[200px]">썸네일</td>
              <td>제목</td>
              <td>설명</td>
              <td className="w-30">생성일시</td>
              <td className="w-50">수정/삭제</td>
            </tr>
          </thead>
          <tbody>
            {sermonList.length > 0 &&
              sermonList.map((sermon) => (
                <SermonItemComponent
                  id={sermon.id}
                  thumbLink={sermon.thumbnail}
                  title={sermon.title}
                  description={sermon.description}
                  createdAt={sermon.createdAt}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
