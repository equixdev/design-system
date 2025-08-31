import { Box } from "@/equix/components/Box";
import { Row, Col } from "@/equix/components/Flex";
import { GeoMap } from "@/equix/components/GeoMap";
import { Header } from "@/equix/components/Header";
import { Region, Heading } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";
import { Img } from "@/equix/components/Img";
import { Pagination } from "@/equix/components/Pagination";
import { Sidebar } from "@/equix/components/Sidebar";
import { SmsAuthForm } from "@/equix/components/SmsAuthForm";
import { Textarea } from "@/equix/components/Textarea";
import { Video } from "@/equix/components/Video";
import { ComponentsData } from "@/equix/types";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/equix/components/Switch";
import { Code } from "@/equix/components/Code";

const data: ComponentsData = {
  Flex: {
    description: (
      <p>
        Flex - общее название для двух компонентов со схожими функциями и
        использующими в своей основе свойство CSS flexbox. Row - горизонтальный
        контейнер для любого содержимого, Col - вертикальный. Эти компоненты
        должны использоваться повсемество, т.к. интерфейсы в EQUIX основаны на
        четких Flex-контейнерах.
      </p>
    ),
    ExampleComponent: () => (
      <Row>
        <Col>Колонка 1</Col>
        <Col>Колонка 2</Col>
      </Row>
    ),
    usage: `<Row>
    <Col>Колонка 1</Col>
    <Col>Колонка 2</Col>
  </Row>`,
  },
  GeoMap: {
    description: (
      <p>
        GeoMap - компонент для вставки географической карты на страницу. На
        данный момент поддерживается только сервис Google Maps. Чтобы карта
        работала, требуется текстовый ключ apiKey, который можно получить по
        инструкции{" "}
        <Box
          isInline
          href="https://developers.google.com/maps/documentation/javascript/get-api-key"
        >
          на сайте Google
        </Box>
        . Map поддерживает отображение маркеров, каждый из которых имеет
        свойства onClick (действие по нажатию), coordinates (позицию, широту и
        долготу в числовой форме), title (название) и iconSrc (изображение для
        маркера, если стандартное не устраивает).
      </p>
    ),
    ExampleComponent: () => (
      <GeoMap
        apiKey={process.env["API_KEY"] || ""}
        center={{ lat: 50, lng: 50 }}
        zoom={10}
      />
    ),
    usage: `<GeoMap
    apiKey={process.env["API_KEY"] || ""}
    center={{ lat: 50, lng: 50 }}
    zoom={10}
  />`,
  },
  Header: {
    description: (
      <p>
        Header - верхняя навигационная панель, присутствующая практически на
        любой странице и содержащая в себе список ссылок, кнопок, полей ввода и
        других элементов. Используется для брендинга и основной навигации
        пользователя между большими разделами приложения или секциями одной
        страницы. В случае, если страниц и/или кнопок требуется больше, чем
        умещается, нужно использовать компонент <Code>Sidebar</Code>.
      </p>
    ),
    ExampleComponent: () => (
      <Header
        appName={"Github"}
        logo={<Image src="/github.svg" alt="" width={50} height={50} />}
        routes={[{ href: "/", label: "Главная" }]}
      />
    ),
    usage: `<Header
        appName={"Github"}
        logo={<Image src="/github.svg" alt="" width={40} height={40} />}
        routes={[{ href: "/", label: "Главная" }]}
      />`,
  },
  Heading: {
    description: (
      <p>
        Heading - заголовок. На данный момент файл компонента включает в себя
        компоненты <Code>Heading</Code> и <Code>Region</Code>. Первый из них -
        т.н. "умный компонент" - заголовок, сам понимающий, какого уровня
        вложенности он должен быть (h1, h2, ..., h5 и т.д.). Правильная иерархия
        вложенных заголовков необходима для понятно пользователю навигации по
        страницам, а также для людей с ограниченными возможностями. Второй
        компонент, регион, - контейнер, в котором заголовок и работает. Для
        исправной работы все секции страницы с любым уровнем вложенности должны
        использовать компонент региона. Также, для обратной совместимости,
        компонент экспортирует обычные заголовки - H1, H2, H3. Более трех
        уровней не рекомендуется, поэтому их нет. Если ваша страница требует
        больше, то дробите ее на несколько.
      </p>
    ),
    ExampleComponent: () => (
      <Region>
        <Heading>Заголовок</Heading>
      </Region>
    ),
    usage: `<Region>
    <Heading>Заголовок</Heading>
  </Region>`,
  },
  Icon: {
    description: (
      <p>
        Icon, иконка, - компонент-прослойка для получения иконок из
        взаимодействия с библиотекой Bootstrap Icons, на которой по умолчанию
        завязан EQUIX. Достаточно найти{" "}
        <Box isInline href="https://icons.getbootstrap.com/">
          на сайте библиотеки
        </Box>{" "}
        нужное изображение и прописать его название (например, search) в
        аттрибут <Code>name</Code>.
      </p>
    ),
    ExampleComponent: () => <Icon name="search" />,
    usage: `<Icon name="search" />`,
  },
  Img: {
    description: (
      <p>
        Img, изображение - компонент для вставки на страницу интерактивных (не
        декоративных) картинок во всех поддерживаемых браузером форматах. В
        идеале, все изображения на странице должны иметь возможность быть
        приближенными. Именно эту функцию и реализует компонент Img в EQUIX.
        Если необходимо вставить иконку, мелкое неважное изображение, которое не
        подразумевает приближения, то используйте встроенный в Next.js компонент
        <Code>&lt;Image&gt;</Code>, импортируемый из библиотеки next/image.
      </p>
    ),
    ExampleComponent: () => <Img src="/intro.png" height={200} width={200} />,
    usage: `<Img src="/intro.png" height={200} width={200} />`,
  },
  Pagination: {
    description: (
      <p>
        Pagination - компонент для реализации пагинации, то есть разбития
        списка, состоящего из большого количества элементов (например, товаров,
        документов или телефонных контактов), на подстраницы.
      </p>
    ),
    ExampleComponent: () => {
      const [page, setPage] = useState(0);

      return <Pagination page={page} setPage={setPage} limit={5} />;
    },
    usage: `const [page, setPage] = useState(0);

      return <Pagination page={page} setPage={setPage} limit={5} />;`,
  },
  PasswordProvider: {
    description: (
      <p>
        Провайдер пароля - компонент-обертка, в который должен быть завернут
        layout, если вы хотите, чтобы сайт загружался только после ввода
        текстового пароля. Пароль статичный, задается самому провайдеру и больше
        не меняется. Браузер запоминает введенный код и не требует его повторно.
        Данный функционал подходит для сайтов и приложений, доступ к которым
        должен быть ограничен, но при этом в которых по каким-то причинам не
        может быть реализована нормальная система авторизации/регистрации и
        входа. Для обычных сайтов и приложений с авторизацией используйте строго
        SmsAuthForm и другие компоненты и провайдеры.
      </p>
    ),
    ExampleComponent: () => (
      <Box href="/test/passwordProvider">
        Перейти на страницу, использующую PasswordProvider
      </Box>
    ),
    usage: `<PasswordProvider
    password="12345678"
    message="Введите пароль. Подсказка: 12345678."
  >
    <ErrorPage />
  </PasswordProvider>`,
  },
  Sidebar: {
    description: (
      <p>
        Sidebar - боковая навигационная панель, содержащая в себе список ссылок.
        Обязательно используется в случае наличия большого количества страниц на
        сайте, чтобы не нагружать ссылками Header и другие панели.
      </p>
    ),
    ExampleComponent: () => (
      <Sidebar routes={[{ href: "/", label: "Главная сайта" }]} />
    ),
    usage: `<Sidebar routes={[{ href: "/", label: "Главная сайта" }]} />`,
  },
  SmsAuthForm: {
    description: (
      <p>
        SmsAuthForm - форма для авторизации (входа/регистрации) с помощью
        СМС-сообщения. Работает с Bearer-токенами accessToken и refreshToken, а
        данные хранит в localStorage. Состоит из двух этапов - ввода номера
        телефона и ввода кода, который на этот номер приходит, после чего
        компонент по умолчанию перенаправляет на главную страницу.
      </p>
    ),
    ExampleComponent: () => (
      <SmsAuthForm
        codeLength={4}
        postPhoneNumber={() => fetch("")}
        postConfirmationCode={() => fetch("")}
        handleSuccessfulConfirmation={() => ""}
      />
    ),
    usage: `<SmsAuthForm
    codeLength={4}
    postPhoneNumber={() => fetch("")}
    postConfirmationCode={() => fetch("")}
  />`,
  },
  Switch: {
    description: (
      <p>
        Switch - переключатель, компонент для выбора между двумя вариантами - да
        (истина) или нет (ложь).
      </p>
    ),
    ExampleComponent: () => {
      const [isAgree, setIsAgree] = useState(false);

      return (
        <Switch
          label="Я согласен с политикой конфиденциальности"
          value={isAgree}
          onChange={setIsAgree}
        />
      );
    },
    usage: `<Switch
          label="Я согласен с политикой конфиденциальности"
          value={isAgree}
          onChange={setIsAgree}
        />`,
  },
  Textarea: {
    description: (
      <p>
        Textarea, текстовая зона, - поле для ввода текста, используемое в тех
        случаях, когда вводимый текст длиннее 80 символов. В противном случае
        используется строго компонент <Box href="/components/Input">Input</Box>.
        Текстовая зона отличается от него только высотой в несколько строк, а не
        в одну, и возможностью изменения размеров по вертикали, либо
        автоматически, либо в ручную мышью.
      </p>
    ),
    ExampleComponent: () => {
      const [value, setValue] = useState("");

      return (
        <Textarea label="Тестовое поле" value={value} onChange={setValue} />
      );
    },
    usage: `<Textarea label="Тестовое поле" value={value} onChange={setValue} />`,
  },
  Video: {
    description: (
      <p>
        Video - компонент для вставки видео на страницу. Требует заданной высоты
        и ширины контейнера, а также ссылку на файл-источник.
      </p>
    ),
    ExampleComponent: () => <Video height={600} width={400} src="/test.mp4" />,
    usage: `<Video height={600} width={400} src="/test.mp4" />`,
  },
};

export default data;
