"use client";

import { Bar } from "@/equix/components/Bar";
import { Box } from "@/equix/components/Box";
import {
  DarkThemeProvider,
  DarkThemeToggle,
} from "@/equix/components/DarkThemeProvider";
import { Data } from "@/equix/components/Data";
import { Details } from "@/equix/components/Details";
import { Dialog } from "@/equix/components/Dialog";
import { ConfirmationDialog } from "@/equix/components/Dialog/ConfirmDialog";
import { Dropzone } from "@/equix/components/Dropzone";
import { Input } from "@/equix/components/Input";
import { ComponentsData } from "@/equix/types";
import { useState } from "react";
import part1 from "./part1";
import part2 from "./part2";
import { Code } from "@/equix/components/Code";

const componentsData: ComponentsData = {
  Dialog: {
    description: (
      <p>
        Dialog - всплывающее диалоговое окно, стандартный способ получения
        ответа от пользователя. Оно всегда имеет заголовок и может иметь любое
        наполнение. Также диалог может быть закрываемым (пользователь может в
        любой момент отменить взаимодействие, выйти из диалога и вернуться назад
        по нажатию в на кнопку выхода или клавишу <Code>Escape</Code> на
        клавиатуре), или не быть таковым, заставляя пользователя принять решение
        и выбрать одно из действий.
      </p>
    ),
    ExampleComponent: () => {
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <>
          <Box onClick={() => setIsDialogOpen(true)}>
            Нажми на меня чтобы открыть диалог
          </Box>
          <Dialog
            isOpen={isDialogOpen}
            title="Тестовый диалог"
            close={() => setIsDialogOpen(false)}
          >
            Текст диалога
          </Dialog>
        </>
      );
    },
    usage: `<Dialog
    isOpen={isOpen}
    title="Тестовый диалог"
    close={() => setIsOpen(false)}
  >
    Текст диалога
  </Dialog>`,
  },
  ConfirmationDialog: {
    description: (
      <p>
        ConfirmationDialog - диалог подтверждения действия. Является
        разновидностью обычного компонента Dialog. Он предназначен для более
        простых действий, поэтому не имеет отдельного от основного текста
        заголовка, а также не принимает дочерние компоненты. Внутренний текст -
        просто строка. Диалог подтверждения можно закрыть только выбрав на одно
        из двух действий - одно подтверждающее, второе - закрывающее диалог и
        откатывающее пользователя на предыдущий этап.
      </p>
    ),
    ExampleComponent: () => {
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <>
          <Box onClick={() => setIsDialogOpen(true)}>
            Нажми на меня чтобы открыть диалог
          </Box>
          <ConfirmationDialog
            isOpen={isDialogOpen}
            description="Вы уверены, что хотите читать этот текст?"
            close={() => setIsDialogOpen(false)}
            confirmAction={() => setIsDialogOpen(false)}
          />
        </>
      );
    },
    usage: `<ConfirmationDialog
    isOpen={isDialogOpen}
    description="Вы уверены, что хотите читать этот текст?"
    close={() => setIsDialogOpen(false)}
    confirmAction={() => setIsDialogOpen(false)}
  />`,
  },
  Dropzone: {
    description: (
      <p>
        Dropzone - поле ввода для загрузки файлов. Осуществляется оно
        перетаскиванием файла/файлов на поле или выбором файла/файлов с помощью
        файлового менеджера устройства.
      </p>
    ),
    ExampleComponent: () => {
      const [, setVideo] = useState("");

      return (
        <Dropzone
          url="google.com"
          label="Clip"
          isRequired
          filetype="video"
          value="test.mp4"
          onChange={(value) => setVideo(value)}
        />
      );
    },
    usage: `<Dropzone
          url="google.com"
          label="Clip"
          isRequired
          filetype="video"
          value="test.mp4"
          onChange={(value) => setVideo(value)}
        />`,
  },
  Input: {
    description: (
      <p>
        &lt;input&gt; - инпут, поле ввода - основной интерактивный элемент в
        HTML помимо &lt;a&gt; и &lt;button&gt;. В зависимости от аттрибута{" "}
        <Code>type</Code> он используется для редактирования текста, даты,
        выбора одного или нескольких значений из списка, переключения между
        опциями и так далее. Реализация Input в EQUIX лишь стилизует его и
        добавляет дополнительные аргументы для более простого взаимодействия.
      </p>
    ),
    ExampleComponent: () => {
      const [value, setValue] = useState("");

      return <Input label="Тестовое поле" value={value} onChange={setValue} />;
    },
    usage: `<Input label="Тестовое поле" value={value} onChange={setValue} />`,
  },
  Bar: {
    description: (
      <p>
        Bar - полоса, доска, панель - ограниченный размерами и отделенный от
        основного содержимого страницы контейнер для однотипного контента
        (например, кнопок или ссылок), который может быть либо горизонтальным,
        либо вертикальным. От View панель отличается тем, что, как правило,
        отделена бордером или другой границей, занимает небольшую часть экрана,
        имеет фиксированную высоту (в случае горизонтальной) или ширину (в
        случае вертикальной) и не подразумевает возможность скроллинга
        (прокручивания страницы). Самые частые применения панели - хедер вверху
        сайта, сайдбар сбоку для навигации и зона для ввода и отправки сообщения
        в мессенджерах.
      </p>
    ),
    ExampleComponent: () => {
      const [messageText, setMessageText] = useState("");

      return (
        <Bar position="bottom">
          <Input
            placeholder="Введите текст сообщения"
            value={messageText}
            onChange={setMessageText}
          />
          <Box onClick={() => setMessageText("")}>Отправить</Box>
        </Bar>
      );
    },
    usage: `<Bar position="bottom">
    <Input
      placeholder="Введите текст сообщения"
      value={messageText}
      onChange={setMessageText}
    />
    <Box onClick={() => setMessageText("")}>Отправить</Box>
  </Bar>`,
  },
  Box: {
    description: (
      <p>
        Ядро EQUIX - &quot;умный&rdquo; компонент Box, коробка. Он предназначен
        для упрощения написания HTML/JSX разметки, чтобы это могли делать даже
        люди, почти не знающие HTML. Box автоматически функционирует как
        интерактивные элементы <Code>a</Code>, <Code>button</Code> или статичные
        элементы div, p и любые другие, и все это в зависимости от входных
        данных. Достаточно просто написать &lt;Box&gt;, и в зависимости от
        наличия атрибутов onClick, href, текста, иконки внутри, компонент примет
        необходимую форму - станет кнопкой, ссылкой, параграфом, секцией и так
        далее, сохраняя при этом отступы и прочие стили.
      </p>
    ),
    ExampleComponent: () => <Box onClick={() => "test"}>Кнопка</Box>,
    usage: `<Box onClick={() => "test"}>Кнопка</Box>`,
  },
  Code: {
    description: (
      <p>
        Code - компонент для вставки кода на страницу. Отличается от встроенного
        в HTML тэга только стилями. Планируется введение подсветки синтаксиса.
      </p>
    ),
    ExampleComponent: () => <Code>const a = 1;</Code>,
    usage: `<Code>const a = 1;</Code>`,
  },
  DarkThemeProvider: {
    description: (
      <p>
        Провайдер темной темы - компонент-обертка, в который должен быть
        завернут layout, если вы хотите, чтобы в нем была реализована поддержка
        светлой и тёмной тем. При использовании данной обертки по умолчанию
        темная тема включается тогда, когда в операционной системе или браузере
        пользователя выбран темный режим, и наоборот - при светлом режиме
        активна только светлая тема. Помимо самой обертки{" "}
        <Code>DarkThemeProvider</Code> файл экспортирует{" "}
        <Code>DarkThemeToggle</Code> - кнопку для ручного переключения тем,
        которая позволяет игнорировать настройки операционной системы или
        браузера.
      </p>
    ),
    ExampleComponent: () => (
      <DarkThemeProvider>
        <DarkThemeToggle />
      </DarkThemeProvider>
    ),
    usage: `<DarkThemeProvider>
    <DarkThemeToggle />
  </DarkThemeProvider>`,
  },
  Data: {
    description: (
      <p>
        Data - компонент для отображения единицы данных. Например, на экране
        статистики, где есть десяток разных величин, каждая из них, в случае,
        если не должна быть интерактивно и/или редактируемой, должна быть
        отображена с помощью этого компонента.
      </p>
    ),
    ExampleComponent: () => (
      <Data label="Количество сделанных заказов" value={10} />
    ),
    usage: `<Data label="Количество сделанных заказов" value={10} />`,
  },
  Details: {
    description: (
      <p>
        Details - т.н. 'аккордеон', 'деталка', - элемент интерфейса,
        раскрывающийся и скрывающийся назад по нажатию на заголовок. Заголовок
        является текстом, а содержание - чем угодно. По умолчанию аккордеон
        свернут, но это поведение можно изменить аттрибутом open.
      </p>
    ),
    ExampleComponent: () => (
      <Details summary="Тестовый аккордеон">Текст внутри него</Details>
    ),
    usage: `<Details summary="Тестовый аккордеон">Текст внутри него</Details>`,
  },
  // DragNDrop: {
  //   description: <p>TODO`,
  //   ExampleComponent: () => <></>,
  //   usage: ``,
  // },
  ErrorPage: {
    description: (
      <p>
        ErrorPage - страница, возникающая перед пользователем в случае ошибки в
        работе сайта или при переходе на несуществующий адрес. Может быть
        использована вручную, например, как заглушка для временно недоделанной
        страницы.
      </p>
    ),
    ExampleComponent: () => (
      <Box href="/nonexistant">
        Нажмите чтобы перейти на несуществующую страницу
      </Box>
    ),
    usage: `<ErrorPage />`,
  },
  ...part1,
  ...part2
};

export default componentsData;
