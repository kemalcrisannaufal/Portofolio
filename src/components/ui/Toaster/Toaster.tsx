import { IToaster } from "@/contexts/ToasterContext";
import { ReactNode } from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

const iconList: { [key: string]: ReactNode } = {
  Success: (
    <CiCircleCheck className="text-green-600 dark:text-[var(--color-neon)] text-3xl" />
  ),
  Error: <CiCircleRemove className="text-red-600 text-3xl" />,
};

const Toaster = (props: IToaster) => {
  const { type, message } = props;
  return (
    <div
      role="alert"
      className="top-8 right-8 z-50 fixed flex items-center gap-5 bg-white dark:bg-[var(--color-secondary-dark)] shadow p-3 border border-neutral-200 dark:border-neutral-700 rounded-xl max-w-xs dark:text-white"
    >
      {iconList[type]}
      <div>
        <p
          className={`font-semibold  ${
            type === "Success"
              ? "text-green-600 dark:text-[var(--color-neon)]"
              : "text-red-500"
          }`}
        >
          {type}
        </p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Toaster;
