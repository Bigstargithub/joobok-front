import Image from "next/image";

export default function SquareItemComponent({
  id,
  thumbnail,
  title,
  description,
  createdAt,
}: {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  createdAt: string;
}) {
  return (
    <div className="w-3/4 m-auto flex content-center mt-10 gap-5 cursor-pointer">
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
        width={0}
        height={0}
        alt="주복광장"
        className="max-w-[400px] max-h-[300px]"
      />
      <div className="flex flex-col justify-between content-between">
        <div>
          <h3 className="text-bold text-2xl font-semibold">{title}</h3>
          <p className="mt-4 text-md font-medium text-grey-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
