import './globals.css'

export const metadata = {
  title: 'Hoolo - Where Little Ones Hoot with Joy',
  description: 'The safest most magical children\'s streaming and education platform. Zero ads. 100% safe. Ages 0-10.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
