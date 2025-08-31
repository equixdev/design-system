import { NextRequest } from "next/server";
import { readEntitiesFromFile, writeEntityToFile } from "../utils";
import { User } from "../types";
import nodemailer from "nodemailer";

export const POST = async (request: NextRequest) => {
  const { email } = await request.json();

  const users = await readEntitiesFromFile("users");

  const targetUser = users.find((user: User) => user.email === email);

  const code = String(Math.floor(100_000 + Math.random() * 900_000));

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env?.["NODEMAILER_USER"],
      pass: process.env?.["NODEMAILER_PASS"],
    },
  });

  await transporter.sendMail({
    from: "Бот ЭКВИКС bot@equix.ru",
    to: email,
    subject: "Одноразовый код для входа в EQUIX",
    text: `Ваш код ${code}`,
  });

  if (targetUser) {
    await writeEntityToFile("users", { ...targetUser, code });

    return Response.json("User found");
  }

  await writeEntityToFile("users", { email, code });

  return Response.json("User created");
};
