"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  password: string;
  message?: string;
}

export const PasswordProvider: FC<Props> = (props) => {
  const { children, password, message } = props;
  const router = useRouter();
  const [enteredPassword, setEnteredPassword] = useState("");

  useEffect(() => {
    const storedPassword = localStorage.getItem("pass");

    setEnteredPassword(storedPassword as string);

    if (storedPassword !== password) {
      const newPass = prompt(message || "Введите пароль");

      if (newPass) localStorage.setItem("pass", newPass);
    }
  }, [router, password, message]);

  if (enteredPassword === password) {
    return children;
  }

  return undefined;
};
