import { FC } from "react";
import { Col } from "../components/Flex";
import { Section } from "../types";
import { H2 } from "../components/Heading";

export const LandingSection: FC<Section> = (props) => {
  const { heading, children } = props;

  return (
    <Col
      as="section"
      className="w-full justify-center py-8"
      id={heading?.replaceAll(" ", "_")}
    >
      <H2 className="font-semibold text-[24px]">{heading}</H2>
      {children}
    </Col>
  );
};
