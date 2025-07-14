import router from "next/router";
import { FC } from "react";
import { Box } from "../../components/Box";
import { Icon } from "@/equix/components/Icon";
import {
  capitalize,
  deleteEntity,
  areEntitiesEqual,
  submitEntity,
  fetchApi,
} from "@/equix/utils";

interface Props {
  entitiesName: string;
  entityId: string;
  changedEntity: Object;
  initialEntity: Object;
}

export const EntityEditorHeader: FC<Props> = (props) => {
  const { entitiesName, entityId, changedEntity, initialEntity } = props;

  const handleGoBack = () => {
    window.location.href = `/${entitiesName}/`;
  };

  const handleDelete = () => {
    const confirmed = confirm("Confirm deletion");

    if (confirmed) {
      deleteEntity(entitiesName as string, entityId as string);
      router.push(`/${entitiesName}`);
    }
  };

  const handleSave = () => {
    submitEntity(entitiesName as string, changedEntity, entityId as string);
  };

  const handleApprove = async () => {
    const res = await fetchApi(`${entitiesName}/${entityId}/approve`, {
      method: "PATCH",
    });

    return res.json();
  };

  return (
    <div className="flex items-center">
      <Box onClick={handleGoBack}>
        <Icon name="chevron-left" /> Go back
      </Box>
      <h1 className="font-semibold p-2">
        {capitalize(entitiesName.slice(0, -1))}
      </h1>
      <div className="flex">
        {entityId !== "new" && (
          <Box
            className="text-red-700 focus:bg-red-700/20"
            onClick={handleDelete}
          >
            Delete
          </Box>
        )}
        {changedEntity && !areEntitiesEqual(initialEntity, changedEntity) && (
          <Box className="text-accent" onClick={handleSave}>
            Save
          </Box>
        )}
        {(entitiesName === "drivers" ||
          entitiesName === "withdrawalRequests") && (
          <Box onClick={handleApprove}>Approve</Box>
        )}
      </div>
    </div>
  );
};
