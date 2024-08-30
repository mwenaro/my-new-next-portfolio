import { Favicon, Footer, Header } from '@/components'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Wrapper from '@/components/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mwero's Portfolio",
  description:
    'Portfolio App, built with Next.js, TypeScript and framer motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
        <Favicon />
      </head>
      <body className={inter.className}>
        {/* include wrapper herfe */}
        <Wrapper>{children}</Wrapper>
        <Toaster
          position='top-right'
          toastOptions={{
            classNames: {
              title: 'primary-text',
            },
          }}
        />
      </body>
    </html>
  )
}
