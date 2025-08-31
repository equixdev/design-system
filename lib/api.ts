import fs from "node:fs";
import matter from "gray-matter";
import path from "node:path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";
import { remark } from "remark";

const markdownDirectory = path.join(process.cwd(), "app/markdown");

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
      content: (argument) => ({
        type: "element",
        tagName: "a",
        properties: {
          href: `#${String(argument.properties["id"])}`,
          style: "margin-right: 10px",
        },
        children: [{ type: "text", value: "#" }],
      }),
    });
}

const parser = getParser();

export const getMarkdownFileById = async (id: string) => {
  const realId = id.replace(/\.md$/u, "");
  const fullPath = path.join(markdownDirectory, `${realId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const text = matterResult.content;

  return {
    id,
    realId,
    title: text.split("\n").shift()?.replaceAll("#", ""),
    contentHtml,
    ...matterResult.data,
  };
};

export const getHtmlFromMarkdown = async (markdownString: string) => {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", markdownString), "utf8")
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
};

export const getAllMarkdownFiles = async () =>
  await Promise.all(getMarkdownFiles().map((id) => getMarkdownFileById(id)));
