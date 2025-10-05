import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S2H4 - Smokeless Wellness Inhalers',
  description: 'Experience natural wellness with S2H4 smokeless inhalers. Breathe in pure, natural oil flavors for a refreshing and healthy experience.',
  keywords: 'smokeless inhalers, wellness, natural oils, breathing, healthy lifestyle',
  authors: [{ name: 'S2H4 Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
