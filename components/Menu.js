import Link from 'next/link'
import { Github, Twitter, Rss, Mail, Id, Home } from 'components/icons'
import Briefcase from './icons/Briefcase'

const IconLink = ({ children }) => (
  <div className="w-6 h-6 hover:text-gray-800">{children}</div>
)

export default function Menu() {
  return (
    <div className="flex text-lg text-gray-600 justify-evenly">
      <IconLink>
        <Link href="/">
          <a>
            <Home />
          </a>
        </Link>
      </IconLink>
      <IconLink>
        <Link href="/about">
          <a>
            <Id />
          </a>
        </Link>
      </IconLink>
      <IconLink>
        <a href="https://www.linkedin.com/in/matiasleidemer/" alt="Linkedin">
          <Briefcase />
        </a>
      </IconLink>
      <IconLink>
        <a href="https://www.github.com/matiasleidemer" alt="Github">
          <Github />
        </a>
      </IconLink>
      <IconLink>
        <a href="https://www.twitter.com/matiasleidemer" alt="Twitter">
          <Twitter />
        </a>
      </IconLink>
      <IconLink>
        <a href="mailto:matiasleidemer@gmail.com" alt="E-mail">
          <Mail />
        </a>
      </IconLink>
      <IconLink>
        <a href="https://www.twitter.com/matiasleidemer" alt="Rss">
          <Rss />
        </a>
      </IconLink>
    </div>
  )
}
