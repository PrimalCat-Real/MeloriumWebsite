import { cn } from '@/modules/shadcn/lib/utils'
import type { ReactNode } from 'react'

interface HeaderWrapperProps {
    children: ReactNode,
    className?: string
}

const HeaderWrapper = ({ children, className }: HeaderWrapperProps) => {
    return (
        <header className={cn(className)}>
            {children}
        </header>
    )
}

export default HeaderWrapper