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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
