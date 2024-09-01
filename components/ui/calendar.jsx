"use client";
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-lg font-medium text-gray-800",
        nav: "flex items-center space-x-1",
        nav_button: cn(
          "h-7 w-7 bg-white border border-gray-300 text-gray-800 opacity-80 hover:opacity-100 focus:outline-none",
          "transition-opacity duration-300"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-600 text-xs w-9 font-normal",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: cn(
          "h-9 w-9 p-0 font-normal text-gray-800",
          "transition-opacity duration-300"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
        day_today: "bg-blue-100 text-blue-700",
        day_outside: "text-gray-400 opacity-70",
        day_disabled: "text-gray-300 opacity-50",
        day_range_middle: "bg-blue-200 text-blue-700",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4 text-gray-800" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4 text-gray-800" />,
      }}
      {...props} />
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
