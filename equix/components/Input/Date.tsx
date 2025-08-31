"use client";

import { ChangeEventHandler, FC } from "react";
import { InputBase } from "./Base";
import { TextProps } from "./Text";
import { Box } from "../Box";
import { Icon } from "../Icon";

export interface DateProps extends TextProps {
  dateOptions?: Intl.DateTimeFormatOptions;
  inline?: boolean;
}

export const DateInput: FC<DateProps> = (props) => {
  const { label, value, onChange, inline } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    onChange(target.value);

  const parseValue = () => {
    if (value) {
      return new Date(value).toLocaleDateString("ru");
    }

    return "";
  };

  return (
    <InputBase
      className={`relative ${inline ? "flex items-center gap-1" : ""}`}
      label={label}
    >
      <div className="border border-accent rounded flex">
        <input
          type="text"
          className="p h-10 rounded w-full"
          value={parseValue()}
        />
        <Box className="justify-center w-10" onClick={() => ""}>
          <Icon name="calendar" />
        </Box>
      </div>
      <input
        type="date"
        value={new Date(value).toString()}
        className="w-10 h-10 absolute opacity-0 bottom-2 right-2 text-4xl"
        onChange={handleChange}
      />
    </InputBase>
  );
};
