import React from "react";
import "./HowItworks.css";
const HowItworks = () => {
	const benefitData = [
		{
			itemNumber: "01.",
			title: "Search",
			description: "Find your restaurant using advanced location based search filter.",
			imageUrl: "https://demo.yoyumm.com/images/retina/icon__step-1.svg",
		},
		{
			itemNumber: "02.",
			title: "Choose",
			description: "Select a best fit and appropriate restaurant which fulfills your binge and taste buds.",
			imageUrl: "https://demo.yoyumm.com/images/retina/icon__step-2.svg",
		},
		{
			itemNumber: "03.",
			title: "Pay",
			description: "Make payment using instant and secured online process or cash on delivery.",
			imageUrl: "https://demo.yoyumm.com/images/retina/icon__step-3.svg",
		},
		{
			itemNumber: "04.",
			title: "Enjoy",
			description: "Celebrate and have a good time enjoying your chosen delicacy.",
			imageUrl: "https://demo.yoyumm.com/images/retina/icon__step-4.svg",
		},
	];
	return (
		<div className="py-[calc(1.75rem+1.75vw)] w-full">
			<div className="mx-auto w-[90%] px-5 max-md:w-[94%]">
				<div className="pb-[1.25rem]">
					<h6 className="font-semibold text-[1rem]">How it works</h6>
					<h2 className="font-extrabold text-[calc(18px+0.5vw)]">Get Started With 4 Simple Steps</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[2rem] md:gap-y-[2rem] xl:grid-cols-4">
					<div className="flex xl:flex-col step relative">
						{/* <div></div> */}
						<div className="max-xl:mr-[1.25rem] xl:p-[0.625rem] xl:border-[2px] xl:border-gray-200 w-[80px] rounded-full">
							<img
								src="https://demo.yoyumm.com/images/retina/icon__step-1.svg"
								alt=""
								className="max-w-[60px] max-xl:w-[60px] max-xl:h-[60px] max-xl:flex-grow-0 max-xl:flex-shrink-0 max-xl:basis-[60px]"
							/>
						</div>

						<div className="xl:pt-[2rem]">
							<h6 className="title-how-it-works flex pb-[10px] text-[1.125rem] font-semibold"> {"  "}Search</h6>
							<p className="text-[#666666]">Find your restaurant using advanced location based search filter.</p>
						</div>
					</div>
					<div className="flex xl:flex-col step relative">
						{/* <div></div> */}
						<div className="max-xl:mr-[1.25rem] xl:p-[0.625rem] xl:border-[2px] xl:border-gray-200 w-[80px] rounded-full">
							<img
								src="https://demo.yoyumm.com/images/retina/icon__step-1.svg"
								alt=""
								className="max-w-[60px] max-xl:w-[60px] max-xl:h-[60px] max-xl:flex-grow-0 max-xl:flex-shrink-0 max-xl:basis-[60px]"
							/>
						</div>

						<div className="xl:pt-[2rem]">
							<h6 className="title-how-it-works flex pb-[10px] text-[1.125rem] font-semibold"> {"  "}Search</h6>
							<p className="text-[#666666]">Find your restaurant using advanced location based search filter.</p>
						</div>
					</div>{" "}
					<div className="flex xl:flex-col step relative">
						{/* <div></div> */}
						<div className="max-xl:mr-[1.25rem] xl:p-[0.625rem] xl:border-[2px] xl:border-gray-200 w-[80px] rounded-full">
							<img
								src="https://demo.yoyumm.com/images/retina/icon__step-1.svg"
								alt=""
								className="max-w-[60px] max-xl:w-[60px] max-xl:h-[60px] max-xl:flex-grow-0 max-xl:flex-shrink-0 max-xl:basis-[60px]"
							/>
						</div>

						<div className="xl:pt-[2rem]">
							<h6 className="title-how-it-works flex pb-[10px] text-[1.125rem] font-semibold"> {"  "}Search</h6>
							<p className="text-[#666666]">Find your restaurant using advanced location based search filter.</p>
						</div>
					</div>{" "}
					<div className="flex xl:flex-col ">
						{/* <div></div> */}
						<div className="max-xl:mr-[1.25rem] xl:p-[0.625rem] xl:border-[2px] xl:border-gray-200 w-[80px] rounded-full">
							<img
								src="https://demo.yoyumm.com/images/retina/icon__step-1.svg"
								alt=""
								className="max-w-[60px] max-xl:w-[60px] max-xl:h-[60px] max-xl:flex-grow-0 max-xl:flex-shrink-0 max-xl:basis-[60px]"
							/>
						</div>

						<div className="xl:pt-[2rem]">
							<h6 className="title-how-it-works flex pb-[10px] text-[1.125rem] font-semibold"> {"  "}Search</h6>
							<p className="text-[#666666]">Find your restaurant using advanced location based search filter.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItworks;

{
	/* {benefitData.map((each, index) => {
						return (
							<div className="h-100 p-6 flex xl:block">
								<div className="flex justify-between items-center gap-3">
									<img
										src={each.imageUrl}
										alt={each.title}
									/>
									{index !== 3 && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="red"
											className="size-10 hidden xl:block "
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
											/>
										</svg>
									)}
								</div>

								<div>
									<h1 className="my-4">
										<span className="text-[red] font-bold mr-2">{each.itemNumber}</span>
										{each.title}
									</h1>
									<p className="text-gray-500 font-bold">{each.description}</p>
								</div>
							</div>
						);
					})} */
}
