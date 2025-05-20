import "server-only";

// @ts-expect-error
import jwt from "jsonwebtoken";
import { db } from "../db/index";
import { companyTable, usersTable } from "app/db/schema";
import { eq } from "drizzle-orm";

// @ts-expect-error
import bcrypt from "bcrypt";

const SECRET = process.env.JWT_SECRET;

export const hashPW = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePW = (password: string, hashedPW: string) => {
  return bcrypt.compare(password, hashedPW);
};

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, SECRET);
  return token;
};

export const getUserFromToken = async () => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, "c38ff0dc-062b-475c-b80a-ae6a72b2a543"),
    columns: {
      id: true,
      email: true,
      name: true,
      rol: true,
      company: true,
    },
  });

  return user;
};

export const getUserFromId = async (userId: string) => {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, "c38ff0dc-062b-475c-b80a-ae6a72b2a543"),
    columns: {
      id: true,
      email: true,
      name: true,
      rol: true,
      cellphone: true,
      company: true,
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
  companyName,
  companyCategory,
}: {
  email: string;
  password: string;
  name: string;
  cellphone: string;
  rol: string;
  companyName?: string | undefined | null;
  companyCategory?: string | undefined | null;
}) => {
  try {
    const hashedPW = await hashPW(password);
    let rows;
    if (companyName && companyCategory) {
      // If its a owner that create a new company
      console.log(`Prueba: -------------`);
      const company = await createCompany({ companyName, companyCategory });

      rows = await db
        .insert(usersTable)
        .values({
          email,
          password: hashedPW,
          name: name,
          cellphone: cellphone,
          rol: rol,
          company: JSON.stringify(company),
        })
        .returning({
          id: usersTable.id,
          email: usersTable.email,
          name: usersTable.name,
          company: usersTable.company,
        });

      await db
        .update(companyTable)
        .set({
          employees: JSON.stringify([
            {
              id: rows[0].id,
              name: name,
              email: email,
              cellphone: cellphone,
              rol: rol,
              job: "owner",
            },
          ]),
        })
        .where(eq(companyTable.id, company.id));
    } else {
      // If its a employee
      rows = await db
        .insert(usersTable)
        .values({
          email,
          password: hashedPW,
          name: name,
          cellphone: cellphone,
          rol: rol,
          company: "none",
        })
        .returning({
          id: usersTable.id,
          email: usersTable.email,
          name: usersTable.name,
          company: usersTable.company,
        });
    }
    const user = rows[0];
    const token = createTokenForUser(user.id);
    return { user, token };
  } catch (error) {
    console.log(error);
  }
};

export const createCompany = async ({
  companyName,
  companyCategory,
}: {
  companyName: string;
  companyCategory: string;
}) => {
  let row;
  row = await db
    .insert(companyTable)
    .values({
      name: companyName,
      category: companyCategory,
      cashflow: JSON.stringify([]),
      monthlyExpenses: JSON.stringify([]),
      incomes: JSON.stringify([]),
      mostProductSold: JSON.stringify({
        products: [],
        list: [],
      }),
      request: JSON.stringify([]),
      taskList: JSON.stringify({
        goal: 0,
        taskCompleted: 0,
        completedTask: [],
        pendingTask: [],
        totalTask: [],
      }),
      feedBack: JSON.stringify({
        letters: [],
        rating: [
          {
            name: "Super Good",
            color: "blue",
            sales: 0,
          },
          {
            name: "Good",
            color: "cyan",
            sales: 0,
          },
          {
            name: "Medium",
            color: "green",
            sales: 0,
          },
          {
            name: "Not well",
            color: "yellow",
            sales: 0,
          },
          {
            name: "Bad",
            color: "red",
            sales: 0,
          },
        ],
        voted: [],
      }),
      operations: JSON.stringify({
        list: [],
      }),
    })
    .returning({ id: companyTable.id, name: companyTable.name });
  const company = row[0];
  return company;
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

  if (!match) console.log("No es compatible la contraseña");
  if (!match) throw new Error("The email or password provide are not correct.");

  const comparePass = await comparePW(password, match.password);

  if (!comparePass) console.log("Segundo error");
  if (!comparePass) {
    throw new Error("The email or password provide are not correct.");
  }

  const token = await createTokenForUser(match.id);
  return { token };
};
