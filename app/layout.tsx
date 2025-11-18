import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


export const metadata: Metadata = {
  title: 'KIMANA Pacifique - Software Engineer & Social Media Specialist',
  description: 'Portfolio of KIMANA Pacifique, Software Engineer and Social Media Marketing Specialist at Micorp.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
