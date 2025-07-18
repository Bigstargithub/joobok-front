import Image from "next/image";

export default function IntroducePage() {
  return (
    <main className="p-3 lg:p-0">
      <div
        id="church-introduce"
        className="lg:flex flex-nowrap justify-center content-center"
      >
        <div>
          <h1 className="mr-3 lg:text-7xl text-4xl font-bold">주복교회</h1>
          <h3 className="mt-2 lg:text-4xl text-xl">Joobok church</h3>
          <div className="lg:mt-10 mt-5">
            <p>
              주복교회(주님이 복 주신 교회)는 2002년 8월 4일 서범석 목사가 첫
              예배를 드림으로 창립되었습니다.
            </p>
            <p>
              개척 시부터 예전과 영성 중심으로 성도와 교회를 세워나가기 위해
              전심전력해 왔습니다.
            </p>
            <br />
            <p>교회 창립 이후 지금까지</p>
            <br />
            <p>섬김으로 제자를 삼는 교회</p>
            <p>행복한 이야이가 가득한 교회</p>
            <p>
              성령의 역사 중심에 선 교회라는 주복교회의 창립 목적에 따라 모든
              교인들은 하나님 안에서 생명의 풍성함과 행복함을 누리는 삶.
              그리스도를 닮아가는 제자로 무장시키기 위해서 훈련하고 있습니다.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/intro_main.avif"
            width={600}
            height={0}
            alt="주복교회 소개"
            className="lg:w-auto w-full"
          />
        </div>
      </div>
      <div
        id="worship-schedule"
        className="flex justify-center content-center lg:mt-40 mt-10"
      >
        <div
          id="worship-schedule-detail"
          className="lg:mt-20 mt-5 flex flex-col content-center justify-center relative"
        >
          <h3 className="lg:text-3xl text-xl font-bold text-center mb-5">
            예배시간 안내
          </h3>
          <p className="w-full flex justify-between gap-20 mb-3">
            <span className="font-bold text-sm lg:text-md">주일 1부 예배</span>
            <span className="text-sm lg:text-md">오전 9:00 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">주일 2부 예배</span>
            <span className="text-sm lg:text-md">오전 11:00 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">주일 3부 예배</span>
            <span className="text-sm lg:text-md">오후 1:00 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">유치부 예배</span>
            <span className="text-sm lg:text-md">오전 11:00 규(3층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">아동부 예배</span>
            <span className="text-sm lg:text-md">오전 11:00 맘(3층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">중고등부 예배</span>
            <span className="text-sm lg:text-md">오전 11:00 앎(4층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">수요 예배</span>
            <span className="text-sm lg:text-md">오후 7:30 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">금요기도회</span>
            <span className="text-sm lg:text-md">오후 7:30 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">새벽기도</span>
            <span className="text-sm lg:text-md">오전 5:00 대예배실(2층)</span>
          </p>
          <p className="w-full flex justify-between mb-3">
            <span className="font-bold text-sm lg:text-md">토요새벽기도</span>
            <span className="text-sm lg:text-md">오전 6:00 대예배실(2층)</span>
          </p>
        </div>
      </div>
    </main>
  );
}
