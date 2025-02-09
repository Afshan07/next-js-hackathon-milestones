import Image from "next/image"
import Link from "next/link"
export default function Header (){
  return (
    
    <header>
      {/* left-section-logo */}
      <div className="logo">
      
        <Image src="/header-logo.png" 
               alt="header-logo"
             width={100}
            height={100}
           />
      </div>

      {/* right-section-nav-links */}

      <nav>
        <ul className="nav-links">
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="./about/" target="_blank">About</Link>
          </li>
          <li>
            <Link href="./skills/" target="_blank">Skills</Link>
          </li>
          <li>
            <Link href="./contact/" target="_blank">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}




