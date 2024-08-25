import { db } from "./drizzle/db";
import { expensesTable } from "./drizzle/schema";

// export async function fetchData() {
//     let expenses = await db.query.expensesTable.findMany();
//     return expenses
// }

async function dataCreator() {

    // await db.delete(expensesTable)
    await db.insert(expensesTable).values({
        category: "Airtime",
        details: "Safaricom airtime",
        amount: 80
    })
}

dataCreator()