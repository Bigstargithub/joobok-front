import Image from "next/image";

export default function UserYouthPage() {
  return (
    <section>
      <div className="p-5 lg:p-0 lg:py-10 flex justify-center content-center flex-col flex-wrap">
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center">
          주의 영이 계신 곳에는 자유가 있느니라
        </h3>
        <p className="fold-medium text-center mt-3 text-blue-700">
          (고린도후서 3장 17절)
        </p>
      </div>
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-400 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            청 년 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-5">
            <p className="text-white lg:text-xl text-md tracking-wider">
              교육대상 : 20세 이상의 미혼 청년
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육 시간: 주일 오전 13:00~14:30
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육장소: 2층 본당​
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              표어 : 예배함으로 하나님을 누리는 청년
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              주제말씀 : 주의 영이 계신 곳에는 자유가 있느니라 (고후 3:17)
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육목표
              <br />
              1) 은혜와 감동, 믿음의 도전이 넘쳐나는 예배
              <br />
              2) 나누는 삶의 과제를 실천하는 영성공동체
              <br />
              3) 말씀 후 통성기도를 통해 우리를 변화시키실 성령님을 만나는 시간
            </p>
          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/youth_main.avif"
            width={2000}
            height={0}
            alt="유치부 메인"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="lg:flex w-full lg:mt-2 relative">
        <div className="lg:w-1/2">
          <Image
            src="/youth_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/youth_image_2.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
      </div>
    </section>
  );
}
