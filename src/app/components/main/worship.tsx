import Image from "next/image";
import Link from "next/link";

export default function MainWorshipArea() {
  return (
    <section>
      <div className="flex relative">
        <div className="md:w-1/2">
          <Image src="/worship_main.avif" width={500} height={0} alt="예배와모임" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center content-center">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-500">예배와 모임</h3>
            <pre className="text-sm tracking-tight mt-2">각 교육부서 예배 및 행사 안내</pre>
            <Link href="" className="block bg-blue-500 p-4 mt-2 text-white text-xl">
              바로가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}