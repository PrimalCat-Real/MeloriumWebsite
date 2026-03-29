'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import ShaderPlane from './objects/ShaderPlane'

const ClientCanvas = () => {
    return (
        <div id="canvas-container" className="flex flex-col h-full w-full items-center">
            <Canvas orthographic className='w-full h-full' camera={{ near: -1, far: 1, zoom: 1 }}>
                <ShaderPlane></ShaderPlane>
            </Canvas>
        </div>
    )
}

export default ClientCanvas