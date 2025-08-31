import { areEntitiesEqual, deleteEntity, submitEntity } from "@/equix/utils";
import { Dispatch, FC, SetStateAction } from "react";
import { Dialog } from "@/equix/components/Dialog";
import { Input } from "@/equix/components/Input";
import { Entity } from "../types";

interface Props {
  indexToEdit: number | undefined;
  setChangedEntity: Dispatch<SetStateAction<Entity>>;
  entityTemplate: any;
  setIndexToEdit: (index: number | undefined) => void;
  entityKeys: string[];
  changedEntity: any;
  entities: Entity[];
  entity: Entity;
  setEntities: (values: Entity[]) => void;
  entityName: string;
}

export const EntityEditor: FC<Props> = ({
  indexToEdit,
  setChangedEntity,
  entityTemplate,
  setIndexToEdit,
  entityKeys,
  changedEntity,
  entities,
  entity,
  entityName,
  setEntities,
}) => {
  const changedValue: any = {};

  const filteredEntities = entities.filter(
    (_en, index) => index !== indexToEdit
  );

  return (
    <Dialog
      isOpen={typeof indexToEdit === "number"}
      close={() => {
        setChangedEntity(entityTemplate);
        setIndexToEdit(undefined);
      }}
      title={`Редактирование ${changedEntity.id ? `№${changedEntity.id}` : ""}`}
    >
      {entityKeys.map(
        (key, index) =>
          key !== "id" && (
            <Input
              label={key}
              key={index}
              value={changedEntity[key]}
              onChange={(value: any) => {
                changedValue[key] = value;

                setChangedEntity((previousState) => ({
                  ...previousState,
                  ...changedValue,
                }));
              }}
            />
          )
      )}
      <menu className="flex gap-4">
        {!areEntitiesEqual(entity, changedEntity) && (
          <li>
            <button
              onClick={() => {
                submitEntity(entityName, entity.id, changedEntity);

                setEntities([
                  ...filteredEntities,
                  { id: filteredEntities.length + 1, ...changedEntity },
                ]);

                setChangedEntity(entityTemplate);
                setIndexToEdit(undefined);
              }}
            >
              Сохранить
            </button>
          </li>
        )}
        {entity && (
          <li>
            <button
              className="text-red-600"
              onClick={() => {
                const confirmed = confirm("Подтвердите удаление");

                if (confirmed) {
                  deleteEntity(entityName, entity.id);
                  setEntities(filteredEntities);
                  setChangedEntity(entityTemplate);
                  setIndexToEdit(undefined);
                }
              }}
            >
              Удалить
            </button>
          </li>
        )}
      </menu>
    </Dialog>
  );
};
