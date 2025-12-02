export const metadata = {
  title: 'Side Hustle Starter',
  description: 'Your side hustle application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
