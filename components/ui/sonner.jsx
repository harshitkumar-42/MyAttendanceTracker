"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-800 group-[.toaster]:border-gray-300 group-[.toaster]:shadow-md",
          description: "group-[.toast]:text-gray-600",
          actionButton:
            "group-[.toast]:bg-blue-500 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-gray-300 group-[.toast]:text-gray-700",
        },
      }}
      {...props} />
  );
}

export { Toaster }
