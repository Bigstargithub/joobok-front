import Image from "next/image";

export default function PastorsPage() {
  return (
    <main className="m-auto">
      <h1 className="text-5xl font-semibold">섬기는 이</h1>
      <div id="main-pastor" className="flex flex-wrap flex-col justify-center content-center mt-5 text-center">
        <h3 className="text-center text-2xl font-semibold mb-4">담임목사</h3>
        <Image src="/main_pastor.avif" width={300} height={0} alt="담임목사 서범석" className="h-auto"  />
        <p className="text-xl font-medium mt-3">서범석</p>
      </div>
      <div id="sub-pastor" className="mt-20">
        <h3 className="text-center text-2xl font-semibold mb-4">부목사</h3>
        <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 md:mx-w-1/3 m-auto">
          <div>
            <Image src="/sub_pastor_bae.avif" width={300} height={0} alt="부목사 배종화" className="h-auto" />
            <h3 className="text-center text-xl font-medium mt-3">부목사 배종화</h3>
          </div>
          <div>
            <Image src="/sub_pastor_yang.avif" width={300} height={0} alt="부목사 배종화" className="h-auto" />
            <h3 className="text-center text-xl font-medium mt-3">부목사 양성규</h3>
          </div>
        </div>
      </div>
      <div id="sub-pastor" className="mt-20">
        <h3 className="text-center text-2xl font-semibold mb-4">교육 전도사</h3>
        <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 md:mx-w-1/3 m-auto">
          <div>
            <Image src="/edu_missionary_seo.avif" width={300} height={0} alt="교육전도사 서겸" className="h-auto" />
            <h3 className="text-center text-xl font-medium mt-3">교육전도사 서겸</h3>
          </div>
          <div>
            <Image src="/edu_missionary_jo.avif" width={300} height={0} alt="교육전도사 조상범" className="h-auto" />
            <h3 className="text-center text-xl font-medium mt-3">교육전도사 조상범</h3>
          </div>
        </div>
      </div>
    </main>
  )
}