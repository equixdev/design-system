"use client";

import { FC } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { DateInput, DateProps } from "./Date";
import { Radio, RadioProps } from "./Radio";
import { TextInput, TextProps } from "./Text";
import { ImageInput, ImageProps } from "./Image";

export const Input: FC<RadioProps | CheckboxProps | DateProps | TextProps> = (
  props
) => {
  const getComponent = () => {
    switch (props.type) {
      case "checkbox": {
        return <Checkbox {...(props as CheckboxProps)} />;
      }
      case "radio": {
        return <Radio {...(props as RadioProps)} />;
      }
      case "date": {
        return <DateInput {...(props as DateProps)} />;
      }
      case "image": {
        return <ImageInput {...(props as ImageProps)} />;
      }

      default: {
        return <TextInput {...(props as TextProps)} />;
      }
    }
  };

  return getComponent();
};
