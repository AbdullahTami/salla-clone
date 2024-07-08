"use client";
import React, { useState } from "react";
import SwitchFormBtns from "./SwitchFormBtns";
import { useForm } from "react-hook-form";
import CheckboxInput from "./CheckboxInput";
import InputField from "./InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getExistingUser, getLoginUser } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FormBtn from "./FormBtn";
import { useSessionStorage, useSetBgColor } from "../_lib/hooks";
import { childrenVariants, motion } from "../_lib/motionVariants";
import { LoginUser, loginSchema } from "../_lib/types";

export default function LoginForm() {
  useSetBgColor();
  const retrievedUser = useSessionStorage("user");
  console.log(retrievedUser);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginUser>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: retrievedUser?.email || "",
      password: retrievedUser?.password || "",
    },
  });
  const [registeredErrorMessage, setRegisteredErrorMessage] = useState("");

  const router = useRouter();

  async function onSubmit(data: LoginUser) {
    // Could've had email validation on it's own but rather made it encrypted and only if any of the fields doesn't match user credentials
    try {
      const existingUser = await getExistingUser(data);
      if (!existingUser) {
        setRegisteredErrorMessage("البريد الإلكتروني الذي أدخلته غير صحيح");
        return;
      }
      const user = await getLoginUser(data);
      if (!user)
        return toast.error(
          "بيانات الإعتماد غير متطابقة مع البيانات المسجلة لدينا"
        );
      toast.success("محاكاة تسجيل دخول ناجحة!");
      reset();
      sessionStorage.clear();
      router.push("/");
    } catch (error) {
      setError("root", {
        message: "Something went very wrong",
      });
    }
  }

  return (
    <motion.div
      animate="animate"
      initial="initial"
      viewport={{ once: true, amount: 1 }}
      variants={childrenVariants}
      className="flex text-primary-150 lg:pl-10 pb-5 flex-col"
    >
      {/* <Example /> */}
      <SwitchFormBtns variants={childrenVariants} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Merchant Email */}
        <InputField
          variants={childrenVariants}
          register={register}
          inputMode="email"
          onValueChange={() => setRegisteredErrorMessage("")}
          type="email"
          name="email"
          labelText="البريد الإلكتروني"
          error={errors.email?.message || registeredErrorMessage}
        />

        {/* Merchant Password */}
        <InputField
          variants={childrenVariants}
          register={register}
          inputMode="text"
          type="password"
          name="password"
          labelText="كلمة المرور"
          error={errors.password?.message}
        />
        <CheckboxInput variants={childrenVariants} />
        <motion.div variants={childrenVariants}>
          <FormBtn isSubmitting={isSubmitting} />
        </motion.div>
      </form>
    </motion.div>
  );
}
