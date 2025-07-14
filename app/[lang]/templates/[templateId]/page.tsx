"use client";

import { Box } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { FC } from "react";
import templatesData from "../data";
import { BannerSection } from "@/app/components/BannerSection";

interface Props {
  params: { templateId: string };
}

const Page: FC<Props> = (props) => {
  const {
    params: { templateId },
  } = props;

  const template = templatesData.find((template) => template.id === templateId);

  const otherTemplates = templatesData.filter(
    (template) => template.id !== templateId
  );

  if (template) {
    const { name, about, ExampleComponent } = template;

    return (
      <LandingLayout
        sections={[
          {
            heading: `Шаблон EQUIX/${name}`,
            children: about,
          },
          {
            heading: "Попробовать",
            children: ExampleComponent ? (
              <>
                <p>
                  Ниже находятся интерактивные редактор кода и маленькая копия
                  этого сайта, созданная этим кодом, который вы можете
                  редактировать и в режиме реального времени видеть, как в
                  EQUIX/{name} вносятся изменения.
                </p>
                <ExampleComponent />
              </>
            ) : (
              <>
                <p>
                  EQUIX/{name} все еще находится в разработке, поэтому сейчас, к
                  сожалению, его попробовать пока нельзя. Однако, другие шаблоны
                  уже готовы:
                </p>
                <Row>
                  {otherTemplates.map(({ id, name }, index) => (
                    <Box
                      className="border"
                      key={index}
                      href={`/templates/${id}`}
                    >
                      EQUIX/{name}
                    </Box>
                  ))}
                </Row>
              </>
            ),
          },
          BannerSection,
        ]}
      />
    );
  }

  return undefined;
};

export default Page;
