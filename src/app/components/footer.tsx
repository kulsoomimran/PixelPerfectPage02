import React from 'react'
import Image from 'next/image';
import Logo from "../public/Logo.png"
import { Inter } from "next/font/google"


const inter = Inter({
    weight: ["500"],
    subsets: ["latin"],
});

const Footer = () => {
    return (
        <footer className='w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#043873]'>
            <div className='max-w-7xl mx-auto'>
                <div className={`${inter.className} flex flex-col space-y-12`}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
                        <div className='space-y-4'>
                            <Image src={Logo} alt='logo' className='w-40 h-auto' />
                            <p className='text-base sm:text-lg leading-relaxed text-white max-w-xs'>
                                whitepace was created for the new ways we live and work.
                                We make a better workspace around the world
                            </p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-bold text-white'>Product</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Overview</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Pricing</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Customer stories</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-bold text-white'>Resources</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Blog</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Guides & tutorials</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Help center</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-bold text-white'>Company</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>About us</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Careers</p>
                            <p className='text-base text-white cursor-pointer hover:text-[#FFE492] transition-colors'>Media kit</p>
                        </div>
                    </div>
                    <div className='pt-8 border-t border-white/20 flex justify-center'>
                        <p className='text-base text-white'>&copy;2021 Whitepace LLC.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer