import { ElementType, FC, ReactNode } from "react";
import { Row } from "./Flex";

interface Props {
  className?: string;  
  size?: number;
  as?: ElementType;
  position: "top" | "bottom" | "left" | "right";
  children?: ReactNode;
}

export const Bar: FC<Props> = (props) => {
  const { position, className, children, as, size } = props;

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

  const getBorder = () => {
    switch (position) {
      case "bottom": {
        return "border-t";
      }
      case "left": {
        return "border-r";
      }
      case "right": {
        return "border-l";
      }

      default: {
        return "border-b";
      }
    }
  };

  const getRowDirection = () => {
    if (position === "top" || position === "bottom") {
      return "flex-row items-center";
    }

    return "flex-col";
  };

  return (
    <Element
      {...props}
      className={`flex items-center justify-center shrink-0 ${getMaxWidth()} ${getBorder()} w-full`}
    >
      <Row
        className={`p min-h-[56px] min-w-[56px] max-w-[960px] h-full w-full ${getRowDirection()} ${
          className || ""
        }`}
      >
        {children}
      </Row>
    </Element>
  );
};
