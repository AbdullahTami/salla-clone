import { useDisableScroll } from "../_lib/hooks";
import Button from "./Button";

type SallaViewResourceProps = {
  resourceName: string;
  href?: string;
  onCloseModal?: () => void;
  closeNav?: () => void;
};

export default function SallaViewResource({
  resourceName,
  href,
  onCloseModal,
  closeNav,
}: SallaViewResourceProps) {
  useDisableScroll(closeNav);
  return (
    <div className="max-w-96 w-80 text-center mt-1 text-sm lg:text-inherit flex flex-col">
      <p>
        الذهاب إلى صفحة
        <span className="text-accent-150 underline"> {resourceName} </span> على
        موقع سلة الرسمي
      </p>

      <div className="flex gap-1  justify-center mt-4">
        <button
          className="p-1 px-3 transition rounded-md hover:bg-[#f1f1f1]"
          onClick={() => {
            onCloseModal?.();
            closeNav?.();
          }}
        >
          إلغاء
        </button>
        <Button
          to={href}
          className="text-white font-normal px-4"
          type="primary"
        >
          متابعة
        </Button>
      </div>
    </div>
  );
}
