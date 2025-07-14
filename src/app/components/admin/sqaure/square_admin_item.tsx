import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminSquareItemComponent({
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
  const convertCreatedAt = new Date(createdAt).toISOString().split("T")[0];
  const router = useRouter();

  const deleteSquareData = async () => {
    if (confirm("정말 주복광장 데이터를 삭제하시겠습니까?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/square/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const jsonData = await res.json();
      alert(jsonData.message);

      if (jsonData.status === 200) return location.reload();
    }
  };

  return (
    <tr>
      <td className="w-20">{id}</td>
      <td className="w-[200px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
          width={200}
          height={100}
          alt={title}
        />
      </td>
      <td>{title}</td>
      <td>{description}</td>
      <td className="w-40">{convertCreatedAt}</td>
      <td className="w-50">
        <Link
          href={`/admin/square/create?id=${id}`}
          className="mr-3 cursor-pointer"
        >
          수정
        </Link>
        <button
          onClick={deleteSquareData}
          className="text-red-500 text-medium cursor-pointer"
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
