'use client'
import './tailwind.css'
import Link from 'next/link'
import React from 'react'
import {usePathname} from 'next/navigation';

export default function Navbars() {
    const currentRoute = usePathname();
    return (
      <div className="navbar sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        <li><Link href='/' className={currentRoute === '/' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>home</Link></li>
        <li><Link href='/thoughts' className={currentRoute === '/thoughts' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>thoughts</Link></li>
        <li><Link href='/about' className={currentRoute === '/about' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>about</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl flex flex-row"><img src="/logo.png" alt="geladeri-logo" className="h-8 w-8" />rizkeeps</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
        <li><Link href='/' className={currentRoute === '/' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>home</Link></li>
        <li><Link href='/thoughts' className={currentRoute === '/thoughts' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>thoughts</Link></li>
        <li><Link href='/about' className={currentRoute === '/about' ? 'bg-grey px-4 py-2 rounded-lg text-yellow font-bold' : 'text-white font-regular px-4 py-2'}>about</Link></li>
    </ul>
  </div>
  <div className="navbar-end invisible sm:visible">
    <a className="btn">📪 Contact Me!</a>
  </div>
</div>
    )
}