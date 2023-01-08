import '../page-styles/globals.css'
import type { AppProps } from 'next/app'
import { Outfit } from '@next/font/google'

const outfit = Outfit()

export default function App({ Component, pageProps }: AppProps) {
  return (
    < div className={outfit.className} >
      <Component {...pageProps} />
    </div >
  )


}
