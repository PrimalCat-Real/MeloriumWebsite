'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import React, { ReactNode } from 'react'

const ReactLenisRoot = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <ReactLenis root />
            {children}
        </>

    )
}

export default ReactLenisRoot