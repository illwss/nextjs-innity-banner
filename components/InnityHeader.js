import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const renderPages = (pages) => {
  let index = "a".charCodeAt(0)
  const getAlphabet = () =>{
    return String.fromCharCode(index++).toLocaleUpperCase()
  }

  return pages.map((p,idx)=>(
  <div id={idx}>
  <a href={`/${p}`} style={linkStyle}>
  <li>{require(`../pages/${p}`).title(getAlphabet())}</li>
  </a></div>))
}

const Header = () => (
  <div>
    <ul>
      <Link href='/innity'>
      <a style={linkStyle}>
        <li> Home Innity </li>
      </a>
      </Link>
     {renderPages([
      'innity_welcome_video',
      'innity_mobile_otp',
      'innity_mobile_spin',
      'innity_mobile_mfv',
      'innity_desktop_otp'
    ])}
    </ul>
  </div>
)

export default Header
