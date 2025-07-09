import Image from "next/image";
import Link from "next/link";

export default function AbbeyPage() {
  return (
    <main>
      <div className="flex flex-col justify-center content-center">
        <Image
          src="/abbey.avif"
          width={500}
          height={0}
          alt="케노시스수도원"
          className="w-4/5 h-auto m-auto"
        />
        <h2 className="text-center mt-5 text-2xl text-blue-500 font-medium">
          이 땅에 이루어지는 하나님 나라를 추구하는
          <br />
          개혁교회에 속한 수도원 입니다.
        </h2>
        <p className="text-center mt-10 text-md text-blue-600 leading-8">
          그리스도를 영생과 진리로 모든 이들을 위한 공간입니다.
          <br />
          원하시는 분은 아래 홈페이지를 통해 영성프로그램에 참여하실 수
          있습니다.
        </p>
        <Link
          href="https://www.kenosisabbey.com/"
          className="text-center w-fit px-10 py-5 m-auto mt-5 border-1 border-blue-500 hover:bg-blue-500 hover:text-white"
          target="_blank"
        >
          홈페이지 바로가기
        </Link>
      </div>
    </main>
  );
}
