import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li> <Link href="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  )
}