'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import extension from '@theatre/r3f/dist/extension'
import studio from '@theatre/studio'
import { editable as e, SheetProvider } from '@theatre/r3f'
import { useRef } from 'react'
import * as THREE from 'three'
import { useImmer } from 'use-immer'

if (process.env.NODE_ENV === 'production') {
  studio.initialize()
  studio.extend(extension)
}

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

function Box() {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHover] = useImmer(false)
  const [active, setActive] = useImmer(false)
  useFrame((state, delta) => (mesh.current!.rotation.x += 0.01))
  return (
    <e.mesh
      theatreKey="cube"
      position={[0, 0, 0]}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </e.mesh>
  )
}

export default function HomePage() {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <SheetProvider sheet={demoSheet}>
        <ambientLight />
        <e.pointLight theatreKey="light" position={[10, 10, 10]} />
        <Box />
      </SheetProvider>
    </Canvas>
  )
}
