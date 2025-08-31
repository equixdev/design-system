import { ElementType, FC, ReactNode } from "react";

interface Props {
  className?: string;
  size?: number;
  direction?: "h" | "v";
  as?: ElementType;
  children?: ReactNode;
}

export const View: FC<Props> = (props) => {
  const { className, size, direction = "v", as } = props;

  const Element = as || "div";

  const getMaxWidth = () => {
    switch (size) {
      case 3: {
        return "max-w-[60rem]";
      }
      case 2: {
        return "max-w-screen-sm";
      }
      case 1: {
        return "max-w-xs";
      }

      default: {
        return "max-w-screen-xl";
      }
    }
  };

  const getDirection = () => {
    if (direction === "h") {
      return "flex-row";
    }
    
    return "flex-col";
  };

  return (
    <Element
      {...props}
      className={`flex ${getMaxWidth()} ${getDirection()} ${className || ""}`}
    />
  );
};
