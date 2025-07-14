"use client"

import { capitalize, fetchApi } from "@/equix/utils";
import { FC, useCallback, useEffect, useState } from "react";
import config from "../config";
import { EntityEditorEntries } from "./EntityEditorEntries";
import { EntityEditorHeader } from "./EntityEditorHeader";
import { EntityEditorLinks } from "./EntityEditorLinks";
import { Entity } from "@/equix/types";
import { getEntityTemplate } from "../utils";

interface Props {
  entitiesName: string;
  entityId: string;
  entityEndpoint?: string | undefined;
}

export const EntityEditor: FC<Props> = ({
  entitiesName,
  entityId,
  entityEndpoint = `${entitiesName}/${entityId}`,
}) => {
  const [initialEntity, setInitialEntity] = useState<Object>(
    getEntityTemplate(entitiesName)
  );
  const [changedEntity, setChangedEntity] = useState<Entity>(
    getEntityTemplate(entitiesName)
  );
  const [innerEntityIdEntries, setInnerEntityIdEntries] = useState<
    [key: string, value: string | number | boolean][]
  >([]);
  const [fleetIds, setFleetIds] = useState("");
  const [additionalEntries, setAdditionalEntries] = useState<
    [string, unknown][]
  >([]);

  const init = useCallback(async () => {
    if (entityId !== "new") {
      const res = await fetchApi(entityEndpoint);

      const data = await res.json();

      const entity = data;

      type EntityName = keyof typeof config.additional_entity_endpoints;

      const additionalEntityEndpoints =
        config.additional_entity_endpoints[
          capitalize(entitiesName) as EntityName
        ];

      if (additionalEntityEndpoints) {
        additionalEntityEndpoints.map(async (endpoint) => {
          const res = await fetchApi(`${entityEndpoint}/${endpoint}`);
          const data = await res.json();

          setAdditionalEntries(Object.entries(data));
        });
      }

      if (setInnerEntityIdEntries) {
        type EntityName = keyof typeof config.entities;

        const configKeys = Object.keys(
          config.entities[capitalize(entitiesName.slice(0, -1)) as EntityName]
        );
        const entries: [key: string, value: any][] = [];

        configKeys.map(
          (key) => key.includes("Id") && entries.push([key, entity[key]])
        );
        setInnerEntityIdEntries(entries);
      }

      if (entitiesName === "drivers") {
        const res = await fetchApi(`fleets?driverId=${entityId}`);

        const data = await res.json();

        setFleetIds(data.results.map((fleet: any) => fleet.id).join(","));
      }

      setInitialEntity(entity);
      setChangedEntity(entity);
    }
  }, [entitiesName, entityEndpoint, entityId]);

  useEffect(() => {
    init();
  }, [init]);

  return entitiesName ? (
    <div className="w-full max-w-[800px] mx-auto p-2">
      <EntityEditorHeader
        entitiesName={entitiesName}
        entityId={entityId}
        changedEntity={changedEntity}
        initialEntity={initialEntity}
      />
      <EntityEditorLinks
        entitiesName={entitiesName}
        innerEntityIdEntries={innerEntityIdEntries}
        entityId={entityId}
      />
      <EntityEditorEntries
        changedEntity={changedEntity}
        entitiesName={entitiesName}
        entityId={entityId}
        fleetIds={fleetIds}
        initialEntity={initialEntity}
        setChangedEntity={setChangedEntity}
        setFleetIds={setFleetIds}
        additionalEntries={additionalEntries}
      />
    </div>
  ) : undefined;
};
