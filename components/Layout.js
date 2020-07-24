import Head from 'next/head'
import Menu from './Menu'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>matiasleidemer.dev</title>
      </Head>
      <section className="container max-w-screen-sm mx-auto">
        <div className="flex flex-col items-center max-w-screen-sm px-4 mx-auto">
          <div className="w-full">
            <div className="mt-8 text-center lg:mt-32">
              <img
                src="https://pbs.twimg.com/profile_images/1212795685151674368/im8jhmJP_400x400.jpg"
                className="w-32 h-32 p-2 mx-auto border-4 border-gray-800 rounded-full "
              ></img>
              <h1 className="text-3xl font-extrabold">MATIAS LEIDEMER</h1>
              <p className="mx-1 text-lg font-thin text-center text-gray-600">
                My name is Matias. I write code that writes code
              </p>
            </div>
            <div className="my-12">
              <Menu />
            </div>
            <hr />
            <div className="my-12">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
