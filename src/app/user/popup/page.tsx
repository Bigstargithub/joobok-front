"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function UserPopupPage() {
  const [popupData, setPopupData] = useState({});
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup?is_open=Y`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();

      if (jsonData.status === 200) {
        setPopupData(jsonData.popupData);
      } else {
        alert(jsonData.message);
      }
    });
  }, []);

  const closeToday = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    Cookies.set("closePopup", now.toISOString(), {
      expires: 1,
      sameSite: "Lax",
    });

    return window.close();
  };

  return (
    <div>
      {popupData && popupData.image_url && (
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${popupData.image_url}`}
          width={document.body.scrollWidth}
          height={0}
          alt="팝업 이미지"
          className="h-[570px]"
        />
      )}
      <button
        className="text-right cursor-pointer absolute right-[10px]"
        onClick={closeToday}
      >
        X 오늘 하루 그만 보기
      </button>
    </div>
  );
}
