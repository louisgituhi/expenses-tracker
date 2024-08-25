import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "@/database/drizzle/db"
import { expensesTable } from "@/database/drizzle/schema"

async function getData(): Promise<Payment[]> {
  const data = await db.query.expensesTable.findMany()
  // const data = await db.select({
  //   id: expensesTable.id,
  //   category: expensesTable.category,
  //   details: expensesTable.details,
  //   paid_on: expensesTable.paymentDate,
  //   amount: expensesTable.amount
  // }).from(expensesTable);

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
