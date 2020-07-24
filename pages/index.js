import matter from 'gray-matter'

import PostList from 'components/PostList'
import Layout from 'components/Layout'

const Index = ({ posts }) => (
  <Layout>
    <PostList posts={posts} />
  </Layout>
)

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    return keys.map((_, index) => {
      const value = values[index]
      const document = matter(value.default)

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug: document.data.slug,
      }
    })
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts: sortPosts(posts),
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

const sortPosts = (posts) =>
  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )
