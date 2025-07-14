import { FC } from "react";
import { Box } from "../Box";
import { DialogBase, DialogBaseProps } from "./Base";

interface Props extends DialogBaseProps {
  title: string;
}

export const Dialog: FC<Props> = (props) => {
  const { title, children, close } = props;

  return (
    <DialogBase {...props}>
      <header className="flex gap-4 justify-between items-center">
        <Box className="font-semibold">{title}</Box>
        <Box onClick={() => close && close()}>
          <i className="text-xl bi bi-x-lg"></i>
        </Box>
      </header>
      {children}
    </DialogBase>
  );
};
