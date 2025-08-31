"use client";

import { ChangeEventHandler, FC } from "react";
import { Row } from "../Flex";
import { Img } from "../Img";
import { InputBase, InputProps } from "./Base";

export interface ImageProps extends InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageInput: FC<ImageProps> = (props) => {
  const { label, value, onChange } = props;

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) =>
    onChange(target.value);

  return (
    <InputBase label={label} as="label">
      <Row>
        <Img src={value} className="rounded" height={88} width={88} />
        <textarea
          className="border border-accent rounded w-full p resize-none h-[88px] overflow-hidden"
          value={value}
          onChange={handleChange}
        />
      </Row>
    </InputBase>
  );
};
