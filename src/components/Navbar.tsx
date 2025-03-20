'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[#0D7377] p-4">
      <div className="flex justify-between items-center max-w-[1238px] mx-auto">
        <div>
          <h1 className="text-[#D4D4D4] font-bold text-[2.2rem] font-(family-name:--font-montserrat) ">Aninex</h1>
        </div>
        <nav>
          <ul className="flex justify-between items-center gap-5">
            <li><Link className={`text-[#D4D4D4] text-[1.1rem] ${pathname === '/' && "font-bold border-b-4 border-b-[#FF567F] transition ease-in-out delay-150 duration-300"}`} href="/">Home</Link></li>
            <li><Link className={`text-[#D4D4D4] text-[1.1rem] ${pathname === '/favorites' && "font-bold border-b-4 border-b-[#FF567F]"}`} href="/favorites">Favorites</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}