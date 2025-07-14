"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { toOptions } from "../utils";
import { Box } from "./Box";
import { Input } from "./Input";

interface Props {
  children: ReactNode;
}

export const DarkThemeProvider: FC<Props> = (props) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isDarkThemeSelected = localStorage.getItem("dark-theme");

    if (
      isDarkThemeSelected === "true" ||
      (isDarkThemeSelected === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    }

    if (isDarkThemeSelected === "false") {
      document.body.classList.remove("dark");
    }

    setIsLoading(false);
  }, []);

  return isLoading ? undefined : children;
};

export const DarkThemeToggle = () => {
  const storedValue = localStorage.getItem("dark-theme");
  const [isDarkThemeSelected, setIsDarkThemeSelected] = useState(
    storedValue === "true"
  );

  return (
    <Box
      onClick={() => {
        if (isDarkThemeSelected) {
          document.body.classList.remove("dark");
        } else {
          document.body.classList.add("dark");
        }

        localStorage.setItem("dark-theme", String(!isDarkThemeSelected));

        setIsDarkThemeSelected(!isDarkThemeSelected);
      }}
    >
      {isDarkThemeSelected ? "Светлая тема" : "Темная тема"}
    </Box>
  );
};

export const CoolerDarkThemeToggle = () => {
  const storedValue = localStorage.getItem("dark-theme");

  const themeOptions = toOptions(["Светлая", "Темная", "Системная"]);

  const getOption = () => {
    if (storedValue) {
      if (storedValue === "true") {
        return themeOptions[1];
      }

      return themeOptions[0];
    }

    return themeOptions[2];
  };

  const [selectedTheme, setSelectedTheme] = useState(getOption());

  useEffect(() => {
    if (selectedTheme?.name === "Системная") {
      localStorage.clear();
    }
    if (selectedTheme?.name === "Светлая") {
      localStorage.setItem("dark-theme", "false");
      document.body.classList.remove("dark");
    }

    if (selectedTheme?.name === "Темная") {
      localStorage.setItem("dark-theme", "true");
      document.body.classList.add("dark");
    }
  }, [selectedTheme]);

  return (
    <Input
      label="Тема"
      type="radio"
      options={themeOptions}
      value={selectedTheme}
      onChange={setSelectedTheme}
    />
    // <Box
    //   onClick={() => {
    //     if (isDarkThemeSelected) {
    //       document.body.classList.remove("dark");
    //     } else {
    //       document.body.classList.add("dark");
    //     }

    //     localStorage.setItem("dark-theme", String(!isDarkThemeSelected));

    //     setIsDarkThemeSelected(!isDarkThemeSelected);
    //   }}
    // >
    //   {isDarkThemeSelected ? "Светлая тема" : "Темная тема"}
    // </Box>
  );
};
