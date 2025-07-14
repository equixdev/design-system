import { NextRequest } from "next/server";
import { Entity } from "../../types";
import {
  getEntity,
  readEntitiesFromFile,
  writeEntitiesToFile,
  writeEntityToFile,
} from "../../utils";

export const GET = async (
  _request: NextRequest,
  { params: parameters }: { params: { entitiesName: string; id: string } }
) => {
  const entitiesName = parameters.entitiesName;
  const id = parameters.id;

  const entity = await getEntity(entitiesName, id);

  return Response.json(entity);
};

export const PATCH = async (
  request: NextRequest,
  { params: parameters }: { params: { entitiesName: string; id: string } }
) => {
  const entitiesName = parameters.entitiesName;
  const id = parameters.id;

  const updatedEntityEntries = await request.json();

  const updatedEntity = { id, ...updatedEntityEntries };

  await writeEntityToFile(entitiesName, updatedEntity);

  return Response.json(updatedEntity);
};

// export const PUT = PATCH;

export const DELETE = async (
  _request: NextRequest,
  { params: parameters }: { params: { entitiesName: string; id: string } }
) => {
  const entitiesName = parameters.entitiesName;
  const id = parameters.id;

  const entities = await readEntitiesFromFile(entitiesName);

  const updatedEntities = entities.filter((entity: Entity) => entity.id !== id);

  await writeEntitiesToFile(entitiesName, updatedEntities);

  return Response.json("Deleted");
};
