import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { NAV_ITEMS } from '@/constants'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JohnnyScript\'s Dev Portfolio',
  description: 'A modern & minimalist developer portfolio showing the capabilities of JohnnyScript and his previous applications, stacks, etc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={NAV_ITEMS}></FloatingNav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
