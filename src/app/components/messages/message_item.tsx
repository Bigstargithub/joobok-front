import Image from "next/image";

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
      className="lg:w-3/4 w-8/10 m-auto lg:flex content-center mt-10 gap-5 cursor-pointer border-1 rounded-sm border-stone-300"
      onClick={onClickList}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image}`}
        width={300}
        height={0}
        alt={title}
        className="lg:max-w-[400px] max-h-[300px] w-full"
      />
      <div className="flex flex-col justify-between content-between lg:p-0 p-3">
        <div>
          <h3 className="text-bold lg:text-2xl text-xl font-semibold">
            {title}
          </h3>
          <p className="lg:mt-4 mt-2 lg:text-md text-sm font-medium text-grey-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
