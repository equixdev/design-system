import Link from "next/link";
import { Row } from "./Flex";
import { Bar } from "./Bar";
import { Box } from "./Box";
import { FC, ReactNode, useState } from "react";
import { Route } from "../types";
import { H1 } from "./Heading";
import { Icon } from "./Icon";

interface Props {
  logo: ReactNode;
  routes?: Route[];
  children?: ReactNode;
  appName?: string;
}

export const Header: FC<Props> = (props) => {
  const { logo, routes, children, appName } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Bar
      as="header"
      position="top"
      className="justify-between top-0 left-0 flex-wrap sm:flex-nowrap w-full bg-light dark:bg-dark z-30"
    >
      <H1 className="sr-only">{appName}</H1>
      <Link href="/" aria-label="Home">
        {logo}
      </Link>
      <Box className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Icon
          name={isMenuOpen ? "x-lg" : "list"}
          className="text-2xl leading-none"
        />
      </Box>
      <Row
        as="menu"
        className={`${isMenuOpen ? "" : "hidden"} sm:flex  bg-inherit w-full sm:w-auto h-full flex-col sm:static sm:flex-row`}
      >
        {routes?.map((route, index) => (
          <Box key={index} {...route}>
            {route.label || route.href}
          </Box>
        ))}
        {children}
      </Row>
    </Bar>
  );
};
