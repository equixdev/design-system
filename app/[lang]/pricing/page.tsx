'use client';

import { Card, Box } from '@/equix/components/Box';
import { Col } from '@/equix/components/Flex';
import { H1 } from '@/equix/components/Heading';
import { Icon } from '@/equix/components/Icon';
import { LandingLayout } from '@/equix/Landing/LandingLayout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDictionary } from '../useDictionary';

const Page = () => {
  const router = useRouter();

  const { dictionary } = useDictionary();

  const handlePay = async () => {
    const response = await fetch('/api/pay');
    const json = await response.json();

    router.push(json.confirmation.confirmation_url);
  };

  if (!dictionary) return null;

  const features = [
    { key: 'components', icon: 'boxes' },
    { key: 'templates', icon: 'window-stack' },
    { key: 'documentation', icon: 'book' },
    { key: 'tools', icon: 'tools' },
    { key: 'functions', icon: 'braces-asterisk' },
    { key: 'figma', icon: '/figma.svg' },
    { key: 'npm', icon: '/npm.svg' },
    { key: 'githubNpm', icon: '/github.svg' },
    { key: 'githubWebsite', icon: '/github.svg' },
    { key: 'support', icon: 'headset' },
    { key: 'updates', icon: 'arrow-clockwise' },
    { key: 'projects', icon: 'infinity' },
  ];

  return (
    <LandingLayout
      sections={[
        {
          heading: dictionary.pricing.getEverything,
          children: (
            <Col className="items-center w-full gap-4">
              <div className="self-start">
                {dictionary.pricing.subscriptionDescription}
              </div>
              <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
                {features.map(({ key, icon }, index) => (
                  <Card key={index}>
                    {icon.includes('.') ? (
                      <Image
                        height="30"
                        width="30"
                        src={icon}
                        className="h-8 w-8"
                        alt=""
                      />
                    ) : (
                      <Icon name={icon} className="text-accent text-3xl" />
                    )}
                    {
                      dictionary.pricing.features[
                        key as keyof typeof dictionary.pricing.features
                      ]
                    }
                  </Card>
                ))}
              </div>
              <H1>{dictionary.pricing.price}</H1>
              <Box className="border" onClick={handlePay}>
                {dictionary.pricing.purchase}
              </Box>
            </Col>
          ),
        },
      ]}
    />
  );
};

export default Page;
