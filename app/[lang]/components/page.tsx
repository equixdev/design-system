"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Box } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";
import { H2 } from "@/equix/components/Heading";
import componentsData from "./data";

const Page = () => (
  <LandingLayout>
    <H2>Компоненты</H2>
    <p className="max-w-[615px]">
      Ниже вы можете видеть все компоненты EQUIX - составные части, из которых
      создаются приложения.
    </p>
    <Row className="flex-wrap w-full">
      {Object.keys(componentsData).map((componentName, index) => (
        <Box
          key={index}
          className="border border-inherit"
          href={`/components/${componentName}`}
        >
          {componentName}
        </Box>
      ))}
    </Row>
  </LandingLayout>
);

export default Page;
