import Image from "next/image";
import Link from "next/link";

export default function AdminHeaderComponent() {
  return (
    <header className="flex flex-wrap content-center">
      <Link href="/admin" className="w-fit">
        <Image src="/logo_pc.png" width={200} height={0} alt="주복교회" />
      </Link>
      <ul className="flex flex-wrap content-center admin-menu gap-10 ml-3">
        <li>
          <Link href="/admin/main">메인</Link>
        </li>
        <li>
          <p>메인</p>
        </li>
        <li>
          <p>메인</p>
        </li>
      </ul>
    </header>
  );
}
