import React from "react";
import AppleLogo from "./../../assets/Apple_logo_black.svg.png";
const Download = () => {
	return (
		// <div className="flex flex-col-reverse justify-center md:flex-row md:justify-around mx-auto bg-gray-200 w-[90%] my-10">
		// 	<div className="flex items-center justify-center flex-col">
		// 		<h2 className="mb-3 text-2xl text-black">Simply Way To Order Your Foods</h2>
		// 		<p className="mb-4">Simply Way To Order Your Foods Txt</p>
		// 		<div className="flex my-2">
		// 			<a
		// 				href=""
		// 				className="flex justify-between items-center w-[190px] md:w-[220px] border-2 rounded-full border-black p-4 mr-2 hover:scale-125 duration-500 ease-in-out"
		// 			>
		// 				<div className="svg-icon">
		// 					<svg
		// 						fill="#000000"
		// 						width="30px"
		// 						height="30px"
		// 						viewBox="0 0 512 512"
		// 						xmlns="http://www.w3.org/2000/svg"
		// 					>
		// 						<title>ionicons-v5_logos</title>
		// 						<path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" />
		// 						<path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" />
		// 						<path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" />
		// 						<path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" />
		// 					</svg>
		// 				</div>
		// 				<div className="text">
		// 					<p>Download on the</p>
		// 					<h2>google play</h2>
		// 				</div>
		// 			</a>

		// 			<a
		// 				href=""
		// 				className="flex justify-between items-center w-[190px] md:w-[220px] border-2 rounded-full border-black p-3 mr-2 hover:scale-125 duration-500 ease-in-out"
		// 			>
		// 				<div className="svg-icon">
		// 					<img
		// 						src={AppleLogo}
		// 						alt=""
		// 						className="w-[25px] h-[30px]"
		// 					/>
		// 				</div>
		// 				<div className="text">
		// 					<p>Download on the</p>
		// 					<h2>App store</h2>
		// 				</div>
		// 			</a>
		// 		</div>
		// 	</div>

		// 	<div className="image">
		// 		<img
		// 			src="https://demo.yoyumm.com/images/app-screen.png"
		// 			alt=""
		// 		/>
		// 	</div>
		// </div>
		<div className="py-[calc(1.75rem+1.75vw)] max-md:mt-[100px] max-xl:w-full max-xl:bg-[#eca100]  xl:pb-[8rem] ">
			<div className="md:w-[90%] md:px-5  container mx-auto ">
				<div className="xl:bg-[#eca100]  text-white xl:rounded-t-[30px] xl:py-[4.5rem] xl:pr-[3rem] xl:pl-[7rem] flex max-md:flex-col-reverse justify-between md:max-xl:items-center">
					<div className="max-md:text-center">
						<h2 className="text-[1.875rem] pb-[10px] font-extrabold">Simply Way To Order Your Foods</h2>
						<p className="mb-[1rem]"> Simply Way To Order Your Foods Txt</p>
						<div className="md:pt-[3rem] flex max-md:justify-center items-center">
							<a href="">
								<img
									src="https://demo.yoyumm.com/images/google-playstore.png"
									alt=""
								/>
							</a>
							<a
								href=""
								className="ml-[1.5rem]"
							>
								<img
									src="https://demo.yoyumm.com/images/apple-playstore.png"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div className="max-md:mt-[-160px] xl:my-[-190px] md:pl-[2.5rem]">
						<img
							src="https://demo.yoyumm.com/images/app-screen.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;

// add the color in app store and play store like real logo
