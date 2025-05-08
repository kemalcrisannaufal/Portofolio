import { ReactNode, useEffect, useRef } from "react";

type Proptypes = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = (props: Proptypes) => {
  const { onClose, children } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 p-5 w-full min-h-dvh">
      <div
        className="relative bg-white p-5 rounded lg:w-[50%] max-h-[75%] overflow-y-auto"
        ref={ref}
      >
        {children}
        <button
          className="top-4 right-4 absolute cursor-pointer"
          onClick={onClose}
        >
          <i className="bg-neutral-200 p-2 rounded-full text-xl bx bx-x" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
