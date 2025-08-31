import { NextRequest } from "next/server";
import { readEntitiesFromFile } from "../utils";
import { User } from "../types";

export const POST = async (request: NextRequest) => {
  const { email, code } = await request.json();

  const users = await readEntitiesFromFile("users");

  const targetUser = users.find((user: User) => user.email === email);

  if (!targetUser) return Response.json("User not found");

  if (targetUser.code === code) return Response.json(targetUser.id);

  return Response.json("Wrong code");
};
