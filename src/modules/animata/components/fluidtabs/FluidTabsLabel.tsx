"use client"

import type { ComponentProps } from "react"

import { cn } from "@/modules/shadcn/lib/utils"

const FluidTabsLabel = ({ className, ...props }: ComponentProps<"span">) => {
    return <span className={cn("whitespace-nowrap", className)} {...props} />
}

export default FluidTabsLabel
export { FluidTabsLabel }