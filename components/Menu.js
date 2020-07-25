import Link from 'next/link'
import { Github, Twitter, Rss } from 'components/icons'
import Briefcase from './icons/Briefcase'

const IconLink = ({ children }) => (
  <div className="w-6 h-6 hover:text-gray-900">{children}</div>
)

export default function Menu() {
  return (
    <div className="flex text-lg text-gray-700 justify-evenly">
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
        <a href="https://www.twitter.com/matiasleidemer" alt="Rss">
          <Rss />
        </a>
      </IconLink>
    </div>
  )
}
