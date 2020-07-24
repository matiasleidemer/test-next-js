import Layout from 'components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout>
        <article className="prose">
          <h1>About</h1>
          <p>Hello.</p>
          <p>
            My name is Matias Leidemer, I am a software developer based in Novo
            Hamburgo, Brazil. I am currently looking for opportunities, if you
            want to chat, please drop me line: matiasleidemer at gmail.
          </p>
          <p>
            I like to write code that writes code, listen to music, watch movies
            and all kinds of animals.
          </p>
          <p>
            This page is powered by Gatsby, with the lumen theme and hosted
            using Netlify.
          </p>
          <p>
            If you feel like talking to me, you can use one of the social links
            at the left of this page.
          </p>
        </article>
      </Layout>
    </>
  )
}

export default About
