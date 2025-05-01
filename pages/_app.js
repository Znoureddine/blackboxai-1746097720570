import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>دورة الهشاشة النفسية و الصلابة النفسية - مؤسسة وين</title>
        <meta name="description" content="دورة حضورية: الهشاشة النفسية و الصلابة النفسية - مؤسسة وين" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
