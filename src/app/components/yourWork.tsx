import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Inter } from "next/font/google"


const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});
const YourWork = () => {
  return (
    <section className='w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#043873]'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center space-y-8 md:space-y-12'>
          <div className={`space-y-6 ${inter.className}`}>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white'>
              Your work, everywhere you are
            </h1>
            <p className='text-base sm:text-lg leading-relaxed text-white max-w-4xl mx-auto'>
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
          </div>
          <button className='inline-flex items-center gap-2 py-4 px-10 rounded-lg bg-[#4F9CF9] hover:bg-[#3d8ae6] transition-colors text-white text-lg font-medium'>
            Try Taskey <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default YourWork