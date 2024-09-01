import { db } from "./drizzle/db";
import { expensesTable } from "./drizzle/schema";

async function dataCreator() {
    await db.insert(expensesTable).values({
        category: "Clothes",
        details: "Bought 2 t-shirts",
        amount: 230
    })
}

dataCreator()