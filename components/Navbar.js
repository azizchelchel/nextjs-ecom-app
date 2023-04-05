import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/router"
const Navbar = () => {
  const router = useRouter();
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container"> 
                    <Link legacyBehavior href="/">
                      <Image src="/cart.png" alt="icon" height="40" width="40" />
                    </Link>
                    <h2 style={{color: "white", marginLeft: "10px"}}>mynextapp</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item ">
                          <Link legacyBehavior href='/'>
                        <a className={"nav-link "+`${ router.pathname === "/" ? "active" : ""}`} aria-current="page" >Home</a>
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link legacyBehavior href='/about'>
                        <a className={"nav-link "+`${ router.pathname === "/about" ? "active" : ""}`} >About</a>

                          </Link>
                        </li>
                        <li className="nav-item ">
                        <Link legacyBehavior href='/blog'>
                        <a className={"nav-link "+`${ router.pathname === "/blog" ? "active" : ""}`} >Blog</a>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
    </header>
  )
}
export default Navbar