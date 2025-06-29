import Image from "next/image"
import Link from "next/link"

export default function ChurchLocationPage() {
  return (
    <main>
      <h2 className="text-center text-3xl text-blue-500 font-semibold">주복교회 오시는 길</h2>
      <div className="flex mt-10 gap-6">
        <Image src="/church_picture.avif" width={300} height={0} alt="주복교회사진" className="w-1/2" />
        <Image src="/church_map.png" width={300} height={0} alt="주복교회지도" className="w-1/2" />
      </div>
      <div className="mt-5 text-center">
        <p className="text-xl text-blue-600 font-medium">충남 천안시 서북구 두정상가6길 18(두정동) 주복교회</p>
        <Link 
          href="https://map.naver.com/p/search/%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C/place/17293266?c=15.00,0,0,0,dh&placePath=/home?entry=pll&from=map&fromPanelNum=2&timestamp=202506290926&locale=ko&svcName=map_pcv5&searchText=%EC%A3%BC%EB%B3%B5%EA%B5%90%ED%9A%8C"
          className="mt-3 inline-block px-4 py-2 text-blue-400 border-1"
          target="_blank"
        >지도 바로가기 ></Link>
      </div>
    </main>
  )
}