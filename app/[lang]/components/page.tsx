'use client';

import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { Box } from '@/equix/components/Box';
import { Row } from '@/equix/components/Flex';
import { H2 } from '@/equix/components/Heading';
import componentsData from './data';
import { useDictionary } from '../useDictionary';

const Page = () => {
  const { dictionary } = useDictionary();

  if (!dictionary) return null;

  return (
    <LandingLayout>
      <H2>{dictionary.docs.components.title}</H2>
      <p className="max-w-[615px]">{dictionary.docs.components.description}</p>
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
};

export default Page;
