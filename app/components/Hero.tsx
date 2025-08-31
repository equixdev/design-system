import { Box } from "@/equix/components/Box";
import { CoolerDarkThemeToggle } from "@/equix/components/DarkThemeProvider";
import { Details } from "@/equix/components/Details";
import { Col } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import { Input } from "@/equix/components/Input";
import { Switch } from "@/equix/components/Switch";
import { useState } from "react";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAgreed, setIsAgreed] = useState(true);

  return (
    <>
    <div className="relative text-sm mx-auto sm:mx-0 shrink-0 overflow-hidden bg-light dark:bg-dark z-30">
      <img src="/iphone.jpg" alt="" className="w-[220px]" />
      <Col className="absolute top-12 left-4 w-[188px] h-[437px]">
        <Input
          type="search"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Что ищем?"
          onClick={() => ""}
        />
        <Details summary="Опции">
          <Box onClick={() => ""}>Сохранить как</Box>
          <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
        </Details>
        <CoolerDarkThemeToggle />
        <Switch
          value={isAgreed}
          label="Соглашаюсь с политикой конфиденциальности"
          onChange={setIsAgreed}
        />
        <Box isDimmed className="py-0">
          <Icon name="arrow-up" />
          На все выше можно нажать!
        </Box>
      </Col>
    </div>
    <pre className="absolute top-16 left-0 select-none opacity-15 text-accent overflow-hidden w-full">{`<div className="relative text-sm mx-auto sm:mx-0 shrink-0 overflow-hidden">
      <img src="/iphone.jpg" alt="" className="w-[220px]" />
      <Col className="absolute top-12 left-4 w-[188px] h-[437px]">
        <Input
          type="search"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Что ищем?"
          onClick={() => ""}
        />
        <Details summary="Опции">
          <Box onClick={() => ""}>Сохранить как</Box>
          <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
        </Details>
        <CoolerDarkThemeToggle />
        <Switch
          value={isAgreed}
          label="Соглашаюсь с политикой конфиденциальности"
          onChange={setIsAgreed}
        />
        <Box isDimmed className="py-0">
          <Icon name="arrow-up" />
          На все выше можно нажать!
        </Box>
      </Col>
    </div>`}</pre>
    </>
  );
};
