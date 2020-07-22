import Head from 'next/head'

export default function PostLayout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <div className="container max-w-screen-sm p-6 mx-auto">
        <section>{children}</section>
        <footer>Built by me!</footer>
      </div>
    </>
  )
}
