import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import SallaLogo from "@/public/salla-logo.svg";
import LoginForm from "@/app/_components/LoginForm";
import LoginInfo from "@/app/_components/LoginInfo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};
export default function page() {
  return (
    <section className="h-screen flex lg:gap-10 gap-5 flex-col justify-center px-5 lg:px-0 overflow-hidden">
      <Link
        href="/"
        className="self-start md:mr-9 mb-5 lg:mr-0 lg:absolute top-[20px] right-[45px]"
      >
        <Image src={SallaLogo} width={120} alt="Salla logo" />
      </Link>
      <div className="grid items-center md:px-10 lg:grid-cols-2 ">
        <LoginForm />
        <LoginInfo />
      </div>
    </section>
  );
}
