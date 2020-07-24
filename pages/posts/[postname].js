import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { readingTime, formatDate } from 'lib'
import PostLayout from 'components/PostLayout'
import CodeBlock from 'components/CodeBlock'

export default function BlogPost({ frontmatter, markdownBody, readingTime }) {
  if (!frontmatter) return <></>

  return (
    <PostLayout pageTitle={frontmatter.title}>
      <article className="pt-0 prose md:pt-32">
        <h1>{frontmatter.title}</h1>
        <time dateTime={frontmatter.date} pubdate="pubdate"></time>
        <span className="text-sm font-thin">
          {formatDate(new Date(frontmatter.date))} • {readingTime} read
        </span>
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

  return {
    props: {
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
