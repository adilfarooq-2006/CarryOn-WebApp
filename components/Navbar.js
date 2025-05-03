"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowDropDown] = useState(false)

  return (
    <nav className='flex justify-between items-center md:p-4 md:px-20 bg-black text-white'>
      <div className="logo">
        CarryOn
      </div>
      <ul className='flex gap-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href='#creators'>Creators</Link>
        <Link href= "/about"><li>About us</li></Link>
        <Link href="/contactus">Contact us</Link>
      </ul>
      <div className="buttons flex gap-3">
        {session && 
        <>
        <button 
        onClick={()=>setShowDropDown(!showdropdown)} 
        onBlur={()=>setTimeout(() => {
          setShowDropDown(false)
        }, 300)} 
        id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#4E36E8] hover:bg-[#4536e8]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y absolute top-17 divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="/" onClick={() => signOut({ callbackUrl: '/' })}  className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }
        {!session && <Link href="/login"><button className="login bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100  p-2 px-4 rounded-full font-medium hover:cursor-pointer">Login</button></Link>}
        {!session &&
          <button className="signup bg-white text-black p-2 px-4 rounded-full font-medium hover:cursor-pointer">Sign up</button>}
      </div>
    </nav>
  )
}

export default Navbar