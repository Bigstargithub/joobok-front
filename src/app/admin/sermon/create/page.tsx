"use client";

import AdminHeaderComponent from "@/app/components/admin/admin_header";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SermonCreatePage({
  isModify = false,
  id = 0,
}: {
  isModify: boolean;
  id: number;
}) {
  const [sermonThumbnailPreview, setSermonThumbnailPreview] = useState(null);
  const [sermonTitle, setSermonTitle] = useState("");
  const [sermonDes, setSermonDes] = useState("");
  const [sermonVideoLink, setSermonVideoLink] = useState("");

  const onFileChange = (event: ChangeEvent<HTMLInputElement>, setState) => {
    const inputFile = event.target.files?.[0];

    if (inputFile && inputFile?.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(inputFile);
      setState(imageURL);
    }
  };

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!sermonThumbnailPreview) return alert("썸네일을 등록해주세요.");
    if (!sermonTitle) return alert("제목을 입력해주세요.");
    if (!sermonVideoLink) return alert("비디오 링크를 입력해주세요.");

    const formData = new FormData(event.currentTarget);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermon`, {
      method: "POST",
      body: formData,
    });

    const resJson = await res.json();

    if (resJson.status === 200) {
      alert(resJson.message);
      return redirect("/admin/sermon");
    }
  };

  return (
    <section>
      <AdminHeaderComponent />
      <div className="p-4">
        <h1 className="text-2xl font-bold">설교영상 등록</h1>
        <form onSubmit={formSubmit} className="mt-4">
          <div className="setting-area">
            <h3>설교영상 썸네일</h3>
            <input
              type="file"
              name="sermon_thumbnail"
              id="sermon_thumbnail"
              onChange={(e) => onFileChange(e, setSermonThumbnailPreview)}
            />
            {sermonThumbnailPreview && (
              <Image
                src={sermonThumbnailPreview}
                width={200}
                height={0}
                alt="설교영상 썸네일"
                className="h-auto"
              />
            )}
          </div>
          <div className="setting-area">
            <h3>설교영상 제목</h3>
            <input
              type="text"
              name="sermon_title"
              id="sermon_title"
              className="border-1 rounded-sm w-1/2 p-2"
              maxLength={100}
              onChange={(e) => setSermonTitle(e.target.value)}
            />
          </div>
          <div className="setting-area">
            <h3>설교영상 설명</h3>
            <textarea
              name="sermon_description"
              id="sermon_description"
              className="border-1 rounded-sm w-1/2 h-[100px] resize-none p-2"
              onChange={(e) => setSermonDes(e.target.value)}
            />
          </div>
          <div className="setting-area">
            <h3>설교영상 링크</h3>
            <input
              type="text"
              name="sermon_video_link"
              id="sermon_video_link"
              className="border-1 rounded-sm w-1/2 p-2"
              onChange={(e) => setSermonVideoLink(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 text-white bg-black mt-5 cursor-pointer">
            등록
          </button>
        </form>
      </div>
    </section>
  );
}
