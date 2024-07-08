import { z } from "zod";
import {
  countryList,
  featuresData,
  navLinks,
  storeCategories,
} from "@/app/_lib/data";
import { isValidPassword } from "./validatePassword";
import { StaticImageData } from "next/image";
import { UseFormRegister } from "react-hook-form";

export type Store = (typeof storeCategories)[number];
export type Feature = (typeof featuresData)[number];
export type NavLink = (typeof navLinks)[number];
export type Country = (typeof countryList)[number];
export const formSignUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "اسم التاجر مطلوب" })
    .min(2, { message: "من فضلك أدخل اسم أكبر من حرف واحد" })
    .refine((val) => /^[A-Za-z\u0600-\u06FF\s]+$/.test(val), {
      message: "يجب أن لا يحتوي على أرقام أو رموز خاصة",
    }),
  email: z
    .string()
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().superRefine((pass, ctx) => {
    const passwordValid = isValidPassword(pass);
    const checkValidPassword = passwordValid.message;
    if (checkValidPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: checkValidPassword as string,
      });
    }
  }),
  number: z
    .string()
    .min(1, { message: "رقم الجوال مطلوب" })
    .refine(
      (val) =>
        /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/.test(val),
      {
        message: "رقم الجوال غير صحيح",
      }
    ),
  country: z.string(),
});

export type FormRegister = UseFormRegister<{
  number?: string;
  name?: string;
  email: string;
  password: string;
  country?: string;
}>;

export type User = z.infer<typeof formSignUpSchema>;
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().min(1, { message: "كلمة المرور مطلوبة" }),
});

export type LoginUser = z.infer<typeof loginSchema>;

export type Link = {
  id: string;
  label: string;
  description: string;
  icon: StaticImageData;
  url: string;
};
