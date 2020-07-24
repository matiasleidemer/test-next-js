import Link from 'next/link'
import { formatDate } from 'lib'

const PostLink = ({ post }) => (
  <li>
    <div className="flex flex-col py-4 leading-6">
      <Link href="/posts/[postname]" as={`/posts/${post.slug}`}>
        <a className="text-xl font-semibold text-gray-700">
          {post.frontmatter.title}
        </a>
      </Link>
      <span className="text-sm font-thin text-gray-600">
        {formatDate(new Date(post.frontmatter.date))}
      </span>
    </div>
  </li>
)

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts.map((post) => (
          <PostLink post={post} key={post.slug} />
        ))}
      </ul>
    </div>
  )
}
