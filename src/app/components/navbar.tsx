import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.png'

import { DM_Sans } from "next/font/google";
import { Inter } from "next/font/google"

const Dmsans = DM_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
})
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});


const Navbar = () => {
  return (
    <nav className='w-full py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#043873]'>
      <div className='max-w-7xl mx-auto flex justify-between items-center gap-4'>
        <Image src={Logo} alt='logo' className='w-32 sm:w-40 md:w-48 h-auto' />
        <div className='flex items-center gap-4 md:gap-8 lg:gap-12'>
          <ul className={`hidden lg:flex list-none ${Dmsans.className} text-white gap-6 xl:gap-8 text-base lg:text-lg font-medium items-center`}>
            <li className="cursor-pointer hover:text-[#FFE492] transition-colors">Products</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition-colors">Solutions</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition-colors">Resources</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition-colors">Pricing</li>
          </ul>
          <button className='rounded-lg py-3 px-6 md:py-4 md:px-10 bg-[#FFE492] hover:bg-[#ebac4e] transition-colors'>
            <p className={`font-medium text-base md:text-lg ${inter.className} text-[#043873]`}>Login</p>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar