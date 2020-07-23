import matter from 'gray-matter'

import PostList from 'components/PostList'

const Index = ({ posts, title, description, ...props }) => (
  <div className="container flex flex-col items-center content-center max-w-full px-4 mx-auto border-2 border-red-500 ">
    <img
      src="https://pbs.twimg.com/profile_images/1212795685151674368/im8jhmJP_400x400.jpg"
      className="w-32 h-32 p-2 mx-auto mt-8 border-4 border-gray-800 rounded-full lg:mt-32"
    ></img>
    <h1 className="text-3xl font-extrabold">MATIAS LEIDEMER</h1>
    <p className="mx-1 text-lg font-thin text-center">{description}</p>

    <div className="py-8">
      <PostList posts={posts} />
    </div>
  </div>
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
