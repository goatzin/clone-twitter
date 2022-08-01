import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/layout'
import ThemeProvider from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
