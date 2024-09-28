// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ImageForTrial from "./../../assets/images-1.jpg";
// import ImageNoFoodPicture from "./../../assets/450.svg";
// import { dataCountry } from "../../exportall";

// const CountryFood = ({ showMenuBar }: { showMenuBar: boolean }) => {
// 	const [activeButton, setActiveButton] = useState("Hadrid");
// 	const [width, setWidth] = useState<number>(124);
// 	const [distance, setDistance] = useState(0);

// 	const handleButtonClick = (city: string) => {
// 		setActiveButton(city);
// 	};

// 	useEffect(() => {
// 		const elementBtn = document.getElementById(`${activeButton}-${dataCountry.indexOf(activeButton)}`);
// 		const container = document.getElementById("card_title");
// 		if (elementBtn && container) {
// 			const btnRect = elementBtn.getBoundingClientRect();
// 			const containerRect = container.getBoundingClientRect();
// 			setWidth(btnRect.width);
// 			setDistance(btnRect.left - containerRect.left);
// 		}
// 	}, [activeButton]);

// 	const images = [ImageForTrial, ImageForTrial, ImageForTrial];

// 	return (
// 		<div className="mt-10 mx-auto w-[90%] p-4">
// 			<div
// 				className="flex items-center justify-center gap-[20px] relative"
// 				id="card_title"
// 			>
// 				{dataCountry.map((city, index) => (
// 					<motion.button
// 						key={city}
// 						onClick={() => handleButtonClick(city)}
// 						className={
// 							city !== activeButton
// 								? showMenuBar
// 									? "px-6 py-3 rounded-full border-black border-[1px] hover:scale-110 duration-500 ease-in-all-out relative -z-10"
// 									: "px-6 py-3 rounded-full border-black border-[1px] hover:scale-110 duration-500 ease-in-all-out relative "
// 								: showMenuBar
// 								? "px-6 py-3 rounded-full text-white border-[1px] hover:scale-110 duration-500 ease-in-all-out relative -z-10"
// 								: "px-6 py-3 rounded-full text-white border-[1px] hover:scale-110 duration-500 ease-in-all-out relative "
// 						}
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1, transition: { duration: 0.5 } }}
// 						exit={{ opacity: 0, transition: { duration: 0.5 } }}
// 						id={`${city}-${index}`}
// 					>
// 						{activeButton === city ? (
// 							<motion.span
// 								layoutId="underline"
// 								initial={{ width: 0 }}
// 								animate={{ width: "100%", transition: { duration: 0.5 } }}
// 								exit={{ width: 0, transition: { duration: 0.5 } }}
// 								className="border-[white] border-b-[1px] text-[white]"
// 							>
// 								{city}
// 							</motion.span>
// 						) : (
// 							<span>{city}</span>
// 						)}
// 					</motion.button>
// 				))}
// 				<motion.div
// 					className="bg-[tomato] rounded-full left-0 h-12 absolute -z-10"
// 					style={{ width: `${width}px` }}
// 					initial={{ x: 0 }}
// 					animate={{ x: distance, transition: { duration: 0.5 } }}
// 				></motion.div>
// 			</div>
// 			<AnimatePresence mode="wait">
// 				<motion.h2
// 					key={activeButton}
// 					className="text-2xl text-black mb-2"
// 					initial={{ opacity: 0, x: -20 }}
// 					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
// 					exit={{ opacity: 0, x: 20, transition: { duration: 0.5 } }}
// 				>
// 					{activeButton}
// 				</motion.h2>
// 			</AnimatePresence>
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw] ">
// 				{[1, 2, 3].map((item, index) => (
// 					<div
// 						key={item}
// 						className="flex flex-col items-center gap-[20px] "
// 					>
// 						<div
// 							className={
// 								showMenuBar
// 									? "image bg-gray-200 max-w-[20rem] max-h-[20rem] overflow-hidden flex -z-10"
// 									: "image bg-gray-200 max-w-[20rem] max-h-[20rem] overflow-hidden flex "
// 							}
// 						>
// 							<img
// 								src={images[index]}
// 								alt="image-trial"
// 								className="block cursor-pointer hover:scale-125 duration-500 ease-in-out-all"
// 							/>
// 						</div>
// 						<div className="info">
// 							<div className="place-time flex justify-between">
// 								<p>Lorem ipsum dolor sit amet.</p>
// 								<p>30 min</p>
// 							</div>
// 							<div className="description flex justify-between">
// 								<p className="max-w-[300px]">
// 									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae odio, eaque nobis
// 									recusandae id quos laboriosam dolore voluptate corrupti mollitia.
// 								</p>
// 								<p className="min-w-[40px]">20 min</p>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<div className="my-20 flex flex-col xl:flex-row md:justify-between rounded-lg xl:bg-gray-700 p-10 items-center">

// 			</div>
// 		</div>
// 	);
// };

// export default CountryFood;

