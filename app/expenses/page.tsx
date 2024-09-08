import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "@/database/drizzle/db"
import { expensesTable } from "@/database/drizzle/schema"


export const dynamic = "force-dynamic";
export const revalidate = 6;

async function getData(): Promise<Payment[]> {
  const data = await db.select().from(expensesTable)

  return data
};

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
};