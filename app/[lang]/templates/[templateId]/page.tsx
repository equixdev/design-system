import { Box } from '@/equix/components/Box';
import { Row } from '@/equix/components/Flex';
import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { FC } from 'react';
import templatesData from '../data';
import { BannerSection } from '@/app/components/BannerSection';
import { getDictionary } from '@/app/[lang]/dictionaries';

interface Props {
  params: Promise<{ templateId: string; lang: 'en' | 'ru' }>;
}

const Page: FC<Props> = async ({ params }) => {
  const { templateId, lang } = await params;

  const dict = await getDictionary(lang);

  const template = templatesData.find(template => template.id === templateId);

  const otherTemplates = templatesData.filter(
    template => template.id !== templateId
  );

  if (template) {
    const { id, ExampleComponent } = template;

    return (
      <LandingLayout
        sections={[
          {
            heading: `${dict.common.equixTemplate}/${dict.templates[id as keyof typeof dict.templates].name}`,
            children: dict.templates[id as keyof typeof dict.templates].about,
          },
          {
            heading: dict.templatesTryOut.tryOut,
            children: ExampleComponent ? (
              <>
                <p>
                  {dict.templatesTryOut.tryOutDescription.replace(
                    '{templateName}',
                    dict.templates[id as keyof typeof dict.templates].name
                  )}
                </p>
                <ExampleComponent />
              </>
            ) : (
              <>
                <p>
                  {dict.templatesTryOut.tryOutDisabled.replace(
                    '{templateName}',
                    dict.templates[id as keyof typeof dict.templates].name
                  )}
                </p>
                <Row>
                  {otherTemplates.map(({ id }, index) => (
                    <Box
                      className="border"
                      key={index}
                      href={`/templates/${id}`}
                    >
                      EQUIX/
                      {dict.templates[id as keyof typeof dict.templates].name}
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
