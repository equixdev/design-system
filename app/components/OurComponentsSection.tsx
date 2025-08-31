'use client';

import { Row } from '@/equix/components/Flex';
import { Box } from '@/equix/components/Box';
import componentsData from '@/app/[lang]/components/data';

export function OurComponentsSection() {
  return (
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
  );
}
