import Image from "next/image";

export default function UserInfantPage() {
  return (
    <section>
      <div className="lg:p-0 p-5 lg:py-10 flex justify-center content-center flex-col flex-wrap">
        <h3 className="font-bold lg:text-2xl text-xl text-blue-700 text-center">
          "예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱 사랑스러워
          가시더라"
        </h3>
        <p className="fold-medium text-center lg:mt-3 mt-2 text-blue-700">
          (누가복음 2장 52절)
        </p>
      </div>
      <div className="lg:flex relative w-full">
        <div className="lg:w-3/10 bg-blue-300 py-10">
          <h3 className="text-center lg:text-5xl text-3xl text-white font-bold">
            유 치 부
          </h3>
          <div className="w-4/5 m-auto lg:mt-10 mt-5">
            <p className="text-white lg:text-xl text-md tracking-wider">
              교육대상 : 4세이상~7세 이하의 영유아
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육 시간: 주일 오전 11:00~12:00
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육장소: 3층 규- 유치부실​
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              ​​표어 : 예수님 안에서 쑥쑥 자라요!
            </p>
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              주제말씀 : "예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱
              사랑스러워 가시더라" (누가복음 2장 52절)
            </p>
            <br />
            <p className="mt-2 text-white lg:text-xl text-md tracking-wider">
              교육목표
              <br />
              1) 온 세상을 만드신 하나님께서 나를 만드시고 나를 사랑하심을
              알아요.
              <br />
              2) 하나님의 아들 예수님을 통하여 나를 구원하시고, 예수님의 제자로
              부르심을 알아요.
              <br />
              3) 예수님을 따라 하나님을 사랑하고 이웃을 사랑하는 어린이로
              자라요.
            </p>
          </div>
        </div>
        <div className="lg:w-7/10">
          <Image
            src="/infant_main.avif"
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
            src="/infant_image_1.avif"
            width={500}
            height={0}
            className="w-full h-auto"
            alt="유치부 사진"
          />
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/infant_image_2.avif"
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
