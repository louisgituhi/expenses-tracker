import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "@/database/drizzle/db"
import { expensesTable } from "@/database/drizzle/schema"


// const getExpenses: = unstable_cache(
//   async () => {
//     return await db.select().from(expensesTable)
//   },
//   { revalidate: 3600 }
// )

async function getData(): Promise<Payment[]> {
  const data = await db.select().from(expensesTable)

  return data
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
