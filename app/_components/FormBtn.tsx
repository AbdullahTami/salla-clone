import React from "react";
import SpinnerMini from "./SpinnerMini";

export default function FormBtn({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="px-4 disabled:bg-[#baf3e6] disabled:cursor-not-allowed py-3 rounded-lg hover:bg-[#76e8cd] transition duration-300 w-full border bg-[#baf3e6] border-[#76e8cd] text-[#004d5a] cursor-pointer flex items-center justify-center"
    >
      {isSubmitting ? <SpinnerMini /> : "تسجيل"}
    </button>
  );
}
