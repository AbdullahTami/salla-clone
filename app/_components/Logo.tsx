import { useHasScrolledDown } from "@/app/_lib/hooks";
import { cn } from "@/app/_lib/utils";
import LogoImage from "@/assets/salla-favicon.png";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Logo({ fixed }: { fixed?: boolean }) {
  // fixed prop pertain to size
  const { scrollEffect } = useHasScrolledDown();

  return (
    <div
      onClick={() => window.scrollTo(-1, -1)}
      className={cn(
        "flex transition-all cursor-pointer gap-2 font-bold text-accent-200",
        !scrollEffect && !fixed ? "h-[70px] w-[70px]" : "h-[52px] w-[56px]"
      )}
    >
      <Image src={LogoImage} priority alt="image" className="object-cover" />

      <div
        className={cn(
          "transition-all text-lg -mt-1",
          !fixed && !scrollEffect && " mt-1 text-2xl"
        )}
      >
        <p className="-mb-3 mt-2">سلة</p>
        <p className={poppins.className}>salla</p>
      </div>
    </div>
  );
}
