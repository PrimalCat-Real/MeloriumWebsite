'use client'

import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef } from 'react'
import { Mesh, Material, Vector2 } from 'three';
import fragmentShader from "@/shared/libs/shaders/wave/wave.frag"
import vertexShader from "@/shared/libs/shaders/wave/wave.vert"
import { number } from 'motion';
const ShaderPlane = () => {
    // const meshRef = useRef<Mesh>(null)
    const shaderMaterialRef = useRef<Material>(null)
    const { viewport, size } = useThree()

    const uniforms = useMemo(() => {
        return (
            {
                time: { value: 0.0 },
                resolution: { value: new Vector2() }
            }
        )
    }, [])

    useEffect(() => {
        uniforms.resolution.value.set(size.width, size.height)
    }, [size])
    useFrame((state, delta) => {
        if (shaderMaterialRef.current) {
            uniforms.time.value += 0.5 * delta
            console.log(uniforms.time.value)
        }
    })

    return (
        <mesh >
            <planeGeometry args={[viewport.width, viewport.height]} />
            {/* <meshBasicMaterial color="white" wireframe /> */}
            <shaderMaterial uniforms={uniforms} ref={shaderMaterialRef} fragmentShader={fragmentShader} vertexShader={vertexShader}></shaderMaterial>
        </mesh>
    )
}

export default ShaderPlane