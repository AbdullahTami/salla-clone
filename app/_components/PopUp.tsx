"use client";
import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

export default function PopUp() {
  const [visible, setVisible] = useState(false);

  const close = () => {
    setVisible(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const pop_status = localStorage.getItem("pop_status");
      if (!pop_status) {
        setVisible(true);
        document.body.style.overflow = "hidden";
        localStorage.setItem("pop_status", "true");
      }
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 w-full h-full z-[9000000000] bg-[rgba(0,0,0,0.1)] backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="fixed m-3 top-[35%] lg:left-[22%] -translate-y-2/4 -translate-x-2/4 shadow-lg transition duration-300 rounded-lg  py-6 px-4 bg-white max-w-2xl"
      >
        <button
          onClick={close}
          className="absolute top-0 p-px m-1 text-[#9aa1ae] right-0 rounded-sm hover:bg-[#f1f1f1] transition "
        >
          <HiXMark className="w-4 h-4" />
        </button>
        <div className="text-accent-200 text-center space-y-4">
          <p>
            مرحباً عزيزي المستخدم، سعيد بزيارتك لهذا الموقع الذي يحاكي الصفحة
            التعريفية إضافةً إلى صفحتا إنشاء حساب وتسجيل دخول الخاصة بموقع سلة!
          </p>
          <p>
            أما بعد، وجب التنوية أن جميع الحقوق تعود بشكل كامل ومطلق{" "}
            <Link href="https://salla.com/" className="font-semibold underline">
              لسلة القابضة
            </Link>
          </p>
          <p>دمتم بخير</p>
          <Button type="primary" onClick={close} className="text-white">
            إغلاق
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
