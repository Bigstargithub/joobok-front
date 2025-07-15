import Image from "next/image";

export default function UserSilverViliagePage() {
  return (
    <section className="lg:mt-10 mt-5">
      <div className="relative w-full lg:flex content-center">
        <div className="lg:w-3/10 w-full lg:flex flex-col flex-wrap justify-center content-center lg:mb-0 mb-3">
          <h3 className="text-center lg:text-6xl text-3xl text-blue-600 font-bold lg:leading-20 leading-10">
            실버마을
            <br /> 공동체
          </h3>
          <p className="lg:mt-15 mt-7 text-xl font-light text-center">
            교육대상 : 70세 이상
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육시간 : 주일 오전 12:00~13:00
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육장소 : 해당장소
          </p>
          <p className="lg:mt-10 mt-5 text-blue-500 text-center text-xl">
            은혜의 자리를 지킴으로
            <br />
            믿음의 본을 보여주는
            <br />
            ​공동체
          </p>
        </div>
        <div className="lg:w-7/10 w-full">
          <Image
            src="/silver_viliage_main.avif"
            width={600}
            height={0}
            alt="장년부 주일학교"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full relative mt-3 lg:flex content-center">
        <Image
          src="/silver_viliage_image_1.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="lg:w-1/2 w-full"
        />
        <Image
          src="/silver_viliage_image_2.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="lg:w-1/2 w-full lg:mt-0 mt-3"
        />
      </div>
    </section>
  );
}
