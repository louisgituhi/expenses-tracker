import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ExpenseForm } from "./form-component"



export default function CreateExpense() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className=" flex items-center gap-2">New Expense <Plus /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Create a new expense</SheetTitle>
                    <SheetDescription>
                        Click submit when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <ExpenseForm />
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Details
                        </Label>
                        <Input id="name" value="Others" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                        Amount
                        </Label>
                        <Input id="username" value="100" className="col-span-3" />
                    </div> 
                    </div> */}
                    {/* <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter> */}
                </div>
            </SheetContent>
        </Sheet>
    )
}