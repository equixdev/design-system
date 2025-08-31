'use client';

import { Card, Box } from '@/equix/components/Box';
import { Row } from '@/equix/components/Flex';
import { useDictionary } from '../useDictionary';

export const ContactSection = async () => {
  const { dictionary } = useDictionary();

  if (!dictionary) return null;

  return (
    <Row className="flex-wrap sm:flex-nowrap">
      <Card className="w-full">
        {dictionary.contact.orderCallback}
        <Box
          onClick={() => alert(dictionary.contact.callbackReady)}
          className="border self-start"
        >
          {dictionary.contact.orderCallbackButton}
        </Box>
      </Card>
      <Card className="w-full">
        {dictionary.contact.contactDirectly}
        <Row className="flex-wrap sm:flex-nowrap">
          <Box href="tel:+79613893822" className="border">
            {dictionary.contact.phone}
          </Box>
          <Box href="mailto:bot@equix.ru" className="border">
            {dictionary.contact.email}
          </Box>
          <Box href="https://t.me/iloplik" className="border">
            {dictionary.contact.telegram}
          </Box>
        </Row>
      </Card>
    </Row>
  );
};
