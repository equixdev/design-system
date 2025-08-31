import Image from 'next/image';
import { LandingPage } from '@/equix/Landing/LandingPage';
import { Box, Card } from '@/equix/components/Box';
import { Col, Row } from '@/equix/components/Flex';
import { Icon } from '@/equix/components/Icon';
import templatesData from './templates/data';
import { BannerSection } from '../components/BannerSection';
import data from './data.json';
import { FeaturesSection } from './components/FeaturesSection';
import { getDictionary } from './dictionaries';
import { OurComponentsSection } from '../components/OurComponentsSection';

const Page = async ({ params }: { params: Promise<{ lang: 'en' | 'ru' }> }) => {
  const { clients } = data;
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <LandingPage
      sections={[
        {
          heading: dict.landing.sections.tryOurSolutions,
          children: (
            <div className="w-full gap sm:grid grid-cols-2">
              {templatesData.map(({ id }, index) => (
                <Card href={`/templates/${id}`} key={index} className="w-full">
                  <Image
                    src={`/templates/${id}.jpg`}
                    width="320"
                    height="100"
                    className="rounded border-inherit w-full sm:h-[250px] object-cover"
                    alt=""
                  />
                  <p className="text-accent">{`EQUIX/${dict.templates[id as keyof typeof dict.templates].name}`}</p>
                  <p>
                    {
                      dict.templates[id as keyof typeof dict.templates]
                        .description
                    }
                  </p>
                </Card>
              ))}
            </div>
          ),
        },
        {
          heading: dict.landing.sections.dontKnowWhereToStart,
          children: (
            <Col className="sm:items-center overflow-x-auto text-sm">
              <Box
                href="/templates/landing"
                className="justify-center w-full sm:border p-0 sm:p"
              >
                {dict.landing.flow.tryAnyTemplate}
              </Box>
              <Row className="gap sm:gap-4">
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center sm:border w-full p-0 sm:p">
                    {dict.landing.flow.likedIt}
                  </Box>
                  <Icon name="arrow-down" />
                  <Box
                    href="/auth"
                    className="justify-center w-full sm:border p-0 sm:p"
                  >
                    {dict.landing.flow.registerAndChooseRole}
                  </Box>
                  <Row className="gap sm:gap-4">
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center sm:border w-full p-0 sm:p">
                        {dict.landing.flow.programmerOrDesigner}
                      </Box>
                      <Icon name="arrow-down" />
                      <Box href="/profile" className="sm:border p-0 sm:p">
                        {dict.landing.flow.buyFullAccess}
                      </Box>
                    </Col>
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center sm:border w-full p-0 sm:p">
                        {dict.landing.flow.otherEmployee}
                      </Box>
                      <Icon name="arrow-down" />
                      <Box
                        href="mailto:bot@equix.ru"
                        className="sm:border p-0 sm:p"
                      >
                        {dict.landing.flow.contactUs}
                      </Box>
                    </Col>
                  </Row>
                </Col>
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center sm:border w-full p-0 sm:p">
                    {dict.landing.flow.notSuitable}
                  </Box>
                  <Icon name="arrow-down" />
                  <Box
                    href="/templates/data"
                    className="sm:border sm:w-56 justify-center p-0 sm:p"
                  >
                    {dict.landing.flow.tryMore}
                  </Box>
                </Col>
              </Row>
            </Col>
          ),
        },
        {
          heading: dict.landing.sections.ourAdvantages,
          children: <FeaturesSection />,
        },
        {
          heading: dict.landing.sections.ourComponents,
          children: <OurComponentsSection />,
        },
        {
          heading: dict.landing.sections.realizedProjects,
          children: (
            <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
              {Object.keys(clients).map((client, index) => {
                const clientData = clients[client as keyof typeof clients];

                if (!clientData) return null;

                return (
                  <Card key={index} className="w-full items-start h-full">
                    <img
                      alt=""
                      src={clientData.imgSource}
                      className="h-8 w-auto"
                    />
                    <p>{dict.clients[client as keyof typeof dict.clients]}</p>
                  </Card>
                );
              })}
            </div>
          ),
        },
        BannerSection,
      ]}
    />
  );
};

export default Page;
