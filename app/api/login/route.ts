import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { readEntitiesFromFile, writeEntityToFile } from "../utils";
import { User } from "../types";

export const POST = async (request: NextRequest) => {
  const { email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env?.["NODEMAILER_USER"],
      pass: process.env?.["NODEMAILER_PASS"],
    },
  });

  const code = String(Math.round(Math.random() * 600_000));

  const users = await readEntitiesFromFile("users");

  const targetUser = users.find((user: User) => user.email === email);

  await writeEntityToFile("users", { ...targetUser, code });

  await transporter.sendMail({
    from: "Бот ЭКВИКС bot@equix.ru",
    to: email,
    subject: "Одноразовый код для входа в EQUIX",
    text: `Ваш код ${code}`,
  });

  return Response.json("Mail sent");
};
