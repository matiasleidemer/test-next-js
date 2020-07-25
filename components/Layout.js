import Head from 'next/head'
import Link from 'next/link'

import Menu from './Menu'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>matiasleidemer.dev</title>
      </Head>

      <section className="container max-w-screen-sm p-4 mx-auto">
        <div className="flex text-lg font-semibold text-gray-800">
          <div className="mr-6 underline hover:no-underline">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="mr-6 underline hover:no-underline">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className="ml-auto underline hover:no-underline">
            <a>Rss</a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full">
            <div className="my-8 text-center md:my-24">
              <img
                src="profile-pic.jpg"
                className="w-32 h-32 p-2 mx-auto border-4 border-gray-800 rounded-full"
              ></img>
              <h1 className="text-3xl font-extrabold">MATIAS LEIDEMER</h1>
              <p className="mx-1 text-lg font-hairline text-center text-gray-600">
                My name is Matias. I write code that writes code
              </p>
            </div>
            <div className="my-12">{/* <Menu /> */}</div>
            <div className="my-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
