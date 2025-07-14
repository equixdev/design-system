import { Card, Box } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";

export const ContactSection = () => (
    <Row className="flex-wrap sm:flex-nowrap">
    <Card className="w-full">
      Вы можете заказать обратную связь, и на основе тех данных, что вы
      заполнили в личном кабинете, мы оперативно с вами свяжемся
      <Box
        onClick={() => alert("Готово! Ожидайте ответа")}
        className="border self-start"
      >
        Заказать звонок
      </Box>
    </Card>
    <Card className="w-full">
      Также вы можете не ждать и самостоятельно с нами связаться для
      консультации по EQUIX или оценки вашего проекта
      <Row className="flex-wrap sm:flex-nowrap">
        <Box href="tel:+79613893822" className="border">
          Телефон
        </Box>
        <Box href="mailto:bot@equix.ru" className="border">
          Эл. почта
        </Box>
        <Box href="https://t.me/iloplik" className="border">
          Telegram
        </Box>
      </Row>
    </Card>
  </Row>
);
