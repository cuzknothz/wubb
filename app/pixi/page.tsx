'use client'

import { Container, Sprite, Stage, useTick } from '@pixi/react'
import { useEffect, useRef, useState } from 'react'
import { settings, SCALE_MODES } from 'pixi.js'
import { useWindowSize } from 'react-use'
settings.SCALE_MODE = SCALE_MODES.NEAREST

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0)

  useTick((delta) => delta && setRotation(rotation + 0.1 * delta))

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      scale={4}
      rotation={rotation}
    />
  )
}

const PixiApp = () => {
  const { width, height } = useWindowSize()

  const [bunnyX, setBunnyX] = useState(0)
  const [bunnyY, setBunnyY] = useState(0)

  useEffect(() => {
    const cb = () => {
      setBunnyX(window.innerWidth / 2)
      setBunnyY(window.innerHeight / 2)
    }
    cb()
    window.addEventListener('resize', cb)
  }, [])
  return (
    <Stage
      width={width}
      height={height}
      renderOnComponentChange={true}
      options={{
        antialias: true,
        background: 'white',
        hello: true,
      }}
    >
      <Container position={[bunnyX, bunnyY]}>
        <RotatingBunny />
      </Container>
    </Stage>
  )
}

export default PixiApp
