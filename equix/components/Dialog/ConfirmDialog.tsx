import { FC } from "react";
import { DialogBase, DialogBaseProps } from "./Base";

interface Props extends Omit<DialogBaseProps, "children"> {
  description: string;
  close: () => void;
  confirmAction: () => void;
}

export const ConfirmationDialog: FC<Props> = (props) => {
  const { description, confirmAction, close } = props;

  return (
    <DialogBase isCloseable={false} {...props}>
      <p>{description}</p>
      <menu className="flex justify-evenly text-accent">
        <button onClick={confirmAction}>Да</button>
        <button onClick={close}>Нет</button>
      </menu>
    </DialogBase>
  );
};
