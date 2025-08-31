import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { EntityEditor } from "./EntityEditor";
import { Dialog } from "@/equix/components/Dialog";
import { Input } from "@/equix/components/Input";
import { Entity } from "../types";

interface Props {
  entityName: string | null;
  title: string;
  setEntityName: (value: string | undefined) => void;
}

export const EntitiesEditor: FC<Props> = ({
  title,
  entityName,
  setEntityName,
}) => {
  const router = useRouter();

  const [entities, setEntities] = useState<Entity[]>([]);
  const [idToEdit, setIdToEdit] = useState<number | undefined>(undefined);

  const entityKeys = entities[0] ? Object.keys(entities[0]) : [];

  const [entity, setEntity] = useState<Entity>();

  const entityTemplate: Entity = {
    id: "",
    ...Object.fromEntries(entityKeys.map((key) => [key, ""])),
  };

  const [changedEntity, setChangedEntity] = useState<any>({});

  useEffect(() => {
    const fetchEntities = async () => {
      if (entityName) {
        const fetchedEntities = await fetch(`/${entityName}.json`).then((res) =>
          res.json()
        );

        setEntities(fetchedEntities);
      }
    };

    fetchEntities();
  }, [router, entityName]);

  useEffect(() => {
    if (typeof idToEdit === "number" && idToEdit < entities.length) {
      const targetEntity = entities.find(({ id }) => id === String(idToEdit));

      if (targetEntity) setEntity(targetEntity);

      setChangedEntity(entities[idToEdit]);
    }
  }, [idToEdit, entities]);

  const [searchQuery, setSearchQuery] = useState("");

  const getEntities = () =>
    entities?.filter((object) =>
      Object.values(object).find((value) =>
        value?.toString().includes(searchQuery)
      )
    );

  return (
    <Dialog
      isOpen={Boolean(entityName)}
      close={() => {
        setEntityName(undefined);
      }}
      title={title}
    >
      {entities && entities[0] && (
        <>
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            type="search"
            label="Поиск"
            autoFocus
          />
          <table>
            <thead>
              <tr>
                <td colSpan={100}>
                  <button
                    className="w-full"
                    onClick={() => {
                      setEntity(entityTemplate);
                      setIdToEdit(entities.length);
                    }}
                  >
                    Добавить
                  </button>
                </td>
              </tr>
              <tr>
                {entityKeys.map((key, index) => (
                  <td key={index}>{key === "id" ? "№" : key}</td>
                ))}
                <td>Действия</td>
              </tr>
            </thead>
            <tbody>
              {entityKeys && getEntities().length > 0 ? (
                getEntities()
                  .sort(
                    ({ id: idA }, { id: idB }) => parseInt(idA) - parseInt(idB)
                  )
                  .map((entity, entityIndex) => (
                    <tr key={entityIndex}>
                      {entityKeys.map((key, index) => (
                        <td key={index}>{entity[key]}</td>
                      ))}
                      <td>
                        <button
                          onClick={() => {
                            setChangedEntity(entityTemplate);
                            // setIdToEdit(entity.id - 3);
                          }}
                        >
                          Изменить
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <span className="text-gray-400">Ничего не найдено</span>
              )}
            </tbody>
          </table>
        </>
      )}
      {entityName && entity && (
        <EntityEditor
          indexToEdit={idToEdit}
          setChangedEntity={setChangedEntity}
          entityTemplate={entityTemplate}
          setIndexToEdit={setIdToEdit}
          entityKeys={entityKeys}
          changedEntity={changedEntity}
          entities={entities}
          entity={entity}
          setEntities={setEntities}
          entityName={entityName}
        />
      )}
    </Dialog>
  );
};
