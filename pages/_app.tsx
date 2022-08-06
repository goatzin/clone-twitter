import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/layout'
import ThemeProvider from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clone Twitter</title>
        <meta
          name='description'
          content='a twitter clone to better explore my skills 
            and understand how a website works superficially'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
