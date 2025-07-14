"use client";

import { FC } from "react";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { H2, H3 } from "@/equix/components/Heading";
import { renderToString } from "react-dom/server";
import { Code } from "@/equix/components/Code";
import componentsData from "../data";

interface Props {
  params: { componentName: string };
}

const Page: FC<Props> = (props) => {
  const {
    params: { componentName },
  } = props;

  type ComponentName = keyof typeof componentsData;

  const component = componentsData[componentName as ComponentName];

  if (component) {
    const { description, ExampleComponent, usage } = component;

    return (
      <LandingLayout>
        <H2>{componentName}</H2>
        <p>{description}</p>
        <H3>Код</H3>
        <Code>{usage}</Code>
        {ExampleComponent ? (
          <>
            <H3>Результат</H3>
            <ExampleComponent />
          </>
        ) : undefined}
        {ExampleComponent ? (
          <>
            <H3>Как это устроено</H3>
            <Code>{renderToString(<ExampleComponent />)}</Code>
          </>
        ) : undefined}
      </LandingLayout>
    );
  }

  return undefined;
};

export default Page;
