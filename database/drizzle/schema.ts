import { pgTable, pgEnum, uuid, varchar, timestamp, integer } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("cost_category", ["Transport", "Bills", "Shopping", "Food", "Clothes", "Subscriptions", "Footwear", "Medicine", "Barber", "Airtime", "Other"]);

export const expensesTable = pgTable("expenses", {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    category: categoryEnum("cost_category").default("Other").notNull(),
    details: varchar("details", { length: 255 }).notNull(),
    paymentDate: timestamp("paid_on").defaultNow().notNull(),
    amount: integer("amount").notNull()
});