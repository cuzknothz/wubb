'use client'

import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import extension from '@theatre/r3f/dist/extension'
import studio from '@theatre/studio'
import { editable as e, SheetProvider } from '@theatre/r3f'

if (process.env.NODE_ENV === 'development') {
  studio.initialize()
  studio.extend(extension)
}

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

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
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </SheetProvider>
    </Canvas>
  )
}
