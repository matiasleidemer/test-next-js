import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a>My Blog</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </header>
    </>
  )
}
