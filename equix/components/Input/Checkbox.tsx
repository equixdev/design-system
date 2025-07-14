"use client";

import { FC, useState } from "react";
import { Input } from ".";
import { Dialog } from "../Dialog";
import { InputBase, InputProps } from "./Base";
import { InputOption } from "@/equix/types";
import { capitalize } from "@/equix/utils";

export interface CheckboxProps extends InputProps {
  minOptions?: number;
  options: InputOption[];
  isCollapsed?: boolean;
  maxOptions?: number;
  value: InputOption[];
  onChange: (value: InputOption[]) => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    label,
    minOptions = 0,
    maxOptions,
    options,
    value = [],
    onChange,
    className,
    isCollapsed = false,
  } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const MAX_COLLAPSED_LENGTH = 10;

  const handleChange = (option: InputOption) => {
    if (maxOptions && value.length === maxOptions) return;

    const alreadySelectedOption = value.find(({ id }) => id === option.id);

    if (alreadySelectedOption) {
      if (minOptions === 1 && value.length === 1) return;

      onChange(value.filter(({ id }) => id !== option.id));
    } else onChange(Array.from(new Set([...value, option])));
  };

  const renderOptions = (optionsToRender: InputOption[]) => (
    <div className="flex flex-col">
      {optionsToRender?.length > 0 ? (
        optionsToRender.map((option, index) => (
          <label key={index} className="flex gap w-full">
            <input
              type="checkbox"
              checked={value?.map(({ id }) => id).includes(option.id)}
              onChange={() => handleChange(option)}
            />
            {option.name !== "True" &&
              capitalize(option.name.toLowerCase()).replaceAll("_", " ")}
          </label>
        ))
      ) : (
        <span className="text-gray-400">Ничего не найдено</span>
      )}
    </div>
  );

  const renderContents = () => {
    if (isCollapsed)
      return (
        <>
          <span className={value.length > 0 ? "" : "text-gray-400"}>
            {value.length > 0
              ? value.map((option) => option.name).join(", ")
              : "Not selected"}
          </span>
          <button className="self-start" onClick={() => setIsDialogOpen(true)}>
            {value.length > 0 ? "Change" : "Select"}
          </button>
        </>
      );

    return (
      <div
        className={`flex flex-col ${
          options.length > MAX_COLLAPSED_LENGTH ? "border border-accent" : ""
        } col-1`}
      >
        {renderOptions(options)}
      </div>
    );
  };

  return (
    <>
      <InputBase as="fieldset" className={className} label={label}>
        {renderContents()}
      </InputBase>
      <Dialog
        title={label!}
        isOpen={isDialogOpen}
        close={() => setIsDialogOpen(false)}
      >
        {options.length > MAX_COLLAPSED_LENGTH && (
          <Input
            type="search"
            value={searchQuery}
            onChange={setSearchQuery}
            autoFocus
          />
        )}
        {renderOptions(
          options.filter((option) =>
            option.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )}
      </Dialog>
    </>
  );
};
