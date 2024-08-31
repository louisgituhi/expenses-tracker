import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className=" mt-40 text-center">
      <Button className=" bg-green-100 text-green-700">
        <Link className="" href="/expenses">To expenses</Link>
      </Button>
    </div>
  )
}