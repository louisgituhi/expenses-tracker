import { db } from "./drizzle/db";
import { expensesTable } from "./drizzle/schema";

async function dataCreator() {
    await db.insert(expensesTable).values({
        category: "Airtime",
        details: "Safaricom airtime",
        amount: 80
    })
}

dataCreator()