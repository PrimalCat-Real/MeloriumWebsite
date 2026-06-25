type TabListItems = {
    tablist: HTMLElement
    tabs: HTMLElement[]
}

const focusTabByIndex = (tablist: HTMLElement, targetIndex: number) => {
    queueMicrotask(() => {
        tablist.querySelectorAll<HTMLElement>('[role="tab"]')[targetIndex]?.focus()
    })
}

const getTabListItems = (target: HTMLElement): TabListItems | null => {
    const tablist = target.closest<HTMLElement>('[role="tablist"]')

    if (!tablist) {
        return null
    }

    const tabs = Array.from(tablist.querySelectorAll<HTMLElement>('[role="tab"]'))

    return { tablist, tabs }
}

const getNextTabIndex = (key: string, currentIndex: number, count: number) => {
    switch (key) {
        case "ArrowRight":
        case "ArrowDown":
            return (currentIndex + 1) % count
        case "ArrowLeft":
        case "ArrowUp":
            return (currentIndex - 1 + count) % count
        case "Home":
            return 0
        case "End":
            return count - 1
        default:
            return null
    }
}

export { focusTabByIndex, getNextTabIndex, getTabListItems }