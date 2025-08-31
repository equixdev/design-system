import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { Box, Card } from '@/equix/components/Box';
import { getDictionary } from '../dictionaries';

const Page = async ({ params }: { params: Promise<{ lang: 'en' | 'ru' }> }) => {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <LandingLayout
      sections={[
        {
          heading: dict.about.title,
          children: <Card>{dict.about.description}</Card>,
        },
        {
          heading: dict.about.problemTitle,
          children: (
            <Card>
              <p>
                {dict.about.problemText[0]}{' '}
                <Box as="a" href="https://designsystemsclub.ru/" isInline>
                  {dict.about.problemText[1]}
                </Box>
                {dict.about.problemText[2]}
              </p>
            </Card>
          ),
        },
        {
          heading: dict.about.productsTitle,
          children: <Card>{dict.about.productsText}</Card>,
        },
        {
          heading: dict.about.whyUsTitle,
          children: (
            <Card>
              <ul>
                {dict.about.whyUsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          ),
        },
      ]}
    />
  );
};

export default Page;
