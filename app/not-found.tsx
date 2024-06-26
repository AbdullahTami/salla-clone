import Link from "next/link";
import SallaLogo from "@/public/salla-logo.svg";
import Image from "next/image";

function NotFound() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link
        href="/"
        className="self-start  lg:mr-0 absolute top-[20px] right-[45px]"
      >
        <Image src={SallaLogo} width={120} alt="Salla logo" />
      </Link>
      <div>
        <h1 className="text-xl font-semibold text-accent-150">
          عذراً، الصحفة التي تبحث عنها غير موجودة
        </h1>
        <Link
          href="/"
          className="inline-block underline text-accent-150 px-6 py-3 text-lg"
        >
          الصفحة الرئيسية &larr;
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
