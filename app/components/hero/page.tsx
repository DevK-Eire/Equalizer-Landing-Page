import logo from "../../assets/logo.svg";
import Patternone from "../../assets/bg-pattern-1.svg";

import Image from 'next/image'
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between w-full">
        <div className="flex flex-col pl-10 pt-4 sm:pl-1 sm:pt-8 md:pl-40 md:pt-16">
          <Image src={logo} alt="Equalizer Logo" width={146.09} height={32} className="relative pl-5" />
          <div className="mt-8 w-[327px] h-[320px] sm:w-[520px] sm:h-[332px] xl:w-[1015px] xl:h-[176px] py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 md:w-3/4">
            <div className="mt-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"></div>
              <div className="text-content">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">We make your music sound extraordinary.</h1>
                  <p className="mt-4 text-base sm:text-[16px] md:text-xl lg:text-2xl">A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:bg-pattern bg-no-repeat bg-right-top w-full sm:h-70 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-contain">

        </div>
      </div>
    </div>
  );
}

