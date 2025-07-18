import Image from "next/image";

export default function UserYouthPage() {
  return (
    <section>
      <div className="flex justify-center content-center flex-col flex-wrap p-5 lg:p-0 lg:py-10">
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center">
          구하는 이마다 받을 것이요 찾는 이마다 찾아낼 것이요 두드리는 이에게는
          열릴 것이니라
        </h3>
        <p className="fold-medium text-center lg:mt-3 mt-2 text-blue-700">
          (마태복음 7장 8절)
        </p>
      </div>
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-400 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            중 고 등 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-5">
            <p className="text-white lg:text-xl text-md tracking-wider">
              교육대상 : 중학생 1학년~고등학생3학년
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육 시간: 주일 오전 11:00~12:30
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육장소: 4층 앎- 예배홀
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              표어 : 하나님의 꿈을 실천하라
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              주제말씀 : 구하는 이마다 받을 것이요 찾는 이마다 찾아낼 것이요
              두드리는 이에게는 열릴 것이니라 (마태복음 7:8)
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육목표
              <br />
              1) 기획예배(전통, 예전, 찬양예배 등)를 통해 예배 가운데 게신
              하나님을 만나요.
              <br />
              2) 선생님과 난누는 삶의 과제를 실천함으로써 삶에서 계신 예수님을
              만나요.
              <br />
              3) 말씀 후 통성기도를 통해 우리를 변화시키실 성령님을 만나요.
            </p>
          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/teenager_main.avif"
            width={2000}
            height={0}
            alt="유치부 메인"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="lg:flex w-full lg:mt-2 mt-0 relative">
        <div className="lg:w-1/2">
          <Image
            src="/teenager_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/teenager_image_2.avif"
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
