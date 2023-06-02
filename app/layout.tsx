'use client'
import './globals.scss'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'
import { Canvas, useFrame } from '@react-three/fiber'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuzknothz 🥕',
  description: 'Cuzknothz | Web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)} suppressHydrationWarning={true}>
        <Canvas
          className="[&>div]:!w-screen [&>div]:!h-screen"
          camera={{
            position: [5, 5, -5],
            fov: 75,
          }}
        >
          {children}
        </Canvas>
      </body>
    </html>
  )
}
