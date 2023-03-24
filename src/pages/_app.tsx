import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  let x: string = 1;
  x = 2;
  console.log(x)
  return <Component {...pageProps} />
}
