"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SwitchFormBtns from "./SwitchFormBtns";
import { IoCheckmarkCircleSharp as SuccessIcon } from "react-icons/io5";
import CustomSelectCountry from "./CustomSelectCountry";
import { CountryMenuContextProvider } from "@/app/_context/CountryMenuContext";
import { User, formSignUpSchema } from "@/app/_lib/types";
import { isValidPassword as barStrengthIndicator } from "@/app/_lib/validatePassword";
import FormBtnSubmission from "./FormBtnSubmission";
import { createUser } from "../_lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { childrenVariants, motion } from "../_lib/motionVariants";
import { useSetBgColor } from "../_lib/hooks";

export default function RegisterForm() {
  useSetBgColor();
  const {
    watch,
    reset,
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    mode: "all",
    resolver: zodResolver(formSignUpSchema),
  });
  const [registeredErrorMessage, setRegisteredErrorMessage] = useState("");
  const router = useRouter();

  async function onSubmit(data: User) {
    try {
      const user = await createUser(data);
      if (!user) {
        setRegisteredErrorMessage("البريد الإلكتروني مُسجل مسبقا.");
        toast.warning("يوجد مستخدم مُسجل بالفعل بهذا البريد الإلكتروني!");
        return;
      }
      const firstName = user?.name.split(" ")[0];

      toast.message(`مرحبا ${firstName}، محاكاة إنشاء حساب تمت بنجاح!`, {
        icon: <SuccessIcon className="h-5 w-5" />,
        description: "يمكنك الآن القيام بتسجيل الدخول!",
        style: {
          color: "#004D5A",
          background: "#CFF7EE",
        },
      });
      console.log(user);
      sessionStorage.setItem("user", JSON.stringify(user));
      reset();
      router.push("/login");
    } catch (error) {
      setError("root", {
        message: "Something went very wrong",
      });
    }
  }
  const detectBarStrength = barStrengthIndicator(
    watch("password")
  ).strengthValues;

  return (
    <motion.div
      animate="animate"
      initial="initial"
      viewport={{ once: true, amount: 1 }}
      variants={childrenVariants}
      className="flex lg:pl-10 text-primary-150 pb-5 flex-col"
    >
      {/* <Page navigation /> */}
      <SwitchFormBtns variants={childrenVariants} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Merchant Name */}
        <InputField
          variants={childrenVariants}
          register={register}
          inputMode="text"
          type="text"
          name="name"
          labelText="اسم التاجر"
          error={errors.name?.message}
        />
        {/* Merchant Email */}
        <InputField
          variants={childrenVariants}
          register={register}
          onValueChange={() => setRegisteredErrorMessage("")}
          inputMode="email"
          type="email"
          name="email"
          labelText="البريد الإلكتروني"
          error={errors.email?.message || registeredErrorMessage}
        />
        {/* Merchant Number */}
        <CountryMenuContextProvider>
          <CustomSelectCountry
            variants={childrenVariants}
            register={register}
            error={errors.number?.message}
          />
        </CountryMenuContextProvider>
        {/* Merchant Password */}
        <InputField
          variants={childrenVariants}
          register={register}
          inputMode="text"
          detectBarStrength={detectBarStrength}
          type="password"
          name="password"
          labelText="كلمة المرور"
          error={errors.password?.message}
        />
        {/* Submit Btn */}
        <FormBtnSubmission
          isSubmitting={isSubmitting}
          variants={childrenVariants}
        />
      </form>
    </motion.div>
  );
}
