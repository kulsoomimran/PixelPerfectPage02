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
    <>
      <div className='w-[1920px] h-[574px] py-[140px] px-[220px]'>
        <div className='w-[1481px] h-[294px] gap-[60px] flex flex-col items-center '>
          <div className='w-[1482px] h-[87px] '>
            <h1 className={`${inter} font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center text-[#212529]`}>Our sponsors</h1>
          </div>
          <div className='w-[1482px] h-[71px] flex justify-evenly list-none items-center'>
            <li><Image src={Apple} alt='Apple Logo' /></li>
            <li><Image src={Microsoft} alt='Microsoft Logo' /></li>
            <li><Image src={Slack} alt='Slack Logo' /></li>
            <li><Image src={Google} alt='Google Logo' /></li>
          </div>
        </div>
      </div>

    </>
  )
}

export default OurSponsors