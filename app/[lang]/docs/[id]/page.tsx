import { getAllMarkdownFiles, getMarkdownFileById } from "@/lib/api";
import { FC } from "react";

interface Props {
  params: { id: string };
}

const Page: FC<Props> = async (props) => {
  const {
    params: { id },
  } = props;
  const { contentHtml } = await getMarkdownFileById(id);

  return (
    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
};

export default Page;

export const generateStaticParams = async () => {
  const posts = await getAllMarkdownFiles();

  return posts.map((post) => ({
    id: post.id,
  }));
};
