import { NextRequest } from "next/server";
import { writeEntityToFile, readEntitiesFromFile } from "../utils";

export const GET = async (
  _request: NextRequest,
  { params: parameters }: { params: { entitiesName: string } }
) => {
  const entitiesName = parameters.entitiesName;

  const entities = await readEntitiesFromFile(entitiesName);

  return Response.json(entities);
};

export const POST = async (
  request: NextRequest,
  { params: parameters }: { params: { entitiesName: string } }
) => {
  const entitiesName = parameters.entitiesName;

  const entity = await request.json();

  const updatedEntities = await writeEntityToFile(entitiesName, entity);

  return Response.json(updatedEntities);
};
