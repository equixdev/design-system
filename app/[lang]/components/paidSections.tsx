import { Box } from "@/equix/components/Box";
import { Code } from "@/equix/components/Code";
import { Col } from "@/equix/components/Flex";
import Image from "next/image";
import { ContactSection } from "./ContactSection";

const resources = [
  {
    href: "https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1",
    name: "Figma",
    src: "/figma.svg",
  },
  {
    href: "https://www.npmjs.com/package/equix",
    name: "Node Package Manager",
    src: "/npm.svg",
  },
  {
    href: "https://github.com/vladpechkin/equix.git",
    name: "GitHub",
    src: "/github.svg",
  },
];

export const paidSections = [
  {
    heading: "Личный кабинет",
    children: (
      <>
        Благодарим вас за приобретение лицензии EQUIX! Ниже находятся все
        инструкции, необходимые для того, чтобы начинать использовать фреймворк
        в своих проектах.
      </>
    ),
  },
  {
    heading: "Все необходимые ресурсы",
    children: (
      <Col className="w-full sm:flex-row">
        {resources.map(({ href, name, src: source }, index) => (
          <Box
            href={href}
            key={index}
            className="w-full border border-inherit items-center p-4"
          >
            <Image
              alt=""
              className="w-[40px] h-[40px]"
              height={60}
              src={source}
              width={60}
            />
            <p className="text-accent">{name}</p>
          </Box>
        ))}
      </Col>
    ),
  },
  {
    heading: "Дизайнерам",
    children: (
      <div>
        EQUIX - полноценный UI-Kit. Чтобы увидеть все, что он в себя включает,
        ознакомьтесь со страницей{" "}
        <Box isInline href="/components">
          Компоненты
        </Box>
        . Чтобы использовать любой компонент или шаблон в своей работе, откройте
        в онлайн-редакторе дизайнов Figma{" "}
        <Box
          isInline
          href="https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1"
        >
          файл EQUIX
        </Box>{" "}
        и сделайте копию файла (функция Duplicate), либо копируйте отдельные его
        части в другой свой файл Figma. Кроме того, настоятельно рекомендуется
        просмотреть все страницы{" "}
        <Box isInline href="/docs">
          документации
        </Box>
        , так как они содержат в себе много подходов, советов и объяснений по
        теме создания интерфейсов.
      </div>
    ),
  },
  {
    heading: "Программистам",
    children: (
      <>
        <div>
          EQUIX - библиотека на языке TypeScript (более продвинутая версия языка
          JavaScript). Для разработки на данной основе необходимо базовое
          понимание технологий:
          <ol>
            <li>1. JavaScript</li>
            <li>2. TypeScript</li>
            <li>3. React.js</li>
          </ol>
          О других технологиях, которые стоит понимать, можно прочитать на
          странице{" "}
          <Box isInline href="/docs/base">
            Устройство EQUIX
          </Box>
          . Чтобы использовать библиотеку для написания кода, потребуется
          установить движок (runtime) языка{" "}
          <Box isInline href="https://nodejs.org/en">
            Node.js
          </Box>
          . Проект (папка), куда вы будете устанавливать EQUIX, должен
          использовать фреймворк{" "}
          <Box isInline href="https://nextjs.org/">
            Next.js
          </Box>
          . Следовательно, нужно либо установить Next на уже существующий сайт
          по, например,{" "}
          <Box
            isInline
            href="https://habr.com/ru/companies/ruvds/articles/442654/"
          >
            данной инструкции
          </Box>
          , либо создать новый проект такой командой в терминале:
        </div>
        <Code>$ npx create-next-app@latest</Code>
        <div>
          Далее нужно перейти в папку созданного проекта и выполнить команду:
        </div>
        <div>
          <Code>$ npm i equix</Code>
        </div>
        <div>
          Готово! Теперь в любом <Code>.ts</Code> или <Code>.tsx</Code> файле
          проекта вы можете использовать шаблоны, компоненты или функции EQUIX
          таким образом:
        </div>
        <Code>{`// CustomComponent.tsx
import Box from "equix"
          
export const CustomComponent => <Box>Текст</Box>`}</Code>
        <div>
          Список всех визуальных составляющих, предоставляемых EQUIX, находится
          на странице{" "}
          <Box isInline href="/components">
            Компоненты
          </Box>
          . Информация по написанию кода, устройству, функциям, логике и прочем
          - во всех последующих страницах документации.
        </div>
      </>
    ),
  },
  { heading: "Нужна техподдержка?", children: <ContactSection /> },
];
