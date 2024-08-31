import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "@/database/drizzle/db"

async function getData(): Promise<Payment[]> {
  const data = await db.query.expensesTable.findMany()

  return data
}

export default async function DemoPage() {
  const data = await getData()
  console.log(data)

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
