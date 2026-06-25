"use client"

import type { ComponentProps } from "react"

import { cn } from "@/modules/shadcn/lib/utils"

const FluidTabsList = ({
    className,
    children,
    "aria-label": ariaLabel = "Tabs",
    ...props
}: ComponentProps<"nav">) => {
    return (
        <nav
            aria-label={ariaLabel}
            className={cn(
                "relative overflow-visible rounded-full bg-muted p-1 shadow-sm",
                className,
            )}
            {...props}
        >
            <div role="tablist" className="flex w-full gap-2">
                {children}
            </div>
        </nav>
    )
}

export default FluidTabsList
export { FluidTabsList }