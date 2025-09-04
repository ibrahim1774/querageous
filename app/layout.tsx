import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Made Man Barbershop - Best Men\'s Haircut Near You | NYC',
  description: 'Experience affordable and unmatched craftsmanship at Manhattan\'s finest barbershop. Multiple locations across NYC with expert barbers and premium services.',
  keywords: 'barbershop, men haircut, NYC, Manhattan, barber, grooming, fade, beard trim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
