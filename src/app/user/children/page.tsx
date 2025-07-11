import Image from "next/image";

export default function UserChildrenPage() {
  return (
    <section>
      <div className="py-10 flex justify-center content-center flex-col flex-wrap">
        <h3 className="font-bold text-2xl text-blue-700">
          "예수께서 이르시되 나를 따라오라 내가 너희로 사람을 낚는 어부가 되게
          하리라 하시니"
        </h3>
        <p className="fold-medium text-center mt-3 text-blue-700">
          (마가복음 1장 7절)
        </p>
      </div>
      <div className="flex relative w-full">
        <div className="w-3/10 bg-blue-300 py-10">
          <h3 className="text-center text-5xl text-white font-bold">
            아 동 부
          </h3>
          <div className="w-4/5 m-auto mt-10">
            <p className="text-white text-xl tracking-wider">
              교육대상 : 초등학생 1~6학년 어린이
            </p>
            <p className="mt-2 text-white text-xl tracking-wider">
              교육 시간: 주일 오전 11:00~12:00
            </p>
            <p className="mt-2 text-white text-xl tracking-wider">
              교육장소: 3층 뫔- 아동부실​
            </p>
            <br />
            <p className="mt-2 text-white text-xl tracking-wider">
              ​​표어 : 우리는 예수님의 작은 제자!
            </p>
            <p className="mt-2 text-white text-xl tracking-wider">
              주제말씀 : "예수께서 이르시되 나를 따라오라 내가 너희로 사람을
              낚는 어부가 되게 하리라 하시니" (마가복음 1:7)
            </p>
            <br />
            <p className="mt-2 text-white text-xl tracking-wider">
              교육목표
              <br />
              1) 하나님께서는 우리를 사랑하시며 예수님을 통하여 구원해주심을
              깨닫는다.
              <br />
              2) 우리를 제자로 부르시는 예수님의 말씀에 "예! 따르겠어요!" 라고
              고백하는 어린이가 된다.
              <br />
              3) 세상 속에서 복음을 전하는 어린이, 선한 영향력을 흘려보내는
              예수님의 작은제자로 살아간다.
            </p>
          </div>
        </div>
        <div className="w-7/10">
          <Image
            src="/children_main.avif"
            width={2000}
            height={0}
            alt="유치부 메인"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex w-full mt-2 relative">
        <div className="w-1/2">
          <Image
            src="/children_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/children_image_2.avif"
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
