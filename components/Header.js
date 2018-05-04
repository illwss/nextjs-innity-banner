import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul>
      <Link href='/'>
      <a style={linkStyle}>
        <li> Home </li>
      </a>
      </Link>
      <Link href='/mobilecard'>
      <a style={linkStyle}>
        <li> Clientside Routing to Page B </li>
      </a>
      </Link>
      <a href='/mobilecard' style={linkStyle}>
        <li> Serverside Routing to Page B </li>
      </a>
      <a href='/mobileslider' style={linkStyle}>
        <li> Mobile Slider to Page C </li>
      </a>
      <a href='/mobilegrow' style={linkStyle}>
        <li> Mobile Grow to Page D </li>
      </a>
      <a href='/mobileunderlay' style={linkStyle}>
        <li> Mobile Underlay to Page E </li>
      </a>
      <a href='/mobilecude' style={linkStyle}>
        <li> Mobile Cude to Page F </li>
      </a>
      <a href='/mobilespin' style={linkStyle}>
        <li> Mobile Spin to Page G </li>
      </a>
      <a href='/mobilescroll' style={linkStyle}>
        <li> Mobile Scroll to Page H </li>
      </a>
    </ul>
  </div>
)

export default Header
