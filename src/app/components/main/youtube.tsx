import Link from "next/link";

export default function MainYoutubeArea({
  youtubeLink,
}: {
  youtubeLink: string;
}) {
  const youtubeURL = new URL(youtubeLink);
  const youtubeVideoId = youtubeURL.searchParams.get("v");

  return (
    <section className="mt-5">
      <div className="lg:flex relative">
        <div className="lg:w-1/2 flex flex-wrap content-center justify-center lg:mb-0 mb-4">
          <div className="text-center">
            <h3 className="lg:text-5xl text-3xl font-bold">주복교회 유튜브</h3>
            <p className="mt-3 text-sm text-[#1C1C36]">
              ​예배 라이브 , 설교영상, 성경공부 등의 교회 내 행사의 온라인 참여
            </p>
            <Link
              href="https://www.youtube.com/channel/UCu03Z5hKSf8eJqAszNxKbrA"
              target="_blank"
              className="block w-2/3 m-auto cursor-pointer lg:p-5 p-3 mt-[20px] bg-red-500 text-white rounded-full lg:text-xl text-md"
            >
              주복교회 유튜브 구독
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 bg-red">
          <div className="pb-[56.25%] relative">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"
              className="w-full absolute t-0 l-0 h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
