import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'PitchBotics',
  description: 'AI sales enablement for commercial junk removal'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}