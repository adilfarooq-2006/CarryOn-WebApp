"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowDropDown] = useState(false)

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
    <nav className='w-full flex justify-between items-center p-4 md:p-4 md:px-20 bg-black text-white'>
      <div className="logo">
        CarryOn
      </div>
      <ul className='md:flex hidden md:gap-4'>
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
        id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#4E36E8] hover:bg-[#4536e8]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm text-xs md:px-5 px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
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
      </div>
    </nav>

    <button onClick={() => setIsOpen(!isOpen)} className='w-full md:hidden flex justify-between items-center px-4 md:p-4 md:px-20 bg-black  text-white'>
      <Image width={30} height={30} src="/icons/hamburger.svg" alt="" />
    </button>
    <div className={`fixed top-0 left-0 h-full z-50 w-[280px] bg-neutral-900 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
       <ul onClick={() => setIsOpen(!isOpen)} className=' p-5 text-2xl text-white flex flex-col gap-5 mt-10'>
        <Image width={30} height={30} src="/icons/cross.svg" alt="" />
        <Link href="/"><li>Home</li></Link>
        <Link href='#creators'>Creators</Link>
        <Link href= "/about"><li>About us</li></Link>
        <Link href="/contactus">Contact us</Link>
      </ul>
    </div>
    
    </>
  )
}

export default Navbar