"use client";

import { useRouter } from "next/navigation";
import { Box } from "./Box";
import { Row, Col } from "./Flex";
import { Icon } from "./Icon";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <Col className="items-center justify-center h-screen">
      <p className="p max-w-prose">
        Произошла ошибка. Возможно, данная страница еще не создана, была
        перемещена или удалена.
      </p>
      <Row className="flex-wrap">
        <Box onClick={() => router.refresh()}>
          <Icon name="arrow-clockwise" />
          Обновить страницу
        </Box>
        <Box onClick={() => router.back()}>
          <Icon name="chevron-left" />
          Вернуться назад
        </Box>
        <Box onClick={() => router.push("/")}>
          <Icon name="house" />
          Вернуться на домашнюю страницу
        </Box>
      </Row>
    </Col>
  );
};
