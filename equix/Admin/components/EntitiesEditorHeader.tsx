import { Row } from "@/equix/components/Flex";
import { Box } from "@/equix/components/Box";
import { Icon } from "@/equix/components/Icon";
import { Input } from "@/equix/components/Input";
import { capitalize } from "@/equix/utils";
import { FC, useState } from "react";

interface Props {
  title?: string | undefined;
  entitiesName: string;
  entitiesEndpoint: string | URL;
  fetchData: () => void;
}

export const EntitiesEditorHeader: FC<Props> = (props) => {
  const { title, entitiesName, entitiesEndpoint, fetchData } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    if (entitiesEndpoint instanceof URL)
      entitiesEndpoint.searchParams.set("search", searchQuery.toLowerCase());

    fetchData();
  };

  return (
    <Row className="items-center flex-wrap w-full sm:justify-center">
      <h1 className="font-semibold p-2">
        {title || capitalize(entitiesName).replaceAll("_", " ")}
      </h1>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        type="search"
        placeholder="Введите поисковой запрос"
        autoFocus
        onClick={handleClick}
      />
      <Box href={`/${entitiesName.toLowerCase()}/new`}>
        <Icon name="plus-lg" />
        Создать
      </Box>
    </Row>
  );
};
