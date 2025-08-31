"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  className?: string;
  alt?: string;
  height: number | `${number}`;
  width: number | `${number}`;
  src: string | StaticImport;
}

export const Img: FC<Props> = (props) => {
  const { className, alt } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  const getClassName = () => {
    if (isExpanded) {
      return "h-full";
    }

    if (className) {
      return className;
    }

    return "";
  };

  return (
    <div
      className={String(
        isExpanded
          ? "fixed flex items-center justify-center top-0 left-0 h-full w-full bg-black/50 p z-10"
          : "contents"
      )}
      onClick={handleClick}
    >
      <Image
        {...props}
        className={`w-auto rounded border border-accent ${getClassName()}`}
        alt={alt || ""}
      />
    </div>
  );
};
