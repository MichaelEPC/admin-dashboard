import "server-only";
import jwt from "jsonwebtoken";
import { db } from "../db/index";
import { usersTable } from "app/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const hashPW = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePW = (password: string, hashedPW: string) => {
  return bcrypt.compare(password, hashedPW);
};

const SECRET = process.env.JWT_SECRET;

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, SECRET, { expiresIn: "2h" });
  return token;
};

export const getUserFromToken = async (token: {
  name: string;
  value: string;
}) => {
  const payload = jwt.verify(token.value, SECRET) as { id: string };

  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, payload.id),
    columns: {
      id: true,
      email: true,
    },
  });

  return user;
};

export const signup = async ({
  email,
  password,
  cellphone,
  name,
  rol,
}: {
  email: string;
  password: string;
  name: string;
  cellphone: string;
  rol: string;
}) => {
  const hashedPW = await hashPW(password);
  const rows = await db
    .insert(usersTable)
    .values({
      email,
      password: hashedPW,
      name: name,
      cellphone: cellphone,
      rol: rol,
    })
    .returning({
      id: usersTable.id,
      email: usersTable.email,
      name: usersTable.name,
    });

  const user = rows[0];
  const token = createTokenForUser(user.id);

  return { user, token };
};

export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const match = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, email),
  });
  if (!match) throw new Error("The email or password provide are not correct.");

  const comparePass = await comparePW(password, match.password);
  if (!comparePass) {
    throw new Error("The email or password provide are not correct.");
  }
  const token = await createTokenForUser(match.id);

  return { token };
};
