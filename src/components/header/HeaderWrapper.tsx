'use client'
import { cn } from '@/modules/shadcn/lib/utils'
import { useLenis } from 'lenis/react'
import { motion } from 'motion/react'
import React, { ReactNode, useState } from 'react'

interface HeaderWrapperProps {
    children: ReactNode,
    className?: string
}

const HeaderWrapper = ({ children, className }: HeaderWrapperProps) => {
    const [isScrolled, setScrolled] = useState<boolean>(false)
    useLenis(({ scroll }) => {
        setScrolled(scroll > 50)
    })
    return (
        <motion.header
            animate={{ backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className={cn(className)}>
            {children}
        </motion.header>
    )
}

export default HeaderWrapper