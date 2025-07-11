import Image from "next/image";

export default function UserSilverViliagePage() {
  return (
    <section className="mt-10">
      <div className="relative w-full flex content-center">
        <div className="w-3/10 flex flex-col flex-wrap justify-center content-center">
          <h3 className="text-center text-6xl text-blue-600 font-bold leading-20">
            실버마을
            <br /> 공동체
          </h3>
          <p className="mt-15 text-xl font-light text-center">
            교육대상 : 70세 이상
          </p>
          <p className="mt-4 text-xl font-light text-center">
            교육시간 : 주일 오전 12:00~13:00
          </p>
          <p className="mt-4 text-xl font-light text-center">
            교육장소 : 해당장소
          </p>
          <p className="mt-10 text-blue-500 text-center text-xl">
            은혜의 자리를 지킴으로
            <br />
            믿음의 본을 보여주는
            <br />
            ​공동체
          </p>
        </div>
        <div className="w-7/10">
          <Image
            src="/silver_viliage_main.avif"
            width={600}
            height={0}
            alt="장년부 주일학교"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full relative mt-3 flex content-center">
        <Image
          src="/silver_viliage_image_1.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="w-1/2"
        />
        <Image
          src="/silver_viliage_image_2.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="w-1/2"
        />
      </div>
    </section>
  );
}
