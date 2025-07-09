"use client";

import Image from "next/image";
import MainYoutubeArea from "../components/main/youtube";
import MainWorshipArea from "../components/main/worship";
import MainChurchArea from "../components/main/church";
import { useEffect, useState } from "react";

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
  }, []);

  return (
    <main className="md:w-screen!">
      {mainData && (
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${mainData.main_banner}`}
            width={700}
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
