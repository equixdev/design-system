# Использование Markdown

Markdown - язык гипертекстовой разметки. Он крайне прост для понимания, но позволяет создавать страницы не из сплошного текста, а с заголовками, списками, жирным текстом и так далее. Создавать такие текста можно в любом markdown-редакторе. Написанный текст достаточно сохранить в файл с названием на латинице (кириллица может вызывать проблемы на ОС Windows) и окончанием `.md`, например, `hello.md`. EQUIX поддерживает несколько вариантов интеграции markdown-файлов в сайт:

## Страницы .mdx

Фреймворк Next.js, на котором основан EQUIX, поддерживает создание страниц с расширением `.mdx` вместо `.jsx` или `.tsx`. Такая mdx страница может содержать JSX-разметку, вставленную прямо между словами или параграфами простого markdown-текста. Чтобы включить поддержку `.mdx`-страниц, выполните следующую команду:  

```
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

Создать файлы с указанным названием и содержимым:

```
// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
})

export default withMDX(nextConfig)
```

```
// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
     h1: ({ children }) => (
      <h1>{children}</h1>
    ),
    ...components,
  }
}
```

...после чего импортировать файл в любую страницу:

```
app/*/page.tsx
import File from '@/markdown/file.mdx'

export default function Page() {
  return <File />
}
```

## Статичные .md файлы

Также вы можете использовать статично размещенные среди файлов проекта .md-файлы. Чтобы добавлять свои разделы сайта, состоящие из таких файлов, помещайте их в папку /app/markdown, после чего создайте по необходимому пути (например, если вы хотите хранить новости по пути типа site.com/news/novost-1, то путь в приложении будет app/news/\[mdFileName\]/page.tsx) следующий файл:

```
// app/*/[mdFileName]/page.tsx
import { getAllMarkdownFiles, getMarkdownFileById } from "@/lib/api";

export default async function MarkdownPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { contentHtml } = await getMarkdownFileById(id);
  return (
    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}

export async function generateStaticParams() {
  const markdowns = await getAllMarkdownFiles();

  return markdowns.map((markdown) => ({
    id: markdowns.id,
  }));
}
```

Также создайте следующий файл:

```
// lib/api.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import html from "remark-html";
import { remark } from "remark";

const markdownDirectory = path.join(process.cwd(), "markdown");

function getMarkdownFiles() {
  return fs.readdirSync(markdownDirectory);
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: "element",
        tagName: "a",
        properties: {
          href: `#${String(arg.properties?.id)}`,
          style: "margin-right: 10px",
        },
        children: [{ type: "text", value: "#" }],
      }),
    });
}

const parser = getParser();

export async function getMarkdownFileById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = path.join(markdownDirectory, `${realId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    realId,
    title: matterResult.content.substring(
      1,
      matterResult.content.indexOf("\n")
    ),
    contentHtml,
    ...matterResult.data,
  };
}

export async function getHtmlFromMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", string_), "utf8")
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
}

export async function getAllMarkdownFiles() {
  const markdowns = await Promise.all(
    getMarkdownFiles().map((id) => getMarkdownFileById(id))
  );
  return markdowns;
}
```
