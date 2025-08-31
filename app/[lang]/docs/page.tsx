import { getDictionary } from '../dictionaries';
import { Col } from '@/equix/components/Flex';
import { H2 } from '@/equix/components/Heading';

const Page = async ({ params }: { params: Promise<{ lang: 'en' | 'ru' }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Col>
      <H2>{dict.docs.title}</H2>
    </Col>
  );
};

export default Page;
