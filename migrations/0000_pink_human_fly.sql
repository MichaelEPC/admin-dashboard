-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `company` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`employees` text,
	`request` text,
	`taskList` text,
	`operations` text,
	`feedBack` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`cashflow` text,
	`monthlyExpenses` text,
	`incomes` text,
	`mostProductsSold` text,
	`bills` text,
	`clients` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`cellphone` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`rol` text NOT NULL,
	`company` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_cellphone_unique` ON `users` (`cellphone`);
*/