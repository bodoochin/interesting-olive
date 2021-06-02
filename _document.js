import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    {
    return (
      <Html>
        <Head /> 
      <script data-ad-client="ca-pub-2046685359059262" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
