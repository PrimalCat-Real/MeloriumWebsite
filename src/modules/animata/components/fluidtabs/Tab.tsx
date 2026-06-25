"use client"

import { motion } from "motion/react"
import type { ComponentProps } from "react"

import { focusTabByIndex, getNextTabIndex, getTabListItems } from "@/modules/animata/lib/fluidtabs"
import { Button } from "@/modules/shadcn/components/ui/button"
import { cn } from "@/modules/shadcn/lib/utils"

const indicatorSpring = {
    type: "spring" as const,
    stiffness: 380,
    damping: 34,
    mass: 0.75,
}

const labelTransition = {
    duration: 0.28,
    ease: [0.32, 0.72, 0, 1] as const,
}

type FluidTabProps = Omit<ComponentProps<typeof Button>, "onSelect"> & {
    index: number
    activeIndex: number
    onActiveIndexChange: (index: number) => void
    indicatorLayoutId: string
    label?: string
}

type FluidTabKeyEvent = Parameters<NonNullable<FluidTabProps["onKeyDown"]>>[0]

const FluidTab = ({
    index,
    activeIndex,
    onActiveIndexChange,
    indicatorLayoutId,
    className,
    children,
    label,
    onClick,
    onFocus,
    onKeyDown,
    ...props
}: FluidTabProps) => {
    const isSelected = activeIndex === index

    const handleKeyDown = (event: FluidTabKeyEvent) => {
        onKeyDown?.(event)

        if (event.defaultPrevented) {
            return
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onActiveIndexChange(index)
            return
        }

        const tabListItems = getTabListItems(event.currentTarget)

        if (!tabListItems || tabListItems.tabs.length < 2) {
            return
        }

        const currentIndex = tabListItems.tabs.indexOf(event.currentTarget)

        if (currentIndex === -1) {
            return
        }

        const nextIndex = getNextTabIndex(event.key, currentIndex, tabListItems.tabs.length)

        if (nextIndex === null) {
            return
        }

        event.preventDefault()
        focusTabByIndex(tabListItems.tablist, nextIndex)
    }

    return (
        <Button
            type="button"
            role="tab"
            variant="ghost"
            aria-selected={isSelected}
            {...(label ? { "aria-label": label } : {})}
            onClick={(event) => {
                onClick?.(event)

                if (!event.defaultPrevented) {
                    onActiveIndexChange(index)
                }
            }}
            onFocus={(event) => {
                onFocus?.(event)
            }}
            onKeyDown={handleKeyDown}
            className={cn(
                "relative z-10 h-auto flex-1 rounded-full border-0 bg-transparent px-4 py-2 text-sm font-semibold hover:bg-transparent",
                "focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "motion-reduce:transition-none",
                className,
            )}
            {...props}
        >
            {isSelected ? (
                <motion.span
                    layoutId={indicatorLayoutId}
                    className="absolute inset-0 block rounded-full bg-primary shadow-sm"
                    transition={indicatorSpring}
                    aria-hidden
                />
            ) : null}
            <motion.span
                className="relative z-10 inline-flex items-center justify-center gap-2"
                animate={{ scale: isSelected ? 1 : 0.98 }}
                transition={labelTransition}
            >
                {children}
            </motion.span>
        </Button>
    )
}

export default FluidTab
export { FluidTab }