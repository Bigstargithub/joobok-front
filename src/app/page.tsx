import Image from "next/image";
import MainYoutubeArea from "./components/main/youtube";
import MainWorshipArea from "./components/main/worship";
import MainChurchArea from "./components/main/church";

export default function Home() {
  return (
    <main className="md:w-screen!">
      <div>
        <Image src={"/main_banner.avif"} width={700} height={0} alt="주복교회" className="w-full h-auto" />
        <MainYoutubeArea />
        <MainWorshipArea />
        <MainChurchArea />
      </div>
    </main>
  );
}
