import './globals.css'

import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Car hub',
  description: 'Découvrez les meilleures voitures du marché',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}