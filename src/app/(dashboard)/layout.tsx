import Link from "next/link";
import Image from "next/image";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6 md:w-[8%] lg:w-[16%] ">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-5/6 md:w-[92%] lg:w-[86%] bg-[#F7F8FA] overflow-scroll ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
