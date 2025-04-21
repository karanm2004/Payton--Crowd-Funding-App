"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </> absolute top-14 w-48 right-36 
  // }
  return (
    <nav className='bg-black flex flex-col md:flex-row justify-between items-center sticky top-0 z-10 md:h-13 text-white gap-3 md:gap-0 p-5'>
      <Link href="/"><h1 className='font-bold text-2xl pl-2'>Payton</h1></Link>
      <ul className='flex justify-evenly gap-8'>
      
        {/* <li className='mt-2'><Link href="/about">About</Link></li>
        <li className='mt-2'><Link href="/projects">Projects</Link></li> */}

       
        {session && <>
          <button id="dropdownDefaultButton" onClick={()=>setshowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {
            setshowdropdown(false)
          }, 100);}} data-dropdown-toggle="dropdown" type="button" className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Welcome, {session.user.name} 
          </span><svg className="w-2.5 h-2.5 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div
        id="dropdown"
        className={`z-10 ${
          showdropdown ? "" : "hidden"
        } bg-gray-900 divide-y absolute top-14 divide-gray-100 rounded-lg shadow-lg w-48 right-36 text-center`}
      >
        <ul
          className="py-2 text-sm text-white dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-200 ease-in-out"
            >Home
            </Link>
          </li>

          <li>
            <Link
              href={`${session.user.name}`}
              className="block px-4 py-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-200 ease-in-out"
            >Your Page
            </Link>
          </li> 
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-200 ease-in-out"
            >Dashboard
            </Link>
          </li>

             
          
        </ul>
      </div>
        </>}

        {session && <li><button onClick={() => signOut()} className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sign out
          </span></button></li>}

        {!session && <li><Link href={"/login"}><button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
            Login
          </span></button></Link></li>}
      </ul>
    </nav>
  )
}

export default Navbar

