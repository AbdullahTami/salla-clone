import Image from "next/image";
import React from "react";
import SallaLogo from "@/public/salla-logo.svg";
import RegisterForm from "@/app/_components/RegisterForm";
import RegisterInfo from "@/app/_components/RegisterInfo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: " إنشاء حساب متجر | سلة",
};
export default function page() {
  return (
    <section className="h-screen mx-auto flex lg:gap-10 gap-5 flex-col items-center lg:px-0 px-5 justify-center">
      <Link
        href="/"
        className="self-start md:mr-9 mb-5 lg:mr-0 lg:absolute top-[20px] right-[45px]"
      >
        <Image src={SallaLogo} width={120} alt="Salla logo" />
      </Link>
      <div className="grid w-full md:px-10 lg:grid-cols-2">
        <RegisterForm />
        <RegisterInfo />
      </div>
    </section>
  );
}
