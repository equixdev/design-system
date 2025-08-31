'use client';

import { Card } from '@/equix/components/Box';
import { Row } from '@/equix/components/Flex';
import { Icon } from '@/equix/components/Icon';
import data from '../data.json';
import { useDictionary } from '../useDictionary';

export const FeaturesSection = () => {
  const { features: featuresData } = data;

  const { dictionary } = useDictionary();

  const features = dictionary?.features;

  return (
    <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
      {Object.keys(featuresData).map((feature, index) => {
        const featureData =
          featuresData?.[feature as keyof typeof featuresData];

        if (!featureData) return null;

        const featureDictionary = features?.[feature as keyof typeof features];

        if (!featureDictionary) return null;

        return (
          <Card key={index} href={featureData.href}>
            <Row className="items-center text-accent">
              <Icon name={featureData.iconName} className="text-2xl" />
              {featureDictionary.name}
            </Row>
            <p className="line-clamp-4">{featureDictionary.description}</p>
          </Card>
        );
      })}
    </div>
  );
};
