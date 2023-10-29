import Navbar from '@/components/Navbar/Navbar'
import { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: 'AI-BABA | Home',
  description: 'You are home',
}
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            {/* <Navbar /> */}
            {children}</body>
      </html>
    )
  }