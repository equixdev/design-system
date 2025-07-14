import { FC, ReactNode, useCallback, useEffect } from "react";

export interface DialogBaseProps {
  children: ReactNode;
  isOpen: boolean;
  isCloseable?: boolean;
  close?: () => void;
  className?: string;
}

export const DialogBase: FC<DialogBaseProps> = ({
  children,
  close,
  isOpen,
  className,
  isCloseable = true,
}) => {
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (isCloseable && close && event.key === "Escape") {
        close();
      }
    },
    [close, isCloseable]
  );

  useEffect(() => {
    if (isCloseable) document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, close, isCloseable]);

  return isOpen ? (
    <div className="w-full h-full bg-black fixed top-0 left-0 bg-opacity-50 flex overflow-y-auto z-20 items-center justify-center">
      <dialog
        className={`dark:bg-dark dark:text-light bg-light text-dark p flex flex-col gap-4 min-w-[320px] w-full max-w-screen-sm overflow-y-auto rounded ${
          className || ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  ) : undefined;
};
