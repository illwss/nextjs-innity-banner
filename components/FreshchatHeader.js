import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <Link href='/freshchat'>
      <a style={linkStyle}>
        <li> Fresh chat Home </li>
      </a>
      </Link>
      <Link href='/freshchatsecond'>
      <a style={linkStyle}>
        <li> Clientside Routing to Page Second </li>
      </a>
      </Link>
      <a href='/freshchatsecond' style={linkStyle}>
        <li> Serverside Routing to Page Second </li>
      </a>
    </ul>
  </div>
)

export default Header
