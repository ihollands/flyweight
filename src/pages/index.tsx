import Image from 'next/image'
import { Inter } from 'next/font/google'

import AppHero from '@/components/AppHero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <AppHero />
    </div>
  )
}
