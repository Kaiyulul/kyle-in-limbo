import './globals.css'
import Navbar from './components/Navbar'
import Blobs from './components/Blobs'

export const metadata = {
  title: "Kyle In Limbo",
  description: 'Made by Kyle Tandoc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <Navbar/>
        {/* <Blobs/> */}
        {children}
      </body>
    </html>
  )
}
