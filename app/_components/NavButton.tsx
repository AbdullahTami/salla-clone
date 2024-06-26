import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function NavButton() {
  return (
    <div className="px-2 items-center text-accent-150 gap-2 flex border-r border-[#004d5a3f]">
      <Link href="/login" className="py-2 px-4">
        تسجيل دخول
      </Link>
      <Button to="/register" type="primary" localPage>
        أنشئ متجرك مجاناَ
      </Button>
    </div>
  );
}
