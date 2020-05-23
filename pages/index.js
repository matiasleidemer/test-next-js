import matter from 'gray-matter'

import Layout from 'components/Layout'
import PostList from 'components/PostList'

const Index = ({ posts, title, description, ...props }) => (
  <Layout pageTitle={title}>
    <h1 className="title">Welcome to my blog!</h1>
    <p className="description">{description}</p>
    <main>
      <PostList posts={posts} />
    </main>
  </Layout>
)

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    return keys.map((key, index) => {
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
