import './globals.css'
import Blobs from './components/Blobs'

export const metadata = {
  title: "In Limbo",
  description: 'Made by Kyle Tandoc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico'/>
      </head>
      <body className="bg-stone-900">
        {children}
      </body>
    </html>
  )
}
