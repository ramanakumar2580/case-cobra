import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { constructMetadata } from '@/lib/utils'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import Providers from '@/components/Providers'


const recursive = Recursive({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={recursive.className}>
        <main className='flex flex-col min-h-[calc(100vh-3.5rem-1px)]'>
        <Navbar />
        <div className='flex-1 flex flex-col h-full' >
          <Providers >
          {children}
          </Providers>
          
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}
