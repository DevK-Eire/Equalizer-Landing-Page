
import Image from "next/image";
import phone from "../../assets/illustration-app.png";
import AppleIcon from "../../assets/icon-apple.svg";
import AndroidIcon from "../../assets/icon-android.svg";
import Patterntwo from "../../assets/bg-pattern-2.svg";


export default function Page() {
  return (
    <div
					className="main-card mt-96 md:mx-auto rounded-lg relative flex justify-end sm:w-full lg:w-4/5">
					<div
						className="md:mx-auto mr-96 max-w-4xl md:px-4 md:py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
						<Image
							src= {phone}
							className="md:w-72 w-48 absolute -top-52 left-28 z-40"
							alt="Phone image 10db" />
						<Image
							src={Patterntwo}
							className="absolute md:inset-x-80 left-8 top-0 md:-top-12 z-0"
							alt="Pattern two for background"/>

						<div
							className="premium-eq rounded-lg md:flex md:flex-col md:absolute w-fit md:w-96 md:z-40 lg:w-2/5 md:h-full absolute lg:right-32 md:right-20 md:-bottom-24 -bottom-44 h-auto">
							<h1
								className="text-white md:pt-12 pt-8 pl-16 md:pb-8 pb-2 text-4xl font-bold">
								Premium EQ
							</h1>

							<p className="text-white px-16 leading-8">
								Get expert-level control with a robust equalizer, volume mixer,
								and spatial audio. Take your listening experience to a whole new
								level and access all our incredible features!
							</p>

							<div className="pt-4 pl-14 md:pb-8 pb-2 text-white relative">
								<p className="text-6xl relative">
									$4 <span className="text-sm absolute top-5">/ month</span>
								</p>
							</div>

							<div className="flex flex-col gap-2 mx-12 pb-8">
								<button
									className="bg-black ios-icon py-4 rounded-xl text-white flex flex-row justify-center">
									<span
										><Image className="mr-2" src= {AppleIcon} alt=" Apple Icon"
									/></span>
									IOS Download
								</button>
								<button
									className="bg-white android-icon py-4 rounded-xl text-black flex flex-row justify-center">
									<span
										><Image className="mr-2" src= {AndroidIcon} alt="Android Icon"
									/></span>
									Android Download
								</button>
							</div>
						</div>
					</div>
				</div>
  )
}
