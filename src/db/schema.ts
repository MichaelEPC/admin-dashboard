import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => randomUUID());

const makeAList = (name: string) =>
  text(name).$default(() => JSON.stringify([]));

export const usersTable = sqliteTable("users", {
  id: id(),
  name: text("name").notNull(),
  cellphone: text("cellphone").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  rol: text("rol").notNull(),
  company: text("company").$default(() => "none"),
});

export const companyTable = sqliteTable("company", {
  id: id(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  employees: makeAList("employees"),
  request: makeAList("request"),
  taskList: makeAList("taskList"),
  operations: makeAList("operations"),
  feedBack: makeAList("feedBack"),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
export type InsertCompany = typeof companyTable.$inferInsert;
export type SelectCompany = typeof companyTable.$inferSelect;
