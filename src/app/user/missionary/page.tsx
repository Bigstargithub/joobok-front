import Image from "next/image";

export default function UserMissionaryPage() {
  return (
    <section className="w-4/5 m-auto mt-4">
      <h2 className="text-center text-4xl font-bold">국내선교</h2>
      <h3 className="text-center text-xl font-medium mt-4">
        우리가 밟고 있는 이 땅에서의 선교
      </h3>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold mt-10">해외선교</h2>
      <h3 className="text-center text-xl font-medium mt-4">
        땅 끝까지 전해지는 복음과 하나님 나라 확장
      </h3>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
        <div className="flex">
          <Image
            src="/domestic_missionary_example.avif"
            width={200}
            height={0}
            alt="국내 선교"
            className="w-6/10"
          />
          <p className="ml-4 text-xl font-bold">매산여고 교목실</p>
        </div>
      </div>
    </section>
  );
}
