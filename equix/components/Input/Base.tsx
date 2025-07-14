"use client";

import { ElementType, FC, ReactNode } from "react";

interface InputBaseProps {
  as?: ElementType;
  className?: string | undefined;
  errorMessage?: string;
  children: ReactNode;
  isRequired?: boolean;
  label?: string | undefined;
}

export const InputBase: FC<InputBaseProps> = (props) => {
  const {
    as = "label",
    className,
    children,
    errorMessage,
    label,
    isRequired,
  } = props;
  const Element = as;

  return (
    <Element className={`max-w-screen-sm ${className || ""}`}>
      {label && (
        <div className="w-full">
          {label} {isRequired ? "*" : ""}
        </div>
      )}
      {children}
      {errorMessage && <span className="text-red-700">{errorMessage}</span>}
    </Element>
  );
};

export interface InputProps {
  type?:
    | "text"
    | "checkbox"
    | "radio"
    | "date"
    | "time"
    | "tel"
    | "email"
    | "search"
    | "image";
  label?: string;
  errorMessage?: string;
  className?: string;
  autoFocus?: boolean;
}
