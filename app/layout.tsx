import '@/scss/index.scss'
import { Analytics } from '@vercel/analytics/react'
import { clsx } from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuzknothz 🥕',
  description: 'Cuzknothz - Web developer based in VietNam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
