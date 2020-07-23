import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import readingTime from 'lib/readingTime'
import PostLayout from 'components/PostLayout'
import CodeBlock from 'components/CodeBlock'

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  readingTime,
}) {
  if (!frontmatter) return <></>
  return (
    <PostLayout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <article className="prose max-w-none">
        <h1 className="text-center">{frontmatter.title}</h1>
        <span>{readingTime}</span>
        <div>
          <ReactMarkdown
            source={markdownBody}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </article>
    </PostLayout>
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
      readingTime: readingTime(data.content),
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
