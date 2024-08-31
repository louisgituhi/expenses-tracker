import { db } from "./drizzle/db";
import { expensesTable } from "./drizzle/schema";

async function dataCreator() {
    await db.insert(expensesTable).values({
        category: "Shopping",
        details: "Bought cups, plates and containers",
        amount: 1821
    })
}

dataCreator()