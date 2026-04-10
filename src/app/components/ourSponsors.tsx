import React from 'react'
import { Inter } from "next/font/google"
import Image from "next/image";
import Apple from "../public/Apple.png"
import Microsoft from "../public/Microsoft.png"
import Slack from "../public/Slack.png"
import Google from "../public/Google.png"

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});
const OurSponsors = () => {
  return (
    <section className='w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center space-y-12 md:space-y-16'>
          <h1 className={`${inter.className} font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[#212529]`}>
            Our sponsors
          </h1>
          <ul className='w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 list-none'>
            <li className='flex-shrink-0'><Image src={Apple} alt='Apple Logo' className='h-8 md:h-12 w-auto' /></li>
            <li className='flex-shrink-0'><Image src={Microsoft} alt='Microsoft Logo' className='h-8 md:h-12 w-auto' /></li>
            <li className='flex-shrink-0'><Image src={Slack} alt='Slack Logo' className='h-8 md:h-12 w-auto' /></li>
            <li className='flex-shrink-0'><Image src={Google} alt='Google Logo' className='h-8 md:h-12 w-auto' /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurSponsors