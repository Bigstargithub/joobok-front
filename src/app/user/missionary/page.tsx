import Image from "next/image";

export default function UserMissionaryPage() {
  return (
    <section className="lg:w-4/5 w-9/10 m-auto mt-4">
      <h2 className="text-center text-4xl font-bold">국내선교</h2>
      <h3 className="text-center text-xl font-medium mt-4">
        우리가 밟고 있는 이 땅에서의 선교
      </h3>
      <div className="lg:grid grid-cols-3 gap-10 mt-10">
        <div className="lg:flex lg:mb-0 mb-2">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="lg:w-6/10 w-full"
          />
          <p className="lg:ml-4 lg:text-xl text-2xl font-bold lg:text-left text-center">
            매산여고 교목실
          </p>
        </div>
        <div className="lg:flex lg:mb-0 mb-2">
          <Image
            src="/missionary_basic_logo.png"
            width={200}
            height={0}
            alt="국내 선교"
            className="lg:w-6/10 w-full"
          />
          <p className="lg:ml-4 lg:text-xl text-2xl font-bold lg:text-left text-center">
            동막교회
          </p>
        </div>
        <div className="lg:flex lg:mb-0 mb-2">
          <Image
            src="/cheonan_asan_logo.gif"
            width={200}
            height={0}
            alt="국내 선교"
            className="lg:w-6/10 w-full"
          />
          <p className="lg:ml-4 lg:text-xl text-2xl font-bold lg:text-left text-center">
            천안아산노회
          </p>
        </div>
        <div className="lg:flex lg:mb-0 mb-2">
          <Image
            src="/korea_message_logo.png"
            width={200}
            height={0}
            alt="국내 선교"
            className="lg:w-6/10 w-full"
          />
          <p className="lg:ml-4 lg:text-xl text-2xl font-bold lg:text-left text-center">
            한국설교학회
          </p>
        </div>
        <div className="lg:flex lg:mb-0 mb-2">
          <Image
            src="/hoseo_logo.webp"
            width={200}
            height={0}
            alt="국내 선교"
            className="lg:w-6/10 w-full"
          />
          <p className="lg:ml-4 lg:text-xl text-2xl font-bold lg:text-left text-center">
            호서대(인도장학생)
          </p>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold mt-10">해외선교</h2>
      <h3 className="text-center text-xl font-medium mt-4">
        땅 끝까지 전해지는 복음과 하나님 나라 확장
      </h3>
      <div className="lg:grid grid-cols-3 gap-10 mt-10">
        <div className="lg:mb-0 mb-2">
          <Image
            src="/brazil_flag.svg"
            width={200}
            height={0}
            alt="브라질"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            브라질
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/cambodia_flag.png"
            width={200}
            height={0}
            alt="캄보디아"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            캄보디아
          </p>
        </div>
        <div className=" lg:mb-0 mb-2">
          <Image
            src="/georgia_flag.png"
            width={200}
            height={0}
            alt="그루지아"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            그루지아
          </p>
        </div>
        <div className=" lg:mb-0 mb-2">
          <Image
            src="/turkey_flag.webp"
            width={200}
            height={0}
            alt="튀르키에(터키)"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            튀르키에(터키)
          </p>
        </div>
        <div className=" lg:mb-0 mb-2">
          <Image
            src="/malaysia_flag.webp"
            width={200}
            height={0}
            alt="말레이시아"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            말레이시아
          </p>
        </div>
        <div className=" lg:mb-0 mb-2">
          <Image
            src="/nepal_flag.png"
            width={200}
            height={0}
            alt="네팔"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            네팔
          </p>
        </div>
        <div className=" lg:mb-0 mb-2">
          <Image
            src="/pakistan_flag.png"
            width={200}
            height={0}
            alt="파키스탄"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            파키스탄
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/newzealand_flag.webp"
            width={200}
            height={0}
            alt="뉴질랜드"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            뉴질랜드
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/kenya_flag.png"
            width={200}
            height={0}
            alt="케냐"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            케냐
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/germany_flag.svg"
            width={200}
            height={0}
            alt="독일"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            독일
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/madagascar_flag.png"
            width={200}
            height={0}
            alt="마다가스카르"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            마다가스카르
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/bolivia_flag.png"
            width={200}
            height={0}
            alt="볼리비아"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            볼리비아
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/philippines_flag.png"
            width={200}
            height={0}
            alt="필리핀"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            필리핀
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/zanzibar_flag.svg"
            width={200}
            height={0}
            alt="잔지바르"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            잔지바르
          </p>
        </div>
        <div className="lg:mb-0 mb-2">
          <Image
            src="/thailand_flag.png"
            width={200}
            height={0}
            alt="태국"
            className="lg:w-6/10 w-full h-[230px] object-contain"
          />
          <p className="lg:text-xl text-2xl font-bold mt-2 lg:text-left text-center">
            태국
          </p>
        </div>
      </div>
    </section>
  );
}
