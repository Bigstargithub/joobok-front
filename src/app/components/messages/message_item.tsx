import Image from "next/image";
import Link from "next/link";

export default function MessageItemComponent({
  image,
  title,
  desc,
  link,
}: {
  image: string;
  title: string;
  desc: string;
  link: string;
}) {
  const onClickList = () => {
    return window.open(link);
  };

  return (
    <div
      className="w-3/4 m-auto flex content-center mt-10 gap-5 cursor-pointer"
      onClick={onClickList}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image}`}
        width={300}
        height={0}
        alt={title}
        className="max-w-[400px] max-h-[300px]"
      />
      <div className="flex flex-col justify-between content-between">
        <div>
          <h3 className="text-bold text-2xl font-semibold">{title}</h3>
          <p className="mt-4 text-md font-medium text-grey-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}
