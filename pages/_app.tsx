import '../page-styles/globals.css'
import type { AppProps } from 'next/app'
import { Outfit } from '@next/font/google'
import MainLayout from '../layouts/main-layout'

const outfit = Outfit()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={outfit.className} >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div >
  )


}
