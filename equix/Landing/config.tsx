"use client";

import { Hero } from "@/app/components/Hero";
import { ReactNode } from "react";
import { Box } from "../components/Box";

interface LandingConfig {
  title: string;
  heading: string;
  description: string;
  action?: ReactNode;
  logo: ReactNode;
  routes: {
    href: string;
    label: string;
  }[];
  hero: ReactNode;
  appName: string;
  appOwnerName: string;
  supportsDarkTheme: boolean;
}

const config: LandingConfig = {
  title: "EQUIX — Не утруждайтесь созданием интерфейсов приложений.",
  heading: "Не утруждайтесь созданием интерфейсов приложений.",
  description:
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение.",
  logo: (
    <Box className="text-accent font-thin leading-none tracking-[8px] text-4xl h-10 items-center">
      EQUIX
    </Box>
  ),
  // action: (
  //   <Box href="/components" className="bg-accent text-light h-auto">
  //     Попробовать
  //   </Box>
  // ),
  routes: [
    { href: "/", label: "Главная" },
    { href: "/components", label: "Компоненты" },
    { href: "/docs", label: "Документация" },
    { href: "/pricing", label: "Цены" },
    // { href: "/about", label: "О нас" },
    { href: "/profile", label: "Личный кабинет" },
  ],
  hero: <Hero />,
  appName: "EQUIX",
  appOwnerName: "ООО ЭКВИКС · ИНН 6320077469 · ОГРН 1236300030383 · КПП 632001001",
  supportsDarkTheme: true,
};

export default config;
