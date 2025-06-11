import { sqliteTable, AnySQLiteColumn, text, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const company = sqliteTable("company", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	category: text().notNull(),
	employees: text(),
	request: text(),
	taskList: text(),
	operations: text(),
	feedBack: text(),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	cashflow: text(),
	monthlyExpenses: text(),
	incomes: text(),
	mostProductsSold: text(),
	bills: text(),
	clients: text(),
});

export const users = sqliteTable("users", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	cellphone: text().notNull(),
	email: text().notNull(),
	password: text().notNull(),
	rol: text().notNull(),
	company: text(),
},
(table) => [
	uniqueIndex("users_email_unique").on(table.email),
	uniqueIndex("users_cellphone_unique").on(table.cellphone),
]);

