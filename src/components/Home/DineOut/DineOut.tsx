// import React from "react";

// import ImageForTrial from "./../../assets/images-1.jpg";

// const DineOut = ({ showMenuBar }: { showMenuBar: boolean }) => {
// 	const data = [
// 		{
// 			imageUrl: ImageForTrial,
// 			title: "	Lorem ipsum dolor sit amet.",
// 			time: "30 min",
// 			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid.",
// 		},
// 		{
// 			imageUrl: ImageForTrial,
// 			title: "	voluptatum ex nobis vel possimus molestias. Quibusdam..",
// 			time: "20 min",
// 			description:
// 				"Eaque harum, unde assumenda ab animi inventore delectus aut deleniti, iste dolor eveniet quidem possimus earum mollitia dolores culpa nostrum aliquid quas.",
// 		},
// 		{
// 			imageUrl: ImageForTrial,
// 			title: "	Vero, quas nesciunt vitae nisi earum ipsa, a ad accusantium dignissimos",
// 			time: "1 hour",
// 			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid.",
// 		},
// 	];

// 	return (
// 		<div className="mt-10 mx-auto w-[90%]">
// 			<h2 className="text-2xl text-black mb-2">Dine out restaurant</h2>
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw]">
// 				{data.map((each, index) => {
// 					return (
// 						<div
// 							className="flex flex-col items-center gap-[20px]"
// 							key={JSON.stringify(each) + index}
// 						>
// 							<div
// 								className={
// 									showMenuBar
// 										? "image flex overflow-hidden justify-center items-center -z-10"
// 										: "image flex overflow-hidden justify-center items-center "
// 								}
// 							>
// 								<img
// 									src={each.imageUrl}
// 									alt={each.title}
// 									className={
// 										showMenuBar
// 											? "block cursor-pointer -z-10 hover:scale-125 duration-500 ease-in-out-all"
// 											: "block cursor-pointer hover:scale-125 duration-500 ease-in-out-all"
// 									}
// 								/>
// 							</div>
// 							<div className="info">
// 								<div className="place-time flex justify-between">
// 									<p>{each.title}</p>
// 									<p>{each.time}</p>
// 								</div>
// 								<div className="description flex justify-between ">
// 									<p className="max-w-[300px]">{each.description}</p>
// 									<p className="min-w-[40px]">{each.time}</p>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default DineOut;

import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./DineOut.css";
const DineOut = () => {
	return (
		<div className="py-[calc(1.75rem+1.75vw)]">
			<div className="container mx-auto w-[90%] px-5 relative">
				<div className="pb-[1.25rem]">
					<h2 className="text-[calc(18px+0.50vw)] font-extrabold">Dine-out Restaurants Near By Me</h2>
				</div>

				<div className=" flex overflow-scroll">
					<div className="bg-white hover:bg-red-700 hover:text-white duration-300 ease-in-out w-[40px] h-[40px] rounded-full absolute z-20 top-1/3 left-0 previous-icon "></div>
					<a
						href=""
						className="max-md:mb-[0.75rem] md:mb-0 max-md:pl-[20px] min-w-[400px]"
					>
						<div className="xl:pr-[3rem] 2xl:mx-[-0.625rem]">
							<div className="px-[0.625rem] ">
								<div className=" image-card relative overflow-hidden">
									<img
										src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
										alt=""
										className="rounded-lg hover:scale-125 ease-in-out duration-500"
									/>
								</div>
								<div className="py-[1.25rem]  grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
									<h2 className="text-[1.25rem] truncate">DK restaurant</h2>
									<span className="text-[14px] md:order-3 line-clamp-2">
										At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
									</span>
									<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center">
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

									<div className="text-[14px] md:order-4 md:ml-auto">Min Order $5.00 </div>
								</div>
							</div>
						</div>
					</a>
					<a
						href=""
						className="max-md:mb-[0.75rem] md:mb-0 max-md:pl-[20px] min-w-[400px]"
					>
						<div className="xl:pr-[3rem] 2xl:mx-[-0.625rem]">
							<div className="px-[0.625rem] ">
								<div className=" image-card relative overflow-hidden">
									<img
										src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
										alt=""
										className="rounded-lg hover:scale-125 ease-in-out duration-500"
									/>
								</div>
								<div className="py-[1.25rem]  grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
									<h2 className="text-[1.25rem] truncate">DK restaurant</h2>
									<span className="text-[14px] md:order-3 line-clamp-2">
										At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
									</span>
									<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center">
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

									<div className="text-[14px] md:order-4 md:ml-auto">Min Order $5.00 </div>
								</div>
							</div>
						</div>
					</a>{" "}
					<a
						href=""
						className="max-md:mb-[0.75rem] md:mb-0 max-md:pl-[20px] min-w-[400px]"
					>
						<div className="xl:pr-[3rem] 2xl:mx-[-0.625rem]">
							<div className="px-[0.625rem] ">
								<div className=" image-card relative overflow-hidden">
									<img
										src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
										alt=""
										className="rounded-lg hover:scale-125 ease-in-out duration-500"
									/>
								</div>
								<div className="py-[1.25rem]  grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
									<h2 className="text-[1.25rem] truncate">DK restaurant</h2>
									<span className="text-[14px] md:order-3 line-clamp-2">
										At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
									</span>
									<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center">
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

									<div className="text-[14px] md:order-4 md:ml-auto">Min Order $5.00 </div>
								</div>
							</div>
						</div>
					</a>{" "}
					<a
						href=""
						className="max-md:mb-[0.75rem] md:mb-0 max-md:pl-[20px] min-w-[400px]"
					>
						<div className="xl:pr-[3rem] 2xl:mx-[-0.625rem]">
							<div className="px-[0.625rem] ">
								<div className=" image-card relative overflow-hidden">
									<img
										src="https://demo.yoyumm.com/image/restaurant-logo/154/800/450?t=1718690102"
										alt=""
										className="rounded-lg hover:scale-125 ease-in-out duration-500"
									/>
								</div>
								<div className="py-[1.25rem]  grid md:grid-cols-2 md:gap-y-[0.125rem] md:gap-x-[1rem]">
									<h2 className="text-[1.25rem] truncate">DK restaurant</h2>
									<span className="text-[14px] md:order-3 line-clamp-2">
										At Grand Central Terminal, 109 E 42nd St, New York, United States, 10017
									</span>
									<div className="text-[14px] md:order-2 md:ml-auto md:flex md:items-center">
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

									<div className="text-[14px] md:order-4 md:ml-auto">Min Order $5.00 </div>
								</div>
							</div>
						</div>
					</a>
					<div className="next-icon bg-white hover:bg-red-700 hover:text-white duration-300ms w-[40px] h-[40px] rounded-full absolute right-0 top-1/3"></div>
				</div>
			</div>
		</div>
	);
};

export default DineOut;

// rgba(244, 222, 190, .3)
