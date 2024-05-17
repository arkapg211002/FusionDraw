
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

function Header() {
  return (
    <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo-1.png' alt='logo'
    width={100}
    height={100}
    />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-black transition hover:text-gray-400" href="https://arkapg211002.github.io/" target="_blank"> <InfoIcon /><b> About</b> </a>
          </li>

          <li>
            <a className="text-black transition hover:text-gray-400/75" href="https://github.com/arkapg211002" target="_blank"> <GitHubIcon/> GitHub </a>
          </li>

          <li>
            <a className="text-black transition hover:text-gray-400/75" href="https://www.linkedin.com/in/arkapratim-ghosh21102002/" target="_blank"> <LinkedInIcon/> LinkedIn </a>
          </li>

        
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <div
            className="block rounded-md  px-5 py-2.5 text-sm font-medium 
            text-black transition hover:bg-slate-300"
           
          >
            <LoginLink postLoginRedirectURL="/dashboard">  <LoginRoundedIcon/><b> Login</b></LoginLink>
          </div>

          <div
            className="hidden rounded-md bg-gray-100 
            px-5 py-2.5 text-sm font-medium
             text-black transition hover:bg-slate-600
              hover:text-white sm:block"
           
          >
          <RegisterLink><HowToRegRoundedIcon/>  Register</RegisterLink>  
          </div>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header