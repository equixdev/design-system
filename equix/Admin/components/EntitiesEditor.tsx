"use client"

import { Entity } from "@/equix/types";
import { fetchApi } from "@/equix/utils";
import { FC, useCallback, useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { EntitiesEditorHeader } from "./EntitiesEditorHeader";
import { EntitiesEditorTable } from "./EntitiesEditorTable";
import { getSortedEntities } from "../utils";
import { Box } from "@/equix/components/Box";

interface Props {
  entitiesName: string;
  title?: string;
  entitiesEndpoint?: string | URL;
  entityEndpoint?: URL;
}

export const EntitiesEditor: FC<Props> = (props) => {
  const {
    title,
    entitiesName: initialEntitiesName,
    entitiesEndpoint: initialEntitiesEndpoint = initialEntitiesName as string,
    entityEndpoint,
  } = props;

  const [sortKey, setSortKey] = useState("");
  const [entities, setEntities] = useState<Entity[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState<number>();
  const ENTITIES_PER_PAGE = 20;

  let entitiesName = initialEntitiesName;
  let entitiesEndpoint = initialEntitiesEndpoint;

  if (entitiesName === "newDrivers") {
    entitiesName = "drivers";
    entitiesEndpoint = `drivers?state=NEW`;
  }

  const fetchEntities = useCallback(async () => {
    const res = await fetchApi(
      `${entitiesEndpoint}${
        entitiesEndpoint.toString().includes("?") ? "&" : "?"
      }page=${page.toString()}`
    );

    const json = await res.json();

    setEntities(json.data.results);

    if (json?.data?.total)
      setLimit(Math.ceil(json.data.total / ENTITIES_PER_PAGE));
  }, [entitiesEndpoint, page]);

  useEffect(() => {
    fetchEntities();
  }, [entitiesName, page, fetchEntities]);

  return (
    <div className="p flex flex-col items-center w-full">
      <EntitiesEditorHeader
        title={title}
        entitiesName={entitiesName}
        entitiesEndpoint={entitiesEndpoint}
        fetchData={fetchEntities}
      />
      {entities &&
      entities[0] &&
      getSortedEntities(sortKey, entities).length > 0 ? (
        <EntitiesEditorTable
          entities={entities}
          entitiesName={entitiesName}
          entityEndpoint={entityEndpoint}
          getSortedEntities={() => getSortedEntities(sortKey, entities)}
          setSortKey={setSortKey}
          sortKey={sortKey}
        />
      ) : (
        <Box className="text-gray-400">Ничего не найдено</Box>
      )}
      <Pagination limit={limit} page={page} setPage={setPage} />
    </div>
  );
};
// Пример использования
// <EntitiesEditor
// entitiesName="drivers"
// entitiesEndpoint={`drivers?state=MODERATION`}
// />
