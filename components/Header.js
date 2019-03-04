import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <a href='/freshchat' style={linkStyle}>
        <li> Fresh Chat </li>
      </a>
      <a href='/innity' style={linkStyle}>
        <li> Innity </li>
      </a>
      <a href='/innityadzone' style={linkStyle}>
        <li> Innity : Mobile Cards Spin (Ad zone) </li>
      </a>
      <a href='/synergy' style={linkStyle}>
        <li> Synergy </li>
      </a>
    </ul>
  </div>
)

export default Header
