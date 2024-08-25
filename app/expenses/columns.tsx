"use client"
import { timeAgo } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Payment = {
    id: string
    amount: number
    category: "Transport" | "Bills" | "Shopping" | "Clothes" | "Food" | "Airtime" | "Subscriptions" | "Footwear" | "Medicine" | "Barber" | "Other"
    paymentDate: Date
    details: string
}


export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "category",
    header: "Category",
      cell: ({ row }) => (
           <div className="capitalize">{row.getValue("category")}</div>
         ),
  },

  {
    accessorKey: "details",
    header: ({ column }) => {
        return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               >
                Details
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
      },
        cell: ({ row }) => <div className="lowercase">{row.getValue("details")}</div>,
  },

  {
    accessorKey: "paymentDate",
    header: "Payment Date",
      cell: ({ row }) => {
        const startTime = Date.now()
        const duration = Date.now() - startTime
        const formattedDate = new Date(row.getValue("paymentDate"))
        return (
          <div className="capitalize">{formattedDate.toDateString()}</div>
        )
      }
          ,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
 
          return <div className="text-right font-medium">{amount}</div>
    }
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
        const payment = row.original
          return (
             <DropdownMenu>
              
               <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className="h-8 w-8 p-0">
                   <span className="sr-only">Open menu</span>
                   <MoreHorizontal className="h-4 w-4" />
                 </Button>
               </DropdownMenuTrigger>

               <DropdownMenuContent align="end">
                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
                 <DropdownMenuItem
                   onClick={() => navigator.clipboard.writeText(payment.id)}
                 >
                   Copy payment ID
                 </DropdownMenuItem>
                 <DropdownMenuSeparator />
                 <DropdownMenuItem>View customer</DropdownMenuItem>
                 <DropdownMenuItem>View payment details</DropdownMenuItem>
               </DropdownMenuContent>

             </DropdownMenu>
      )
    },
  },
]