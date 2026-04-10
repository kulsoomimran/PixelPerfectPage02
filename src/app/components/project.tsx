import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import image from "../public/Work Together Image.png";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Project = () => {
  return (
    <section className='w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white'>
      <div className='max-w-7xl mx-auto space-y-16 md:space-y-24 lg:space-y-32'>
        {/* Project Management Section */}
        <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${inter.className}`}>
          <div className='flex-1 flex flex-col justify-center w-full lg:w-auto'>
            <div className='space-y-6'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#212529]'>
                Project Management
              </h1>
              <p className='text-base sm:text-lg leading-relaxed text-[#212529] max-w-2xl'>
                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </p>
            </div>
            <div className='mt-8 md:mt-12'>
              <button className='inline-flex items-center gap-2 py-4 px-8 rounded-md bg-[#4F9CF9] hover:bg-[#3d8ae6] transition-colors text-white text-lg font-medium'>
                Get Started <FaArrowRight />
              </button>
            </div>
          </div>

          <div className='flex-1 w-full lg:w-auto flex items-center justify-center'>
            <div className='w-full aspect-[3/2] max-w-2xl bg-[#C4DEFD] rounded-lg'></div>
          </div>
        </div>

        {/* Work Together Section */}
        <div className={`flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16 ${inter.className}`}>
          <div className='flex-1 flex flex-col justify-center w-full lg:w-auto'>
            <div className='space-y-6'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#212529]'>
                Work together
              </h1>
              <p className='text-base sm:text-lg leading-relaxed text-[#212529] max-w-2xl'>
                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
              </p>
            </div>
            <div className='mt-8 md:mt-12'>
              <button className='inline-flex items-center gap-2 py-4 px-8 rounded-md bg-[#4F9CF9] hover:bg-[#3d8ae6] transition-colors text-white text-lg font-medium'>
                Try it now <FaArrowRight />
              </button>
            </div>
          </div>

          <div className='flex-1 w-full lg:w-auto flex items-center justify-center'>
            <div className='w-full max-w-2xl'>
              <Image src={image} alt="Work Together" className='w-full h-auto rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;