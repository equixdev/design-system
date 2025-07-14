import { FC } from "react";
import { Row } from "./Flex";
import { Box } from "./Box";
import { Icon } from "./Icon";

interface Props {
  limit?: number | undefined;
  page: number;
  setPage: (value: number) => void;
}

export const Pagination: FC<Props> = (props) => {
  const { limit, page, setPage } = props;

  const isLimitValid = typeof limit === "number" && limit > 0;

  const isNextPagePresent = typeof limit === "number" && page + 1 < limit;

  return !limit || limit > 1 ? (
    <Row>
      {isLimitValid ? <Box>Page:</Box> : undefined}
      {page > 0 && (
        <Box onClick={() => setPage(page - 1)}>
          <Icon name="chevron-left" />
        </Box>
      )}
      {isLimitValid
        ? Array.from(Array.from({ length: limit }), (__, index) => (
            <Box
              key={index}
              onClick={() => setPage(index)}
              className={`justify-center ${page === index ? "focused" : ""}`}
            >
              {index + 1}
            </Box>
          ))
        : undefined}
      {isNextPagePresent ? (
        <Box onClick={() => setPage(page + 1)}>
          <Icon name="chevron-right" />
        </Box>
      ) : undefined}
    </Row>
  ) : undefined;
};
