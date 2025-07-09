import Image from "next/image";
import Link from "next/link";

export default function SermonItemComponent({
  id,
  thumbLink,
  title,
  description,
  createdAt,
}: {
  id: number;
  thumbLink: string;
  title: string;
  description: string;
  createdAt: string;
}) {
  return (
    <tr>
      <td className="w-20">{id}</td>
      <td className="w-[200px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbLink}`}
          width={200}
          height={100}
          alt={title}
        />
      </td>
      <td>{title}</td>
      <td>{description}</td>
      <td className="w-30">{createdAt}</td>
      <td className="w-50">
        <Link href="/admin/sermon/detail?id=1" className="mr-3 cursor-pointer">
          수정
        </Link>
        <button className="text-red-500 text-medium cursor-pointer">
          삭제
        </button>
      </td>
    </tr>
  );
}
