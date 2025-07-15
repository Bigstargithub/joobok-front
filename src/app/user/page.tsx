"use client";

import Image from "next/image";
import MainYoutubeArea from "../components/main/youtube";
import MainWorshipArea from "../components/main/worship";
import MainChurchArea from "../components/main/church";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      setMainData(jsonData);
    });

    const popupExpired = Cookies.get("closePopup");

    if (popupExpired) {
      const expiredDate = new Date(popupExpired);
      if (expiredDate >= new Date()) return;
    }
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/popup?is_open=Y`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.popupData) {
        const left = window.screen.width / 2 - 300;
        const top = window.screen.height / 2 - 200;

        const options = `width=800,height=600,left=${left},top=${top}, scrollbars=yes, resizable=no`;

        return window.open("/user/popup", "_blank", options);
      }
    });
  }, []);

  return (
    <main className="lg:w-screen!">
      {mainData && (
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${mainData.main_banner}`}
            width={1024}
            height={0}
            alt="주복교회"
            className="w-full h-auto"
          />
          <MainYoutubeArea youtubeLink={mainData.youtube_link} />
          <MainWorshipArea worshipImage={mainData.worship_image} />
          <MainChurchArea churchImage={mainData.church_image} />
        </div>
      )}
    </main>
  );
}
