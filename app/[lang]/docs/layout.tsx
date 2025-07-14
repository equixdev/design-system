import { BannerSection } from "@/app/components/BannerSection";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { getAllMarkdownFiles } from "@/lib/api";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = async (props) => {
  const { children } = props;
  const posts = await getAllMarkdownFiles();

  return (
    <LandingLayout
      sidebarRoutes={posts.map((post) => ({
        href: `/docs/${post.realId}`,
        label: `${post.title} `,
      }))}
      sections={[BannerSection]}
    >
      {children}
    </LandingLayout>
  );
};

export default Layout;
