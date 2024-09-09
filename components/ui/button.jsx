import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

// Basic Tailwind classes for different button types and sizes
const buttonVariants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-500 underline hover:text-blue-600",
}

const buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return ( <
        Comp className = {
            cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                buttonVariants[variant],
                buttonSizes[size],
                className
            )
        }
        ref = { ref } {...props }
        />
    )
})
Button.displayName = "Button"

export { Button }
export { buttonVariants }