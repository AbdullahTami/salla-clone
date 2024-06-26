"use client";
import React, {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../_lib/hooks";

type ModalContextType = {
  openName: string;
  open: Dispatch<SetStateAction<string>>;
  close: () => void;
};

const ModalContext = createContext<null | ModalContextType>(null);

function Modal({
  children,
}: {
  children: React.ReactNode;
  closeNav?: () => void;
}) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}
//Guard function
function useModalContext() {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error("Context must have open, setOpenName, close values");
  return context;
}

type Children = ReactElement<any, string | JSXElementConstructor<any>>;
type OpenProps = {
  opens: string;
  children: Children;
};

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModalContext();

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

type WindowProps = {
  name: string;
  children: Children;
  setShowSubMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  accordionEnable?: boolean;
};
function Window({
  name,
  children,
  setShowSubMenu,
  accordionEnable,
}: WindowProps) {
  const { openName, close } = useModalContext();
  function closeModalMenu() {
    close();
    setShowSubMenu?.(false);
  }

  const { ref } = useOutsideClick(closeModalMenu, false);

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed inset-0 w-full h-full z-[900000000] bg-[rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div
        ref={accordionEnable ? null : ref}
        className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 shadow-lg transition duration-300 rounded-lg  py-6 px-4 bg-white"
      >
        <button
          onClick={() => {
            close();
            setShowSubMenu?.(false);
          }}
          className="absolute top-0 p-px m-1 text-[#9aa1ae] right-0 rounded-sm hover:bg-[#f1f1f1] transition "
        >
          <HiXMark className="w-4 h-4" />
        </button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
            closeNav: () => setShowSubMenu?.(false),
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
