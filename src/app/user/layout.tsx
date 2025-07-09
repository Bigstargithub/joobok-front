import CommonHeader from "../components/common/header";
import CommonMenu from "../components/common/menu";
import CommonFooter from "../components/common/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonHeader />
      <CommonMenu />
      {children}
      <CommonFooter />
    </>
  );
}
