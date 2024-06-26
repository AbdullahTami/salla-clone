import Link from "next/link";
import { cn } from "../_lib/utils";

type StyleType = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  type: StyleType;
  onClick?: () => void;
  to?: string;
  className?: string;
  localPage?: boolean;
};

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
  className,
  localPage,
}: ButtonProps) {
  const base =
    "font-semibold relative flex justify-center perspective-5 after:w-full after:top-0 after:absolute after:h-full  after:border-accent-200 after:rounded-xl after:-z-10 after:rotate-x-30";

  const styles = {
    primary:
      base +
      " px-5 py-2 after:bg-accent-150  after:border-[2px] text-accent-50 after:py-3 after:px-4",
    secondary:
      base + " px-5 py-2 text-accent-200 after:border after:py-3 after:px-4",
    tertiary:
      base +
      " px-5 py-2 after:py-3 after:px-4 text-[21.6px] after:bg-accent-150 text-accent-50 ",
  };

  if (to)
    return (
      <Link href={to} target={localPage ? "" : "_blank"}>
        <span className={cn(styles[type], className)}>{children}</span>
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled}>
        <span className={cn(styles[type], className)}>{children}</span>
      </button>
    );

  return (
    <button disabled={disabled}>
      <span className={cn(styles[type], className)}>{children}</span>
    </button>
  );
}

export default Button;
