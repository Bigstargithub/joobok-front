import Image from "next/image";

export default function UserSundaySchoolPage() {
  return (
    <section className="mt-10">
      <div className="relative w-full flex content-center">
        <div className="w-3/10 flex flex-col flex-wrap justify-center content-center">
          <h3 className="text-center text-6xl text-blue-600 font-bold leading-20">
            장년부
            <br /> 주일학교
          </h3>
          <p className="mt-15 text-xl font-light text-center">
            교육대상 : 20세 이상의 기혼 남여
          </p>
          <p className="mt-4 text-xl font-light text-center">
            교육시간 : 주일 오전 12:00~13:00
          </p>
          <p className="mt-4 text-xl font-light text-center">
            교육장소 : 해당장소
          </p>
          <p className="mt-10 text-blue-500 text-center">
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
        <div className="w-7/10">
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
