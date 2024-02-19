import Image from 'next/image'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import Logo from '../../assets/logo.svg'
export default function Footer() {
  return (
    <>
      <div className="relative flex-col pb-0 sm:pb-10 mt-80 md:mt-[184px] lg:mt-[202px] md:mb-[85px] xl:mb-[91px]  pl-6 lg:px-48 flex justify-between"> {/* Ensure this container is relative */}
        <div className='flex flex-col lg:flex-row lg:gap-48 lg:items-center mb-20'>
          <Image src={Logo} alt="equalizer logo" width={146} height={32}/>
          <p className="mt-10 text-[1rem] font-normal ">
            All rights reserved © Equalizer 2021
            <br /> Have any problems? Contact us via social media or
            <br /> email us at <span className="font-semibold">equalizer@example.com</span>
          </p>
        </div>

        {/* Social Icons Container */}
        <div className="flex md:absolute md:bottom-0 items-center md:right-0 gap-4 mb-24 sm:mb-32 pr-11 lg:pr-48"> {/* This ensures icons are at the bottom right */}
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </a>
        </div>
      </div>
    </>
  );
}
