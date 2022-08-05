import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <title>Clone Twitter</title>
          <meta 
            name='description' 
            content='a twitter clone to better explore my skills 
            and understand how a website works superficially'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
