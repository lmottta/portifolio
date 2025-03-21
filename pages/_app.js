import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leonardo Mota | Portfólio</title>
        <meta name="description" content="Portfólio curricular de Leonardo Mota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp 