import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className="nav-item-container">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="nav-item-container">
        <a>About</a>
        <a>Contact</a>
        <a>Help</a>
      </div>
    </nav>
  )
}

export default Navbar
