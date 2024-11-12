import React from "react";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});
export default function Customise() {
  return (
    <>
      <div className='w-[1920px] h-[900px] 1588  py-[140px] px-[220px] flex flex-col gap-[100px]'>
        <div className={`w-[1480px] h-[547px] flex items-center ${inter.className} gap-[60px] `}>
          <div className='w-[672px] h-[411px]  gap-[60px] '>
            <div className="w-[700px] h-[288px] gap-6">
              <h1 className='w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]' >Customise it
                to your needs</h1>
              <p className='w-[672px] pt-6 h-[90px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            <div>
              <button className='w-[210px] h-[63px] py-[20px] px-[40px] gap-[10px] mt-[60px] rounded-md bg-[#4F9CF9]  '>
                <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Let&apos;s Go <FaArrowRight /></p></button>
            </div>
          </div>
          <div className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'></div>
        </div>
      </div>
    </>

  )
}