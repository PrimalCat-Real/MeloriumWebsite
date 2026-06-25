"use client"

import type { ComponentProps } from "react"

import { cn } from "@/modules/shadcn/lib/utils"

const FluidTabsIcon = ({ className, ...props }: ComponentProps<"span">) => {
    return (
        <span
            aria-hidden
            className={cn("inline-flex shrink-0 empty:hidden [&_svg]:size-4", className)}
            {...props}
        />
    )
}

export default FluidTabsIcon
export { FluidTabsIcon }