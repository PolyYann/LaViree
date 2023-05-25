import '../globals.css'

export const metadata = {
  title: 'La virée des Ateliers',
  description: 'La virée des Ateliers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
