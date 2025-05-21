import { IToaster } from "@/contexts/ToasterContext";
import { ReactNode } from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

const iconList: { [key: string]: ReactNode } = {
  Success: <CiCircleCheck className="text-green-600 text-3xl" />,
  Error: <CiCircleRemove className="text-red-600 text-3xl" />,
};

const Toaster = (props: IToaster) => {
  const { type, message } = props;
  return (
    <div
      role="alert"
      className="top-8 right-8 z-50 fixed flex items-center gap-5 shadow p-3 border border-gray-300 rounded max-w-xs"
    >
      {iconList[type]}
      <div>
        <p
          className={`font-semibold  ${
            type === "Success" ? "text-green-800" : "text-red-500"
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
