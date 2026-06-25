"use client"

import { useState } from "react"

import FluidTabs from "@/modules/animata/components/fluidtabs/FluidTabs"
import HeaderLogo from "./HeaderLogo"

const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "News", href: "#news" },
    { label: "Join", href: "#register" },
]

const HeaderNav = () => {
    // TODO: move this to a store with active tab detection and restoration logic.
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <nav className="flex justify-center items-center gap-4" aria-label="Main navigation">
            <HeaderLogo></HeaderLogo>
            <div className="rounded-lg border border-white/10 bg-background/35 p-1 text-sm text-foreground shadow-lg shadow-black/10 backdrop-blur-xl supports-backdrop-filter:bg-background/25">
                <FluidTabs.List aria-label="Header navigation" className="bg-transparent p-0 shadow-none">
                    {navItems.map((navItem, navItemIndex) => (
                        <FluidTabs.Tab
                            key={navItem.href}
                            index={navItemIndex}
                            activeIndex={activeIndex}
                            onActiveIndexChange={setActiveIndex}
                            indicatorLayoutId="header-nav-tabs"
                            className="min-w-20 px-4 py-2"
                        >
                            <FluidTabs.Label>{navItem.label}</FluidTabs.Label>
                        </FluidTabs.Tab>
                    ))}
                </FluidTabs.List>
            </div>
        </nav>
    )
}

export default HeaderNav