import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => randomUUID());

export const usersTable = sqliteTable("users", {
  id: id(),
  name: text("name").notNull(),
  cellphone: text("cellphone").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  rol: text("rol").notNull(),
});

export const companyTable = sqliteTable("companys", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
export type InsertPost = typeof companyTable.$inferInsert;
export type SelectPost = typeof companyTable.$inferSelect;
