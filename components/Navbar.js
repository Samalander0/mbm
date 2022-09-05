import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  const hasCourse = false;
  
  return (
    <nav>
      <a href="https://www.beyondblocks.club">
        <img src="/media/logo.svg"/>
      </a>
      <div id="nav-links">
        <Link href="dashboard"><button className="btn brown" disabled>Dashboard</button></Link>
        <Link href="about"><button className="btn brown" disabled>About</button></Link>
        <Link href="preview"><button className="btn brown" disabled>Preview</button></Link>
      </div>
      <div id="nav-primary">
        {!user && (
          <Link href="join"><button className="btn green">Login</button></Link>
        )}
        {!hasCourse && (
          <Link href="join"><button className="btn-normal green" disabled>Get The Course</button></Link>
        )}
      </div>
    </nav>
  )
}