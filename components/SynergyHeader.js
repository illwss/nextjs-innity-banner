import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <Link href='/synergy'>
      <a style={linkStyle}>
        <li> Synergy Home </li>
      </a>
      </Link>
      <Link href='/synergysecond'>
      <a style={linkStyle}>
        <li> Clientside Routing to Page Second </li>
      </a>
      </Link>
      <a href='/synergysecond' style={linkStyle}>
        <li> Serverside Routing to Page Second </li>
      </a>
    </ul>
  </div>
)

export default Header
