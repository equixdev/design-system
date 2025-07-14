# Локализация

В EQUIX по умолчанию включена [локализация силами Next.js](https://nextjs.org/docs/app/building-your-application/routing/internationalization). Конфигурация стандартная.

1.  В корне проекте должна быть папка с json-файлами переводов, по умолчанию она называется dictionaries
2.  В этой папке должно быть на каждый поддерживаемый язык по файлу с именем вроде ru.json, en.json и т.д.
3.  Все страницы сайта должны быть помещены в субдиректорию app/\[lang\]
4.  Где-либо в проекте должен находиться код хука, позволяющего получать доступ к словарям из любого файла:

    ````
    // /app/[lang]/dictionaries.ts
    const dictionaries = {
    en: async () => {
    const dictionary = await import("@/dictionaries/en.json");

            return dictionary.default;

        },
        ru: async () => {
        const dictionary = await import("@/dictionaries/ru.json");

            return dictionary.default;

        },
        };

        type Locale = keyof typeof dictionaries;

        export const getDictionary = async (locale: string) =>
        dictionaries[locale as Locale]();
        ```
    ````

Опционально, можно настроить строгий роутинг с использованием локалей, т.е. чтобы переход по ссылке, например `/blog`, перенаправлялся на `/en/blog` без указания языка в `href` этой ссылки. Это делается [с помощью middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware):

```
// /middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = ["ru"];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next).*)"],
};
```
