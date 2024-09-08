import { db } from "./drizzle/db";
import { expensesTable } from "./drizzle/schema";

async function dataCreator() {
    await db.insert(expensesTable).values({
        category: "Other",
        details: "Roasted maize",
        amount: 20
    })
}

dataCreator()