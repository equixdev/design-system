import { FC } from "react";
import { Icon } from "./Icon";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

export const Switch: FC<Props> = (props) => {
  const { value, onChange, label } = props;

  const getIconName = () => {
    if (value) {
      return "check-circle-fill";
    }

    return "circle";
  };

  return (
    <label className="p rounded gap flex cursor-pointer">
      <div>
        <input
          type="checkbox"
          className="w-0"
          onChange={() => onChange(!value)}
          checked={value}
        />
        <Icon className="text-accent" name={getIconName()} />
      </div>
      {label}
    </label>
  );
};
