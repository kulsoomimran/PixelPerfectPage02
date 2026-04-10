import React from "react";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});
export default function Customise() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${inter.className}`}>
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col justify-center w-full lg:w-auto">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#212529]">
                Customise it to your needs
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#212529] max-w-2xl">
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
            </div>
            <div className="mt-8 md:mt-12">
              <button className="inline-flex items-center gap-2 py-4 px-8 rounded-md bg-[#4F9CF9] text-white text-lg font-medium hover:bg-[#3d8ae6] transition-colors">
                Let&apos;s Go <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right side - Image/Illustration block */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center">
            <div className="w-full aspect-[3/2] max-w-2xl bg-[#C4DEFD] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}