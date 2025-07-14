import { InputOption } from "@/equix/types";
import { capitalize } from "@/equix/utils";
import { FC } from "react";
import { Icon } from "../Icon";

interface Props {
  option?: InputOption;
  handleChange: (option: InputOption) => void;
  value: InputOption | undefined;
}

export const RadioOption: FC<Props> = (props) => {
  const { option, handleChange, value } = props;

  const getIconName = () => {
    if (option && option.id === value?.id) {
      return "check-circle-fill";
    }

    return "circle";
  };

  return (
    <label
      className={`flex gap w-full p relative`}
      onClick={() => option && handleChange(option)}
    >
      <input
        type="radio"
        checked={option && value?.id === option.id}
        onChange={() => ""}
        className="w-full top-0 left-0 h-full absolute opacity-0"
      />
      <Icon name={getIconName()} className="text-accent" />
      {option
        ? capitalize(option.name.toLowerCase()).replaceAll("_", " ")
        : undefined}
    </label>
  );
};
