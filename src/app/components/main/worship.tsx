import Image from "next/image";
import Link from "next/link";

export default function MainWorshipArea({
  worshipImage,
}: {
  worshipImage: string;
}) {
  return (
    <section className="mt-4 lg:mt-0">
      <div className="lg:flex block relative">
        <div className="lg:w-1/2 w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${worshipImage}`}
            width={500}
            height={0}
            alt="예배와모임"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 flex flex-wrap justify-center content-center mt-4 lg:mt-0 w-full">
          <div className="text-center">
            <h3 className="lg:text-5xl text-3xl font-bold text-blue-500">
              예배와 모임
            </h3>
            <pre className="text-sm tracking-tight mt-2">
              각 교육부서 예배 및 행사 안내
            </pre>
            <Link
              href="/user/infant"
              className="block bg-blue-500 lg:p-4 p-2 mt-2 text-white text-xl w-full lg:w-auto"
            >
              바로가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
