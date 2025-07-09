import Image from "next/image"
import Link from "next/link"

export default function MessageItemComponent({ image, title, desc, link }: { image:string, title:string, desc:string, link: string }) {
  return (
    <div className="w-3/4 m-auto flex content-center mt-10 gap-5">
      <Image src={image} width={300} height={0} alt={title} className="max-w-[400px] max-h-[300px]" />
      <div className="flex flex-col justify-between content-between">
        <div>
          <h3 className="text-bold text-2xl font-semibold">복음 전도를 위탁하심</h3>
          <p className="mt-4 text-md font-medium text-grey-300">
            주일예배 | 서범석 목사 | 주복교회 | 믿음에 대하여 말씀하심 [마8:10]
          </p>
        </div>
        <Link href={link} className="cursor-pointer text-blue-500 font-medium">
          바로가기
        </Link>
      </div>
    </div>
  )
}