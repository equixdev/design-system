'use client';

import { FC } from 'react';
import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { H2, H3 } from '@/equix/components/Heading';
import { renderToString } from 'react-dom/server';
import { Code } from '@/equix/components/Code';
import componentsData from '../data';
import { useDictionary } from '../../useDictionary';

interface Props {
  params: { componentName: string };
}

const Page: FC<Props> = props => {
  const {
    params: { componentName },
  } = props;

  const { dictionary } = useDictionary();

  type ComponentName = keyof typeof componentsData;

  const component = componentsData[componentName as ComponentName];

  if (!dictionary) return null;

  if (component) {
    const { description, ExampleComponent, usage } = component;

    return (
      <LandingLayout>
        <H2>{componentName}</H2>
        <p>{description}</p>
        <H3>{dictionary.docs.components.code}</H3>
        <Code>{usage}</Code>
        {ExampleComponent ? (
          <>
            <H3>{dictionary.docs.components.result}</H3>
            <ExampleComponent />
          </>
        ) : undefined}
        {ExampleComponent ? (
          <>
            <H3>{dictionary.docs.components.howItWorks}</H3>
            <Code>{renderToString(<ExampleComponent />)}</Code>
          </>
        ) : undefined}
      </LandingLayout>
    );
  }

  return undefined;
};

export default Page;
