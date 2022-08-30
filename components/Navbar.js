import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src="/media/logo.svg"/>
      </div>
      <div id="nav-links">
        <Link href="dashboard"><button className="btn brown" disabled>Dashboard</button></Link>
        <Link href="about"><button className="btn brown" disabled>About</button></Link>
        <Link href="preview"><button className="btn brown" disabled>Preview</button></Link>
      </div>
      <div id="nav-primary">
        <Link href="join"><button className="btn green" disabled>Login</button></Link>
        <Link href="join"><button className="btn-normal green" disabled>Get The Course</button></Link>
      </div>
    </nav>
  )
}