import React from "react";
import "./CountryFood.css";
const CountryFood = () => {
	return (
		<div className="py-[calc(1.75rem+1.75vw)]">
			<div className="py-[calc(1.75rem+1.75vw)]">
				<div className="container mx-auto px-5 w-[94%] md:w-[90%] ">
					<div className="content max-xl:pb-[1.25rem] text-center">
						<div>
							<h2 className="font-extrabold text-[calc(18px+0.5vw)] leading-snug">
								Most Popular Restaurants Near By Me
							</h2>
							<p className="mb-[1rem] text-[#666666] ">
								Popular this month. Top restaurants, cafes, pubs, and bars in and around you serving delightful
								food right at your doorstep
							</p>
						</div>
					</div>

					<ul className="button !mb-[3rem] max-xl:pb-[0.5rem] flex justify-center">
						<li className="mx-[0.125rem] py-[0.75rem] px-[1.25rem] border-[1px] rounded-full border-[#ddd]">
							<a
								href=""
								className="text-[#666] font-semibold text-[14px] leading-3 "
							>
								Harare
							</a>
						</li>
						<li className="mx-[0.125rem] py-[0.75rem] px-[1.25rem] border-[1px] rounded-full border-[#ddd]">
							<a
								href=""
								className="text-[#666] font-semibold text-[14px] leading-3 "
							>
								Harare
							</a>
						</li>
						<li className="mx-[0.125rem] py-[0.75rem] px-[1.25rem] border-[1px] rounded-full border-[#ddd]">
							<a
								href=""
								className="text-[#666] font-semibold text-[14px] leading-3 "
							>
								Harare
							</a>
						</li>
					</ul>
					<div className="card max-lg:flex max-lg:overflow-scroll lg:grid lg:grid-cols-3">
						<a
							href=""
							className="mb-[0.75rem] md:mb-0 pl-[20px] lg:min-w-[350px] min-w-[250px] sm:min-w-[350px]"
						>
							<div className="min-w-[1200px]:pr-[3rem] min-w-[1400px]:mx-[-0.625rem]">
								<div className="px-[0.625rem] ">
									<div className=" image-card relative overflow-hidden">
										<img
											src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
											alt=""
											className="rounded-lg hover:scale-125 ease-in-out duration-500"
										/>
									</div>
									<div className="md:py-[1.25rem] shadow-box max-md:p-[1.125rem] pt-[1.75rem] md:grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
										<h2 className="text-[1.25rem] truncate max-md:mb-[0.25rem]">DK restaurant</h2>
										<span className="text-[14px] order-2 md:order-3 line-clamp-2 max-md:mb-[1.25rem]">
											At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
										</span>
										<div className="max-md:flex max-md:flex-row-reverse max-md:justify-end md:hidden">
											<div className="text-[14px] md:order-2 md:ml-auto flex items-center ml-[1.25rem]">
												<span className="mr-[0.25rem]">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="12"
														height="12"
														viewBox="0 0 12 12"
													>
														<path
															d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
															transform="translate(-2 -2)"
														></path>
													</svg>
												</span>
												<span className="text-[14px]">30 Mins </span>
											</div>

											<div className="text-[14px] lg:order-4 md:ml-auto ">Min Order $5.00 </div>
										</div>
										<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center max-md:hidden">
											<span className="mr-[0.25rem]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 12 12"
												>
													<path
														d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
														transform="translate(-2 -2)"
													></path>
												</svg>
											</span>
											<span className="text-[14px]">30 Mins </span>
										</div>
										<div className="text-[14px] max-md:hidden md:order-4 md:ml-auto ">Min Order $5.00 </div>
									</div>
								</div>
							</div>
						</a>{" "}
						<a
							href=""
							className="mb-[0.75rem] md:mb-0 pl-[20px] lg:min-w-[350px] min-w-[250px] sm:min-w-[350px]"
						>
							<div className="min-w-[1200px]:pr-[3rem] min-w-[1400px]:mx-[-0.625rem]">
								<div className="px-[0.625rem] ">
									<div className=" image-card relative overflow-hidden">
										<img
											src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
											alt=""
											className="rounded-lg hover:scale-125 ease-in-out duration-500"
										/>
									</div>
									<div className="md:py-[1.25rem] shadow-box max-md:p-[1.125rem] pt-[1.75rem] md:grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
										<h2 className="text-[1.25rem] truncate max-md:mb-[0.25rem]">DK restaurant</h2>
										<span className="text-[14px] order-2 md:order-3 line-clamp-2 max-md:mb-[1.25rem]">
											At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
										</span>
										<div className="max-md:flex max-md:flex-row-reverse max-md:justify-end md:hidden">
											<div className="text-[14px] md:order-2 md:ml-auto flex items-center ml-[1.25rem]">
												<span className="mr-[0.25rem]">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="12"
														height="12"
														viewBox="0 0 12 12"
													>
														<path
															d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
															transform="translate(-2 -2)"
														></path>
													</svg>
												</span>
												<span className="text-[14px]">30 Mins </span>
											</div>

											<div className="text-[14px] lg:order-4 md:ml-auto ">Min Order $5.00 </div>
										</div>
										<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center max-md:hidden">
											<span className="mr-[0.25rem]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 12 12"
												>
													<path
														d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
														transform="translate(-2 -2)"
													></path>
												</svg>
											</span>
											<span className="text-[14px]">30 Mins </span>
										</div>
										<div className="text-[14px] max-md:hidden md:order-4 md:ml-auto ">Min Order $5.00 </div>
									</div>
								</div>
							</div>
						</a>{" "}
						<a
							href=""
							className="mb-[0.75rem] md:mb-0 pl-[20px] lg:min-w-[350px] min-w-[250px] sm:min-w-[350px]"
						>
							<div className="min-w-[1200px]:pr-[3rem] min-w-[1400px]:mx-[-0.625rem]">
								<div className="px-[0.625rem] ">
									<div className=" image-card relative overflow-hidden">
										<img
											src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
											alt=""
											className="rounded-lg hover:scale-125 ease-in-out duration-500"
										/>
									</div>
									<div className="md:py-[1.25rem] shadow-box max-md:p-[1.125rem] pt-[1.75rem] md:grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
										<h2 className="text-[1.25rem] truncate max-md:mb-[0.25rem]">DK restaurant</h2>
										<span className="text-[14px] order-2 md:order-3 line-clamp-2 max-md:mb-[1.25rem]">
											At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
										</span>
										<div className="max-md:flex max-md:flex-row-reverse max-md:justify-end md:hidden">
											<div className="text-[14px] md:order-2 md:ml-auto flex items-center ml-[1.25rem]">
												<span className="mr-[0.25rem]">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="12"
														height="12"
														viewBox="0 0 12 12"
													>
														<path
															d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
															transform="translate(-2 -2)"
														></path>
													</svg>
												</span>
												<span className="text-[14px]">30 Mins </span>
											</div>

											<div className="text-[14px] lg:order-4 md:ml-auto ">Min Order $5.00 </div>
										</div>
										<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center max-md:hidden">
											<span className="mr-[0.25rem]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 12 12"
												>
													<path
														d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
														transform="translate(-2 -2)"
													></path>
												</svg>
											</span>
											<span className="text-[14px]">30 Mins </span>
										</div>
										<div className="text-[14px] max-md:hidden md:order-4 md:ml-auto ">Min Order $5.00 </div>
									</div>
								</div>
							</div>
						</a>{" "}
						<a
							href=""
							className="mb-[0.75rem] md:mb-0 pl-[20px] lg:min-w-[350px] min-w-[250px] sm:min-w-[350px]"
						>
							<div className="min-w-[1200px]:pr-[3rem] min-w-[1400px]:mx-[-0.625rem]">
								<div className="px-[0.625rem] ">
									<div className=" image-card relative overflow-hidden">
										<img
											src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
											alt=""
											className="rounded-lg hover:scale-125 ease-in-out duration-500"
										/>
									</div>
									<div className="md:py-[1.25rem] shadow-box max-md:p-[1.125rem] pt-[1.75rem] md:grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
										<h2 className="text-[1.25rem] truncate max-md:mb-[0.25rem]">DK restaurant</h2>
										<span className="text-[14px] order-2 md:order-3 line-clamp-2 max-md:mb-[1.25rem]">
											At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
										</span>
										<div className="max-md:flex max-md:flex-row-reverse max-md:justify-end md:hidden">
											<div className="text-[14px] md:order-2 md:ml-auto flex items-center ml-[1.25rem]">
												<span className="mr-[0.25rem]">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="12"
														height="12"
														viewBox="0 0 12 12"
													>
														<path
															d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
															transform="translate(-2 -2)"
														></path>
													</svg>
												</span>
												<span className="text-[14px]">30 Mins </span>
											</div>

											<div className="text-[14px] lg:order-4 md:ml-auto ">Min Order $5.00 </div>
										</div>
										<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center max-md:hidden">
											<span className="mr-[0.25rem]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 12 12"
												>
													<path
														d="M8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Zm0-1.2A4.8,4.8,0,1,0,3.2,8,4.8,4.8,0,0,0,8,12.8ZM8.6,8H11V9.2H7.4V5H8.6Z"
														transform="translate(-2 -2)"
													></path>
												</svg>
											</span>
											<span className="text-[14px]">30 Mins </span>
										</div>
										<div className="text-[14px] max-md:hidden md:order-4 md:ml-auto ">Min Order $5.00 </div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="py-[calc(1.75rem+1.75vw)] ">
				<div className="container mx-auto px-5 py-10 md:w-[90%] max-md:w-[94%] lg:bg-[#333] lg:rounded-xl">
					<div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center  lg:justify-between py-5 px-[calc(1.75rem+1.75vw)] max-lg:max-w-[500px] max-lg:mx-auto">
						<h2 className="text-[calc(18px+0.5vw)] pb-[10px] text-center lg:text-start lg:text-white text-black">
							Choose From Widest Range Of More Popular Restaurants In{" "}
							<span className="lg:border-b-[1px] lg:border-dashed lg:border-white">New york</span>
						</h2>

						<button className="w-[400px] hover:bg-[black] xl:w-auto ease-in-all-out duration-500 bg-[orange] max-xl:text-[0.875rem] text-white px-6 py-3 rounded-full">
							View all restaurants
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryFood;
