import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="container max-w-screen-sm mx-auto">
        <Header />
        <div className="content-center">{children}</div>
      </section>
    </>
  )
}
