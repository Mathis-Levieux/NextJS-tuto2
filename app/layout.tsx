import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from "./components/Header"

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Traversy Media',
  description: 'Web Development tutorials and courses',
  keywords: 'web development, web design, javascript, react'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
