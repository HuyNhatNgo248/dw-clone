import React from 'react'
import '../globals.css'

export const metadata = {
  description: 'Daniel Wellington',
  title: 'Daniel Wellington',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
