import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <div className="container max-w-screen-sm p-6 mx-auto">
        <section>{children}</section>
        <hr className="my-8" />
        <footer>
          <Link href="/">
            <a>Back to blog</a>
          </Link>
        </footer>
      </div>
    </>
  )
}
