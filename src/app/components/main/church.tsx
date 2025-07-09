import Image from "next/image";
import Link from "next/link";

export default function MainChurchArea({
  churchImage,
}: {
  churchImage: string;
}) {
  return (
    <section>
      <div className="flex relative">
        <div className="md:w-1/2 flex flex-wrap justify-center content-center">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">교회사역</h3>
            <pre className="text-sm tracking-tight mt-2">
              장년부 주일 학교, 가정 예배 등 교회 주요 사역
            </pre>
            <Link
              href=""
              className="block bg-blue-500 p-4 mt-2 text-white text-xl"
            >
              바로가기
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${churchImage}`}
            width={500}
            height={0}
            alt="교회사역"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
