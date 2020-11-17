import Head from 'next/head'
import Headline from './Headline'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>matiasleidemer.dev</title>
      </Head>

      <section className="container max-w-screen-sm p-4 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <Headline />
            <div className="my-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
