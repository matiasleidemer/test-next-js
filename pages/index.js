import Layout from 'components/Layout'
import Menu from 'components/Menu'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout>
        <article className="prose">
          <p>
            Hello, I am a software developer based in Novo Hamburgo, Brazil. I
            am currently working at{' '}
            <a href="https://www.stickermule.com">Stickermule</a>.
          </p>
          <p>
            I like to play the guitar, listen to music, watch movies and all
            kinds of animals.
          </p>
          <p>
            If you feel like talking to me, you can use one of the social links
            at the left of this page. Or you can drop me line on matiasleidemer
            at gmail.
          </p>
        </article>
        <Menu />
      </Layout>
    </>
  )
}

export default About
