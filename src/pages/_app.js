import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="widht=device-width, initial-scale=1" />
        <link rel="shortcut icon" href='../fav/favicon1.ico' />
      </Head>
      <main className={`${montserrat.variable} font-mont pt-24 md:pt-20 bg-white min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>

  )
}
