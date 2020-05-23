import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from 'components/Layout'
import CodeBlock from 'components/CodeBlock'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Back to post list</a>
      </Link>

      <article>
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown
            source={markdownBody}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = ((context) => {
    const values = context.keys().map(context)

    return values.find((value) => matter(value.default).data.slug === postname)
  })(require.context('../../posts', true, /\.md$/))

  const data = matter(content.default)
  const { title } = await import(`../../siteconfig.json`)

  return {
    props: {
      siteTitle: title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    return keys.map((key, index) => {
      const frontMatter = matter(values[index].default)
      return frontMatter.data.slug
    })
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
