import Image from "next/image"

export default function HistoryPage() {
  return (
    <main>
      <div id="church-history" className="flex flex-nowrap justify-center content-center mx-10 church-history">
        <div className="mx-10">
          <h1 className="mr-3 text-7xl font-bold">교회 연혁</h1>
          <h3 className="mt-2 text-4xl">history</h3>
          <div className="mt-10">
            <p>2002.8.4 천안시문화원(성정동) 지하강당을 빌려 주복교회를 개척하다.</p>
            <p>2002.11 두정동 1055번지 보람빌딩 201호로 예배당 마련 이사하다.</p>
            <p>2003.11 두정동 1052번지 3층 건물을 매입하여 부흥의 전기를 맞다.</p>
            <p>2009.1.19 두정동 1442번지 부지를 매입하여 성전을 건축하다.</p>
            <p>2013.5.19 주복교회 10주년 기념교회(한기대학교회)를 설립하다.</p>
            <p>2016.6.26 백성동 중심에 케노시스수도원을 개원하다.</p>
            <p>2017.4.22 두정동 1446번지를 주차장 부지로 매입하다.</p>
            <p>2022.4.10 케노시스수도원 이전 건축 후 개원(목천읍 덕전리 유왕골1길 316-38)</p>

          </div>
        </div>
        <div>
          <Image src="/history_main.avif" width={600} height={0} alt="주복교회 연혁" className="w-auto" />
        </div>
      </div>
    </main>
  )
}