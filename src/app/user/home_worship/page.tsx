import Image from "next/image";

export default function UserHomeWorshipPage() {
  return (
    <section className="lg:mt-10 mt-5">
      <div className="relative w-full lg:flex content-center">
        <div className="lg:w-3/10 w-full lflex flex-col flex-wrap justify-center content-center lg:mb-0 mb-3">
          <h3 className="text-center lg:text-6xl text-3xl text-blue-600 font-bold lg:leading-20 leading-10">
            가정예배
          </h3>
          <p className="lg:mt-15 mt-7 text-xl font-light text-center">
            교육대상 : 각 가정의 식구들
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육시간 : 매주 토요일 오후 18:00
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육장소 : 각 가정
          </p>
          <p className="lg:mt-10 mt-5 text-blue-500 text-center text-xl font-normal">
            설교가 없는 거룩한 식탁예배로
            <br />
            예전기도문과 말씀화답, 서로의 축복문으로
            <br />
            가정의 신앙 유산을 만들어 갑니다.
            <br />
            <br />
            ​열린 질문지로 나누며 가정안에서 행복한
            <br />
            이야기가 끊이지 않는
            <br />
            신앙문화를 만들어갑니다.
          </p>
        </div>
        <div className="lg:w-7/10 w-full">
          <Image
            src="/home_worship_main.avif"
            width={600}
            height={0}
            alt="장년부 주일학교"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full relative mt-3 lg:flex content-center">
        <Image
          src="/home_worship_image_1.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="lg:w-1/3 w-full"
        />
        <Image
          src="/home_worship_image_2.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="lg:w-1/3 w-full lg:mt-0 mt-3"
        />
        <Image
          src="/home_worship_image_3.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="lg:w-1/3 w-full lg:mt-0 mt-3"
        />
      </div>
    </section>
  );
}
