import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="transport">Transport</SelectItem>
          <SelectItem value="bills">Bills</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="clothes">Clothes</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="airtime">Airtime</SelectItem>
          <SelectItem value="subscriptions">Subscriptions</SelectItem>
          <SelectItem value="footwear">Footwear</SelectItem>
          <SelectItem value="medicine">Medicine</SelectItem>
          <SelectItem value="footwear">Footwear</SelectItem>
          <SelectItem value="barber">Barber</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}