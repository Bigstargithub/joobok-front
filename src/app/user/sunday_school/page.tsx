import Image from "next/image";

export default function UserSundaySchoolPage() {
  return (
    <section className="lg:mt-10 mt-5">
      <div className="relative w-full lg:flex content-center">
        <div className="lg:w-3/10 w-full lg:flex flex-col flex-wrap justify-center content-center lg:mb-0 mb-3">
          <h3 className="text-center lg:text-6xl text-3xl text-blue-600 font-bold lg:leading-20 leading-10">
            장년부
            <br /> 주일학교
          </h3>
          <p className="lg:mt-15 mt-7 text-xl font-light text-center">
            교육대상 : 20세 이상의 기혼 남여
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육시간 : 주일 오전 12:00~13:00
          </p>
          <p className="lg:mt-4 mt-2 text-xl font-light text-center">
            교육장소 : 해당장소
          </p>
          <p className="lg:mt-10 mt-5 text-blue-500 text-center">
            말씀을 삶으로 살아낸 은혜들을
            <br />
            나누고 누리고 치유하는
            <br />
            도전받는 공동체
            <br />
            ​예수님의 이야기로 행복한
            <br />
            믿음의 공동체
          </p>
        </div>
        <div className="lg:w-7/10 w-full">
          <Image
            src="/sunday_school_main.avif"
            width={600}
            height={0}
            alt="장년부 주일학교"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full relative mt-3">
        <Image
          src="/sunday_school_image.avif"
          width={2000}
          height={0}
          alt="장년부 주일교회"
          className="w-full"
        />
      </div>
    </section>
  );
}
