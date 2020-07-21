import Link from 'next/link'

const PostLink = ({ post }) => {
  return (
    <li key={post.slug}>
      <div className="flex flex-col py-1 leading-6">
        <Link href="/posts/[postname]" as={`/posts/${post.slug}`}>
          <a className="text-2xl font-extrabold">{post.frontmatter.title}</a>
        </Link>
        <span className="text-sm font-thin">1-ago-2019</span>
      </div>
    </li>
  )
}

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts.map((post) => (
          <PostLink post={post} />
        ))}
      </ul>
    </div>
  )
}
