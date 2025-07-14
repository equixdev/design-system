import path from "node:path";
import fsPromises from "node:fs/promises";
import { Entity } from "./types";

export const getEntitiesFilePath = (entitiesName: string) =>
  entitiesName !== "admin" && entitiesName !== "gateway" ? path.join(process.cwd(), `/database/${entitiesName}.json`) : "";

export const readEntitiesFromFile = async (entitiesName: string) => {
  const entitiesFilePath = getEntitiesFilePath(entitiesName);

  const file = await fsPromises.readFile(entitiesFilePath);

  return JSON.parse(file.toString());
};

export const getEntity = async (entitiesName: string, id: string) => {
  const entities = await readEntitiesFromFile(entitiesName);

  return entities.find((entity: Entity) => entity.id === id);
};

export const writeEntitiesToFile = async (
  entitiesName: string,
  entities: Entity[]
) => {
  const entitiesFilePath = getEntitiesFilePath(entitiesName);

  return fsPromises.writeFile(entitiesFilePath, JSON.stringify(entities));
};

export const writeEntityToFile = async (
  entitiesName: string,
  updatedEntity: Partial<Entity>
) => {
  const entitiesFilePath = getEntitiesFilePath(entitiesName);

  const entities = await readEntitiesFromFile(entitiesName);

  let updatedEntities = [];

  if (updatedEntity.id)
    updatedEntities = entities.map((entity: Entity) =>
      entity.id === updatedEntity.id ? { ...entity, ...updatedEntity } : entity
    );
  else
    updatedEntities = [
      ...entities,
      {
        id: String(entities.length),
        ...updatedEntity,
      },
    ];

  await fsPromises.writeFile(entitiesFilePath, JSON.stringify(updatedEntities));

  return updatedEntities;
};
