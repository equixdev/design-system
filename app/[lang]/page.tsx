"use client";

import Image from "next/image";
import { LandingPage } from "@/equix/Landing/LandingPage";
import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import templatesData from "./templates/data";
import { BannerSection } from "../components/BannerSection";
import data from "./data.json";
import componentsData from "./components/data";
import { FeaturesSection } from "./components/FeaturesSection";

const Page = () => {
  const { clients } = data;

  return (
    <LandingPage
      sections={[
        {
          heading: "Попробуйте наши решения",
          children: (
            <div className="w-full gap sm:grid grid-cols-2">
              {templatesData.map(({ id, name, description }, index) => (
                <Card href={`/templates/${id}`} key={index} className="w-full">
                  <Image
                    src={`/templates/${id}.jpg`}
                    width="320"
                    height="100"
                    className="rounded border-inherit w-full sm:h-[250px] object-cover"
                    alt=""
                  />
                  <p className="text-accent">{`EQUIX/${name}`}</p>
                  <p>{description}</p>
                </Card>
              ))}
            </div>
          ),
        },
        {
          heading: "Не знаете, с чего начать?",
          children: (
            <Col className="sm:items-center overflow-x-auto text-sm">
              <Box
                href="/templates/landing"
                className="justify-center w-full sm:border p-0 sm:p"
              >
                Попробуйте любой шаблон
              </Box>
              <Row className="gap sm:gap-4">
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center sm:border w-full p-0 sm:p">
                    Понравилось?
                  </Box>
                  <Icon name="arrow-down" />
                  <Box
                    href="/auth"
                    className="justify-center w-full sm:border p-0 sm:p"
                  >
                    Зарегистрируйтесь и выберите вашу роль
                  </Box>
                  <Row className="gap sm:gap-4">
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center sm:border w-full p-0 sm:p">
                        Программист или дизайнер?
                      </Box>
                      <Icon name="arrow-down" />
                      <Box href="/profile" className="sm:border p-0 sm:p">
                        Приобретите полный доступ
                        к системе и техподдержку
                      </Box>
                    </Col>
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center sm:border w-full p-0 sm:p">
                        Иной сотрудник?
                      </Box>
                      <Icon name="arrow-down" />
                      <Box
                        href="mailto:bot@equix.ru"
                        className="sm:border p-0 sm:p"
                      >
                        Свяжитесь с нами - мы быстро и недорого создадим для вас
                        любое приложение
                      </Box>
                    </Col>
                  </Row>
                </Col>
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center sm:border w-full p-0 sm:p">
                    Не подходит?
                  </Box>
                  <Icon name="arrow-down" />
                  <Box
                    href="/templates/data"
                    className="sm:border sm:w-56 justify-center p-0 sm:p"
                  >
                    Попробуйте еще!
                  </Box>
                </Col>
              </Row>
            </Col>
          ),
        },
        {
          heading: "Наши преимущества",
          children: <FeaturesSection />,
        },
        {
          heading: "Наши компоненты",
          children: (
            <Row className="flex-wrap">
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
          ),
        },
        {
          heading: "Реализованные проекты",
          children: (
            <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
              {clients.map(({ description, imgSource }, index) => (
                <Card key={index} className="w-full items-start h-full">
                  <img alt="" src={imgSource} className="h-8 w-auto" />
                  <p>{description}</p>
                </Card>
              ))}
            </div>
          ),
        },
        BannerSection,
      ]}
    />
  );
};

export default Page;
