'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'home' },
  { href: '/work', label: 'work' },
  { href: '/services', label: 'services' },
  { href: '/about', label: 'about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    isActive(href)
      ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold'
      : 'text-white font-normal px-4 py-2 hover:text-yellow transition-colors'

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-blackbg/80 backdrop-blur">
      <nav className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] gap-1 p-2 shadow rounded-box w-52 bg-greycard">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass(l.href)}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-yellow font-bold px-4 py-2">📪 contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl flex flex-row items-center gap-2 text-white">
            <Image src="/logo.png" alt="rizkeeps logo" width={32} height={32} className="h-8 w-8" />
            rizkeeps
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass(l.href)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/contact"
            className="rounded-lg bg-yellow px-4 py-2 font-bold text-blackbg transition-opacity hover:opacity-90"
          >
            📪 Contact Me!
          </Link>
        </div>
      </nav>
    </header>
  )
}
