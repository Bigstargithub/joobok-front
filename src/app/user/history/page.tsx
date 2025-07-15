import Image from "next/image";

export default function HistoryPage() {
  return (
    <main>
      <div
        id="church-history"
        className="lg:flex flex-nowrap justify-center content-center church-history gap-5"
      >
        <div>
          <h1 className="mr-3 lg:text-7xl text-4xl font-bold lg:text-left text-center">
            교회 연혁
          </h1>
          <h3 className="mt-2 lg:text-4xl text-xl lg:text-left text-center">
            history
          </h3>
          <div className="lg:mt-10 mt-5 lg:text-left text-center mb-5 lg:mb-0">
            <p>
              2002.8.4 천안시문화원(성정동) 지하강당을 빌려 주복교회를 개척하다.
            </p>
            <p>
              2002.11 두정동 1055번지 보람빌딩 201호로 예배당 마련 이사하다.
            </p>
            <p>
              2003.11 두정동 1052번지 3층 건물을 매입하여 부흥의 전기를 맞다.
            </p>
            <p>2009.1.19 두정동 1442번지 부지를 매입하여 성전을 건축하다.</p>
            <p>2013.5.19 주복교회 10주년 기념교회(한기대학교회)를 설립하다.</p>
            <p>2016.6.26 백성동 중심에 케노시스수도원을 개원하다.</p>
            <p>2017.4.22 두정동 1446번지를 주차장 부지로 매입하다.</p>
            <p>
              2022.4.10 케노시스수도원 이전 건축 후 개원(목천읍 덕전리 유왕골1길
              316-38)
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/history_main.avif"
            width={600}
            height={0}
            alt="주복교회 연혁"
            className="lg:w-auto w-full"
          />
        </div>
      </div>
    </main>
  );
}
