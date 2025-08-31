import { Box } from "@/equix/components/Box";
import { Icon } from "@/equix/components/Icon";
import { Entity } from "@/equix/types";
import { capitalize } from "@/equix/utils";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  getNonHiddenAndNonCollapsedEntityEntries,
  renderValue,
} from "../utils";

interface Props {
  getSortedEntities: () => Entity[];
  entities: Entity[];
  sortKey: string;
  setSortKey: (value: string) => void;
  entityEndpoint?: URL | undefined;
  entitiesName: string;
}

export const EntitiesEditorTable: FC<Props> = (props) => {
  const {
    getSortedEntities,
    entities,
    sortKey,
    setSortKey,
    entityEndpoint,
    entitiesName,
  } = props;
  const router = useRouter();

  const handleEditClick = (id: string) => {
    router.replace(
      entityEndpoint ? entityEndpoint.toString() : `/${entitiesName}/${id}`
    );
    router.refresh();
  };

  return (
    <table>
      <thead>
        <tr>
          {entities[0] &&
            getNonHiddenAndNonCollapsedEntityEntries(
              entities[0],
              entitiesName
            ).map(([key], index) => (
              <td
                key={index}
                className="p font-semibold"
                onClick={() => setSortKey(key)}
              >
                <span className="flex items-center gap">
                  {capitalize(key).replaceAll(/([a-z])([A-Z])/u, "$1 $2")}
                  {sortKey === key && <i className="bi bi-sort-down-alt"></i>}
                </span>
              </td>
            ))}
          <td className="p font-semibold">Actions</td>
        </tr>
      </thead>
      <tbody>
        {getSortedEntities().map((entity, entityIndex) => (
          <tr key={entityIndex}>
            {getNonHiddenAndNonCollapsedEntityEntries(entity, entitiesName).map(
              ([key, value], index) => (
                <td key={index} className="p-2">
                  <span className="w-full break-all line-clamp-1">
                    {renderValue(key, value)}
                  </span>
                </td>
              )
            )}
            <td className="p-0">
              <Box
                href={`/${entitiesName.toLowerCase()}/${entity.id}`}
                onClick={() => handleEditClick(entity.id)}
                className="p-0 h-auto"
              >
                <Icon name="pencil" />
                Edit
              </Box>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
